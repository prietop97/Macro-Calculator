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

namespace Application.UserStats
{
    public class Detail
    {
        public class Query : IRequest<UserStat>
        {
        }

        public class Handler : IRequestHandler<Query, UserStat>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;


            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<UserStat> Handle(Query request, CancellationToken cancellationToken)
            {
                var Id = _userAccessor.GetCurrentUsername();
                Console.WriteLine(Id);
                var userStat = await _context.UserStats.Include(x => new GoalDto { Id = x.Gender.Id, Description = x.Gender.ShortDescription }).FirstOrDefaultAsync(u => u.AppUserId == Id);
                return userStat;

            }
        }
    }
}