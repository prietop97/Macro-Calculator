using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.MainDTOs;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Goals
{
    public class List
    {
        public class Query : IRequest<List<GoalDto>> { }
        public class Handler : IRequestHandler<Query, List<GoalDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<GoalDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var goals = await _context.Goals.ToListAsync();
                var goalsDto = _mapper.Map<List<Goal>, List<GoalDto>>(goals);
                return goalsDto;
            }
        }
    }
}
