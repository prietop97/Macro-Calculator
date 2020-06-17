using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
using static System.Net.WebRequestMethods;

namespace Application.Users
{
    public class Register
    {
        public class Query : IRequest<AppUser>
        {
            public string Email { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).EmailAddress().NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
                RuleFor(x => x.UserName).NotEmpty();
            }
        }
        public class Handler : IRequestHandler<Query, AppUser>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;

            public Handler(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager)
            {
                _userManager = userManager;
                _signInManager = signInManager;
            }

            public async Task<AppUser> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = new AppUser { Email = request.Email, UserName = request.UserName };
                var added = _userManager.CreateAsync(user, request.Password);
                if (added == null)
                    throw new Exception();

                var createdUser = await _userManager.FindByEmailAsync(request.Email);
                var result = await _signInManager.CheckPasswordSignInAsync(createdUser, request.Password, false);

         
                return user;

                
            }
        }
    }
}