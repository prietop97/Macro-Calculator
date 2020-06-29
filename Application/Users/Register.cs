using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.Validation;
using Domain;
using Domain.User;
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
        public class Command : IRequest<User>
        {
            public string Email { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }

        public class QueryValidator : AbstractValidator<Command>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).NotEmpty().EmailAddress();
                RuleFor(x => x.Password).Password();
                RuleFor(x => x.Username).NotEmpty();
            }
        }
        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly DataContext _context;
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                _userManager = userManager;

                _jwtGenerator = jwtGenerator;

                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.Where(x => x.Email == request.Email).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { email = "Email already exist" });

                if (await _context.Users.Where(x => x.UserName == request.Username).AnyAsync())
                    throw new RestException(HttpStatusCode.BadRequest, new { username = "Username already exist" });

                var user = new AppUser { Email = request.Email, UserName = request.Username };

                var result = await _userManager.CreateAsync(user, request.Password);

                if (result.Succeeded)
                {
                    return new User
                    {
                        Username = request.Username,
                        Token = _jwtGenerator.CreateToken(user)
                    };
                }

                throw new Exception("Problem creating user");
            }
        }
    }
}