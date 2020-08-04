using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using Domain.UserEntities;
using FluentValidation;
using MediatR;
using Application.MainDTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
using static System.Net.WebRequestMethods;

namespace Application.Users
{
    public class Login
    {
        public class Query : IRequest<UserInfoDto>
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).EmailAddress().NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }
        }
        public class Handler : IRequestHandler<Query, UserInfoDto>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly DataContext _context;

            public Handler(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator, DataContext context)
            {
                _userManager = userManager;
                _signInManager = signInManager;
                _jwtGenerator = jwtGenerator;
                _context = context;
            }

            public async Task<UserInfoDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email);
                if (user == null)
                    throw new RestException(HttpStatusCode.Unauthorized);

                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

                if (result.Succeeded)
                {
                    var userStats = await _context.UserStats.FirstOrDefaultAsync(x => x.AppUserId == user.Id);
                    // GENERATE TOKEN
                    var userInfoDto = new UserInfoDto
                    {
                        Username = user.UserName,
                        Token = _jwtGenerator.CreateToken(user),
                        Email = user.Email,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        RegistrationCompleted = false
                    };
                    if (userStats != null)
                    {
                        userInfoDto.RegistrationCompleted = true;
                    }
                    return userInfoDto;
                }

                throw new RestException(HttpStatusCode.Unauthorized);
            }
        }
    }
}