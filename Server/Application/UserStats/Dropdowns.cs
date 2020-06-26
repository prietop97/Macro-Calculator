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
using Domain.User;
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

                var heightUnits = await _context.HeightUnits.ToListAsync();
                var heightUnitsDto = _mapper.Map<List<HeightUnit>, List<HeightUnitDto>>(heightUnits);

                var weightUnits = await _context.WeightUnits.ToListAsync();
                var weightUnitsDto = _mapper.Map<List<WeightUnit>, List<WeightUnitDto>>(weightUnits);

                var dropDownDto = new DropdownsDto
                {
                    ActivityFactors = activityFactorDto,
                    Genders = gendersDto,
                    Goals = goalsDto,
                    HeightUnits = heightUnitsDto,
                    WeightUnits = weightUnitsDto,
                };

                return dropDownDto;
            }
        }
    }
}