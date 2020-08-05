using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;
using System.Collections.Generic;
using Domain.UserEntities;
using Application.UserStats.DTOs;
using Domain.MealEntities;
using Application.MainDTOs;

namespace Application.MealPlan
{
    public class Detail
    {
        public class Query : IRequest<DailyMealPlanDto>
        {
            public DateTime Date { get; set; }
        }

        public class Handler : IRequestHandler<Query, DailyMealPlanDto>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMapper _mapper;
            private readonly IMacroCalculator _macroCalculator;

            public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper, IMacroCalculator macroCalculator)
            {
                _macroCalculator = macroCalculator;
                _context = context;
                _userAccessor = userAccessor;
                _mapper = mapper;
            }

            public async Task<DailyMealPlanDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var Id = _userAccessor.GetCurrentId();
                var dailyMealPlan = await _context.DailyMealPlans.FirstOrDefaultAsync(x => x.Date == request.Date);
                if (dailyMealPlan == null)
                {
                    var userStats = await _context.UserStats.Include(x => x.UnitSystem).Include(x => x.Gender).Include(x => x.ActivityFactor).Include(x => x.Goal).FirstOrDefaultAsync(x => x.AppUserId == Id);
                    var macros = _macroCalculator.CalculateMacros(userStats);
                    dailyMealPlan = new DailyMealPlan
                    {
                        Date = request.Date,
                        UserId = Id,
                        ProteinGrams = macros.ProteinGrams,
                        CarbsGrams = macros.CarbsGrams,
                        FatGrams = macros.FatGrams,
                        Calories = macros.Calories
                    };

                    _context.DailyMealPlans.Add(dailyMealPlan);
                    await _context.SaveChangesAsync();
                    dailyMealPlan = await _context.DailyMealPlans.FirstOrDefaultAsync(x => x.Date == request.Date);
                }
                var mealPlanDto = _mapper.Map<DailyMealPlan, DailyMealPlanDto>(dailyMealPlan);
                return mealPlanDto;
            }
        }
    }
}