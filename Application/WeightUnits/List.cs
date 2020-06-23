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

namespace Application.WeightUnits
{
    public class List
    {
        public class Query : IRequest<List<WeightUnitDto>> { }
        public class Handler : IRequestHandler<Query, List<WeightUnitDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<WeightUnitDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var heights = await _context.WeightUnits.ToListAsync();
                var heightsDto = _mapper.Map<List<WeightUnit>, List<WeightUnitDto>>(heights);
                return heightsDto;
            }
        }
    }
}
