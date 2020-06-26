using System;
using Domain;
using AutoMapper;
using Domain.User;
using Domain.Common;
using Application.UserStats.DTOs;

namespace Application.MainDTOs
{
    public class UserStatsMappingProfile : Profile
    {
        public UserStatsMappingProfile()
        {
            CreateMap<ActivityFactor, ActivityFactorDto>();
            CreateMap<Goal, GoalDto>();
            CreateMap<HeightUnit, HeightUnitDto>();
            CreateMap<WeightUnit, WeightUnitDto>();
            CreateMap<Gender, GenderDto>();
            CreateMap<UserStat, UserStatsDto>();
        }
    }
}
