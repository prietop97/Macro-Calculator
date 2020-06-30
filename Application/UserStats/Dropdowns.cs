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

namespace Application.UserStats
{
    public class Dropdowns
    {
        public class Query : IRequest<DropdownsDto>
        {
        }

        public class Handler : IRequestHandler<Query, DropdownsDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<DropdownsDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var activityFactors = await _context.ActivitiesFactor.ToListAsync();
                var activityFactorDto = _mapper.Map<List<ActivityFactor>, List<ActivityFactorDto>>(activityFactors);

                var genders = await _context.Genders.ToListAsync();
                var gendersDto = _mapper.Map<List<Gender>, List<GenderDto>>(genders);

                var goals = await _context.Goals.ToListAsync();
                var goalsDto = _mapper.Map<List<Goal>, List<GoalDto>>(goals);

                var unitSystems = await _context.UnitSystems.ToListAsync();
                var unitSystemsDto = _mapper.Map<List<UnitSystem>, List<UnitSystemDto>>(unitSystems);

                var dropDownDto = new DropdownsDto
                {
                    ActivityFactors = activityFactorDto,
                    Genders = gendersDto,
                    Goals = goalsDto,
                    UnitSystems = unitSystemsDto,
                };

                return dropDownDto;
            }
        }
    }
}