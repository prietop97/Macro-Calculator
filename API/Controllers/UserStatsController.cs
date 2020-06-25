using System;
using System.Threading.Tasks;
using Application.UserStats;
using Application.UserStats.DTOs;
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

        [HttpGet("dropdowns")]
        public async Task<ActionResult<DropdownsDto>> Dropdowns()
        {
            return await Mediator.Send(new Dropdowns.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        public async Task<ActionResult<Unit>> Edit(Edit.Command command)
        {
            return await Mediator.Send(command);
        }
    }
}
