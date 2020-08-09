using System.Collections.Generic;
using Domain.MealEntities;
using AutoMapper;
using Domain.UserEntities;
using Application.UserStats.DTOs;

namespace Application.MainDTOs
{
    public class ActivityFactorMappingProfile : Profile
    {
        public ActivityFactorMappingProfile()
        {
            CreateMap<ActivityFactor, ActivityFactorDto>();
            CreateMap<Goal, GoalDto>();
            CreateMap<UnitSystem, UnitSystemDto>();
            CreateMap<Gender, GenderDto>();
            CreateMap<AppUser, UserInfoDto>().ForMember(u => u.Username, o => o.MapFrom(s => s.UserName));
            CreateMap<UserStat, UserStatsDto>();
            CreateMap<Meal, MealDto>();
            CreateMap<MealType, MealTypeDto>();
            CreateMap<DailyMealPlan, DailyMealPlanDto>();
            CreateMap<UserMeals, UserMealsDto>();
        }
    }
}
