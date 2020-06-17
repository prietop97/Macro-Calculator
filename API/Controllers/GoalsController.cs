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


    }
}