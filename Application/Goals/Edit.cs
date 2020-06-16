using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Goals
{
    public class Edit
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Description { get; set; }
            public int? Multiplier { get; set; }
        }

        public class CommandValidator: AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Description).NotEmpty();
                RuleFor(x => x.Multiplier).NotEmpty();
            }
            
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var goal = await _context.Goals.FindAsync(request.Id);
                if (goal == null)
                    throw new Exception("Could not find activity");

                goal.Description = request.Description ?? goal.Description;
                goal.Multiplier = request.Multiplier ?? goal.Multiplier;

                _context.Goals.Add(goal);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}
