// using System;
// using System.Threading;
// using System.Threading.Tasks;
// using Domain;
// using FluentValidation;
// using MediatR;
// using Persistence;

// namespace Application.Goals
// {
//    public class Create
//    {
//        public class Command : IRequest
//        {
//            public int Id { get; set; }
//            public string Description { get; set; }
//            public int Multiplier { get; set; }
//        }

//        public class CommandValidator : AbstractValidator<Command>
//        {
//            public CommandValidator()
//            {
//                RuleFor(x => x.Description).NotEmpty();
//                RuleFor(x => x.Multiplier).NotEmpty();
//            }
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
//                var goal = new Goal
//                {
//                    Description = request.Description,
//                    Multiplier = request.Multiplier
//                };

//                _context.Goals.Add(goal);
//                var success = await _context.SaveChangesAsync() > 0;

//                if (success) return Unit.Value;

//                throw new Exception("Problem saving changes");
//            }
//        }
//    }
// }
