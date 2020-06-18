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

namespace Application.HeightUnits
{
    public class List
    {
        public class Query : IRequest<List<HeightUnitDto>> { }
        public class Handler : IRequestHandler<Query, List<HeightUnitDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<HeightUnitDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var heights = await _context.HeightUnits.ToListAsync();
                var heightsDto = _mapper.Map<List<HeightUnit>, List<HeightUnitDto>>(heights);
                return heightsDto;
            }
        }
    }
}
