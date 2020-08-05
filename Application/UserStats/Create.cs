using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using Domain.UserEntities;
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
            public int UnitSystemId { get; set; }
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
                RuleFor(x => x.UnitSystemId).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
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
                var unitSystem = await _context.UnitSystems.FindAsync(request.UnitSystemId);

                if (goal == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { goal = "Goal Id is not valid" });
                if (gender == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { gener = "Gender Id is not valid" });
                if (activityFactor == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { activityFactor = "ActivityFactor Id is not valid" });
                if (unitSystem == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { hightUnit = "UnitSystem Id is not valid" });


                var userStats = new UserStat
                {
                    Goal = goal,
                    Gender = gender,
                    ActivityFactor = activityFactor,
                    UnitSystem = unitSystem,
                    Height = request.Height,
                    Weight = request.Weight,
                    DateOfBirth = request.DateOfBirth,
                    AppUserId = _userAccessor.GetCurrentId(),
                };

                _context.UserStats.Add(userStats);
                var success = await _context.SaveChangesAsync() > 0;


                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}