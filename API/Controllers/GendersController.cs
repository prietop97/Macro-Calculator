using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Genders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    
    public class GendersController : BaseController
    {
  

        // GET: api/goals
        [HttpGet]
        public async Task<ActionResult<List<Gender>>> List()
        {
            return await Mediator.Send(new List.Query());
        }


    }
}
