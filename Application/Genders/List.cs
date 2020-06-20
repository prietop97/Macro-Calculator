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

namespace Application.Genders
{
    public class List
    {
        public class Query : IRequest<List<GenderDto>> { }
        public class Handler : IRequestHandler<Query, List<GenderDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<GenderDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var genders = await _context.Genders.Include(x => x.UserStats).ToListAsync();
                var gendersDto = _mapper.Map<List<Gender>, List<GenderDto>>(genders);
                return gendersDto;
            }
        }
    }
}