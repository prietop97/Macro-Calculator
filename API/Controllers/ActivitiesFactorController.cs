using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ActivitiesFactor;
using Application.MainDTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    public class ActivitiesFactorController : BaseController
    {

        // GET: api/goals
        [HttpGet]
        public async Task<ActionResult<List<ActivityFactorDto>>> List()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}