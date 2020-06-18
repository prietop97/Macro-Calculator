using System;
using System.Threading.Tasks;
using Application.UserStats;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserStats : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<UserStat>> Detail()
        {
            return await Mediator.Send(new Detail.Query());
        }
    }
}
