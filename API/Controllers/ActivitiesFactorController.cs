﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ActivitiesFactor;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesFactorController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ActivitiesFactorController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/goals
        [HttpGet]
        public async Task<ActionResult<List<ActivityFactor>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

  
    }
}