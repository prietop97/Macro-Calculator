using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Genders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GendersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public GendersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/goals
        [HttpGet]
        public async Task<ActionResult<List<Gender>>> List()
        {
            return await _mediator.Send(new List.Query());
        }


    }
}
