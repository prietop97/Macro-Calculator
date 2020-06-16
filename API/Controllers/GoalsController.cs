using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Goals;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public GoalsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/goals
        [HttpGet]
        public async Task<ActionResult<List<Goal>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        // GET api/goals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Goal>> Details(int id)
        {
            return await _mediator.Send(new Details.Query { Id = id});
        }


        // Should not be used, here in case it's needed by an admin
        // POST api/goals
        //[HttpPost]
        //public async Task<ActionResult<Unit>> Create(Create.Command command)
        //{
        //    return await _mediator.Send(command);
        //}

        // Should not be used, here in case it's needed by an admin
        //[HttpPut("{id}")]
        //public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        //{
        //    command.Id = id;
        //    return await _mediator.Send(command);
        //}

        //Should not be used, here in case it's needed by an admin
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Unit>> Delete(int id)
        //{
        //    return await _mediator.Send(new Delete.Command { Id = id});
        //}

    }
}