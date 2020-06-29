using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using Domain.User;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.UserStats
{
    public class Create
    {
        public class Command : IRequest
        {
            public int GoalId { get; set; }
            public int GenderId { get; set; }
            public int HeightUnitId { get; set; }
            public int WeightUnitId { get; set; }
            public double Height { get; set; }
            public double Weight { get; set; }
            public int ActivityFactorId { get; set; }
            public DateTime DateOfBirth { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.GoalId).NotEmpty();
                RuleFor(x => x.GenderId).NotEmpty();
                RuleFor(x => x.Height).NotEmpty();
                RuleFor(x => x.Weight).NotEmpty();
                RuleFor(x => x.ActivityFactorId).NotEmpty();
                RuleFor(x => x.DateOfBirth).NotEmpty();
                RuleFor(x => x.HeightUnitId).NotEmpty();
                RuleFor(x => x.WeightUnitId).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMacroCalculator _macroCalculator;

            public Handler(DataContext context, IUserAccessor userAccessor, IMacroCalculator macroCalculator)
            {
                _context = context;
                _userAccessor = userAccessor;
                _macroCalculator = macroCalculator;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var userStatsOld = await _context.UserStats.FirstOrDefaultAsync(x => x.AppUserId == _userAccessor.GetCurrentId());

                if (userStatsOld != null)
                {
                    throw new RestException(HttpStatusCode.BadRequest, new { stats = "User stats already exists for this user" });
                }

                var goal = await _context.Goals.FindAsync(request.GoalId);
                var gender = await _context.Genders.FindAsync(request.GenderId);
                var activityFactor = await _context.ActivitiesFactor.FindAsync(request.ActivityFactorId);
                var heightUnit = await _context.HeightUnits.FindAsync(request.HeightUnitId);
                var weightUnit = await _context.WeightUnits.FindAsync(request.WeightUnitId);

                if (goal == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { goal = "Goal Id is not valid" });
                if (gender == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { gener = "Gender Id is not valid" });
                if (activityFactor == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { activityFactor = "ActivityFactor Id is not valid" });
                if (heightUnit == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { hightUnit = "HeightUnit Id is not valid" });
                if (weightUnit == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { weightUnit = "WeightUnit Id is not valid" });

                var userStats = new UserStat
                {
                    Goal = goal,
                    Gender = gender,
                    ActivityFactor = activityFactor,
                    HeightUnit = heightUnit,
                    WeightUnit = weightUnit,
                    Height = request.Height,
                    Weight = request.Weight,
                    DateOfBirth = request.DateOfBirth,
                    AppUserId = _userAccessor.GetCurrentId(),
                };


                


                
                //var created = await _context.UserStats.FirstOrDefaultAsync(x => x.AppUserId == _userAccessor.GetCurrentId());
                var calories = _macroCalculator.CalculateMacros(userStats);
                userStats.Calories = calories;
                _context.UserStats.Add(userStats);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}