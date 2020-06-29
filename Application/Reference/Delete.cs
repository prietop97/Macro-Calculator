//using System;
//using System.Threading;
//using System.Threading.Tasks;
//using MediatR;
//using Persistence;

//namespace Application.Goals
//{
//    public class Delete
//    {
//        public class Command : IRequest
//        {
//            public int Id { get; set; }
//        }

//        public class Handler : IRequestHandler<Command>
//        {
//            private readonly DataContext _context;
//            public Handler(DataContext context)
//            {
//                _context = context;
//            }

//            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
//            {
//                var goal = await _context.Goals.FindAsync(request.Id);

//                if (goal == null)
//                    throw new RestException(System.Net.HttpStatusCode.NotFound, new { goal = "Not found" });

//                _context.Remove(goal);
//                var success = await _context.SaveChangesAsync() > 0;

//                if (success) return Unit.Value;

//                throw new Exception("Problem saving changes");
//            }
//        }
//    }
//}
