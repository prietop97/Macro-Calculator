using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.MainDTOs;
using AutoMapper;
using Domain.MealEntities;
using Domain.UserEntities;
using FluentValidation;
using Application.UserStats.DTOs;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Users
{
    public class CurrentUser
    {
        public class Query : IRequest<UserInfoDto>
        {
        }

        public class Handler : IRequestHandler<Query, UserInfoDto>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IUserAccessor _userAccessor;
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(UserManager<AppUser> userManager, IUserAccessor userAccessor, DataContext context, IMapper mapper, IJwtGenerator jwtGenerator)
            {
                _userManager = userManager;
                _userAccessor = userAccessor;
                _context = context;
                _mapper = mapper;
                _jwtGenerator = jwtGenerator;
            }

            public async Task<UserInfoDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.Users.SingleAsync(x => x.Id == _userAccessor.GetCurrentId());
                var userStats = await _context.UserStats.FirstOrDefaultAsync(x => x.AppUserId == _userAccessor.GetCurrentId());

                var userDto = _mapper.Map<AppUser, UserInfoDto>(user);
                userDto.RegistrationCompleted = true;
                userDto.Token = _jwtGenerator.CreateToken(user);
                if (userStats == null)
                {
                    userDto.RegistrationCompleted = false;
                }
                return userDto;
            }
        }
    }
}