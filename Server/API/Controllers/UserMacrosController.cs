using System;
using System.Threading.Tasks;
using Application.MainDTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserMacrosController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<UserMacrosDto>> Detail()
        {
            return await Mediator.Send(new Application.UsersMacros.Detail.Query());
        }
    }
}
