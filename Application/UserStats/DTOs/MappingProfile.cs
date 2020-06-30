using System;
using Domain;
using AutoMapper;
using Domain.UserEntities;
using Application.UserStats.DTOs;

namespace Application.MainDTOs
{
    public class UserStatsMappingProfile : Profile
    {
        public UserStatsMappingProfile()
        {
            CreateMap<ActivityFactor, ActivityFactorDto>();
            CreateMap<Goal, GoalDto>();
            CreateMap<UnitSystem, UnitSystemDto>();
            CreateMap<Gender, GenderDto>();
            CreateMap<UserStat, UserStatsDto>();
        }
    }
}
