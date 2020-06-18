using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.HeightUnits;
using Application.MainDTOs;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class HeightUnitsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<HeightUnitDto>>> List()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}
