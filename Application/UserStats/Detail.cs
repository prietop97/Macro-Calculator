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
    public class Detail
    {
        public class Query : IRequest<UserStatsDto>
        {
        }

        public class Handler : IRequestHandler<Query, UserStatsDto>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IUserAccessor userAccessor, IMapper mapper)
            {
                _context = context;
                _userAccessor = userAccessor;
                _mapper = mapper;
            }

            public async Task<UserStatsDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var Id = _userAccessor.GetCurrentId();

                var userStat = await _context.UserStats.Include(x => x.Goal).Include(x => x.Gender).Include(x => x.ActivityFactor).Include(x => x.UnitSystem).FirstOrDefaultAsync(u => u.AppUserId == Id);
                if (userStat == null)
                    throw new RestException(System.Net.HttpStatusCode.BadRequest, new { stats = "User has no stats" });
                var userStatDto = _mapper.Map<UserStat, UserStatsDto>(userStat);
                return userStatDto;

            }
        }
    }
}