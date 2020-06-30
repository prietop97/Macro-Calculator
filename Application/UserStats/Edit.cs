using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.UserStats
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int GoalId { get; set; }
            public int GenderId { get; set; }
            public int UnitSystemId { get; set; }
            public int? Height { get; set; }
            public int ActivityFactorId { get; set; }
            public DateTime? DateOfBirth { get; set; }
            public int? Calories { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                //RuleFor(x => x.GoalId).NotEmpty();
                //RuleFor(x => x.GenderId).NotEmpty();
                //RuleFor(x => x.Height).NotEmpty();
                //RuleFor(x => x.ActivityFactorId).NotEmpty();
                //RuleFor(x => x.DateOfBirth).NotEmpty();
                //RuleFor(x => x.HeightUnitId).NotEmpty();
                //RuleFor(x => x.WeightUnitId).NotEmpty();
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
                var Id = _userAccessor.GetCurrentId();

                var userStat = await _context.UserStats.FirstOrDefaultAsync(u => u.AppUserId == Id);
                _context.UserStats.Remove(userStat);
                var success = await _context.SaveChangesAsync() > 0;

                if (userStat == null)
                    throw new RestException(HttpStatusCode.BadRequest, new { stats = "User stats does not exits" });

                var goal = await _context.Goals.FindAsync(request.GoalId);
                var gender = await _context.Genders.FindAsync(request.GenderId);
                var activityFactor = await _context.ActivitiesFactor.FindAsync(request.ActivityFactorId);
                var unitSystem = await _context.UnitSystems.FindAsync(request.UnitSystemId);

                if (goal != null)
                {
                    userStat.GoalId = request.GoalId;
                    userStat.Goal = goal;
                }
                if (gender != null)
                {
                    userStat.Gender = gender;
                    userStat.GenderId = request.GenderId;
                }
                if (activityFactor != null)
                {
                    userStat.ActivityFactor = activityFactor;
                    userStat.ActivityFactorId = request.ActivityFactorId;
                }
                if (unitSystem != null)
                {
                    userStat.UnitSystem = unitSystem;
                    userStat.UnitSystemId = request.UnitSystemId;
                }


                userStat.Height = request.Height ?? userStat.Height;
                userStat.DateOfBirth = request.DateOfBirth ?? userStat.DateOfBirth;
                // userStat.Calories = request.Calories ?? userStat.Calories;

                _context.UserStats.Add(userStat);
                var success2 = await _context.SaveChangesAsync() > 0;

                if (success2) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}