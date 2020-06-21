using System;
using System.Threading;
using System.Threading.Tasks;
using Application.MainDTOs;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;
using System.Collections.Generic;

namespace Application.UsersMacros
{
    public class Detail
    {
        public class Query : IRequest<UserMacrosDto>
        {
        }

        public class Handler : IRequestHandler<Query, UserMacrosDto>
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

            public async Task<UserMacrosDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var Id = _userAccessor.GetCurrentId();

                var userMacros = await _context.UsersMacros.FirstOrDefaultAsync(u => u.AppUserId == Id);
                if (userMacros == null)
                    throw new RestException(System.Net.HttpStatusCode.BadRequest, new { macros = "User has no macros" });
                var userMacrosDto = _mapper.Map<UserMacros, UserMacrosDto>(userMacros);
                return userMacrosDto;

            }
        }
    }
}
