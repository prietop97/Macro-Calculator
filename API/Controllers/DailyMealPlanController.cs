using System;
using System.Threading.Tasks;
using Application.MainDTOs;
using Application.MealPlan;
using Application.UserStats.DTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DailyMealPlan : BaseController
    {
        [HttpGet("{date}")]
        public async Task<ActionResult<DailyMealPlanDto>> Detail(DateTime date)
        {
            return await Mediator.Send(new Detail.Query { Date = date });
        }
    }
}
