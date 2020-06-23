using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.MainDTOs;
using AutoMapper;
using Domain;
using Domain.User;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ActivitiesFactor
{
    public class List
    {
        public class Query : IRequest<List<ActivityFactorDto>> { }
        public class Handler : IRequestHandler<Query, List<ActivityFactorDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<ActivityFactorDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activitiesFactor = await _context.ActivitiesFactor.ToListAsync();
                var activitiesDto = _mapper.Map<List<ActivityFactor>, List<ActivityFactorDto>>(activitiesFactor);
                return activitiesDto;
            }
        }
    }
}
