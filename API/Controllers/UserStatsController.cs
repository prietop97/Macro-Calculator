using System;
using System.Threading.Tasks;
using Application.MainDTOs;
using Application.UserStats;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserStats : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<UserStatsDto>> Detail()
        {
            return await Mediator.Send(new Detail.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }
    }
}
