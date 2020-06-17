//using System;
//using System.Threading;
//using System.Threading.Tasks;
//using Domain;
//using MediatR;
//using Persistence;

//namespace Application.Goals
//{
//    public class Details
//    {
//        public class Query : IRequest<Goal>
//        {
//            public int Id { get; set; }
//        }

//        public class Handler : IRequestHandler<Query, Goal>
//        {
//            private readonly DataContext _context;
//            public Handler(DataContext context)
//            {
//                _context = context;
//            }

//            public async Task<Goal> Handle(Query request, CancellationToken cancellationToken)
//            {
//                var goal = await _context.Goals.FindAsync(request.Id);
//                if (goal == null)
//                    throw new RestException(System.Net.HttpStatusCode.NotFound, new { goal = "Not found" });
//                return goal;
//            }
//        }
//    }
//}