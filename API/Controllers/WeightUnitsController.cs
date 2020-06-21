using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.MainDTOs;
using Microsoft.AspNetCore.Mvc;
using Application.WeightUnits;

namespace API.Controllers
{
    public class WeightUnitsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<WeightUnitDto>>> List()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}
