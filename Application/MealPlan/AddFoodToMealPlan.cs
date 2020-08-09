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
    public class AddFoodToMealPlan
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Image { get; set; }
            public int CarbsGrams { get; set; }
            public int ProteinGrams { get; set; }
            public int FatGrams { get; set; }
            public int Calories { get; set; }
            public int MealPlanId { get; set; }
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
                var meal = await _context.Meals.FirstOrDefaultAsync(x => x.GoogleId == request.Id);
                if (meal == null)
                {
                    var newMeal = new Meal
                    {
                        GoogleId = request.Id,
                        Title = request.Title,
                        Image = request.Image,
                        CarbsGrams = request.CarbsGrams,
                        ProteinGrams = request.ProteinGrams,
                        FatGrams = request.FatGrams,
                        Calories = request.Calories
                    };
                    _context.Meals.Add(newMeal);
                    await _context.SaveChangesAsync();
                    meal = await _context.Meals.FirstOrDefaultAsync(x => x.GoogleId == request.Id);
                }
                var userMeal = await _context.UsersMeals.FirstOrDefaultAsync(x => x.MealId == meal.Id && x.DailyMealPlanId == request.MealPlanId);
                if (userMeal != null)
                {
                    userMeal.quantity++;
                    await _context.SaveChangesAsync();
                    return Unit.Value;
                }
                var dailyMealPlan = await _context.DailyMealPlans.Include(x => x.UserMeals).FirstOrDefaultAsync(x => x.Id == request.MealPlanId);
                dailyMealPlan.UserMeals.Add(new UserMeals
                {
                    Meal = meal,
                    MealId = meal.Id,
                    quantity = 1,
                    DailyMealPlan = dailyMealPlan,
                    DailyMealPlanId = dailyMealPlan.Id,
                    MealTypeId = 1
                });
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}
