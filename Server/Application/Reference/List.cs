//using System;
//using System.Collections.Generic;
//using System.Threading;
//using System.Threading.Tasks;
//using Domain;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using Persistence;

//namespace Application.Goals
//{
//    public class List
//    {
//        public class Query : IRequest<List<Goal>> { }
//        public class Handler : IRequestHandler<Query, List<Goal>>
//        {
//            private readonly DataContext _context;
//            public Handler(DataContext context)
//            {
//                _context = context;
//            }

//            public async Task<List<Goal>> Handle(Query request, CancellationToken cancellationToken)
//            {
//                var goals = await _context.Goals.ToListAsync();
//                return goals;
//            }
//        }
//    }
//}
