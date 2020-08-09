using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Domain.MealEntities;

namespace Application.MealPlan
{
    public class RemoveFoodFromMealPlan
    {
        public class Command : IRequest
        {
            public int MealId { get; set; }
            public int DailyMealPlanId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            // public CommandValidator()
            // {
            //     RuleFor(x => x.Description).NotEmpty();
            //     RuleFor(x => x.Multiplier).NotEmpty();
            // }
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
                Console.WriteLine(request.DailyMealPlanId);
                Console.WriteLine(request.MealId);
                var dailyMealPlan = await _context.DailyMealPlans.Include(x => x.UserMeals).FirstOrDefaultAsync(x => x.Id == request.DailyMealPlanId);
                var meal = await _context.UsersMeals.FirstOrDefaultAsync(x => x.DailyMealPlanId == request.DailyMealPlanId && x.MealId == request.MealId);
                dailyMealPlan.UserMeals.Remove(meal);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}
