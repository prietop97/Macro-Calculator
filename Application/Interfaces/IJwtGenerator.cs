using System;
using Domain;
using Domain.User;

namespace Application.Interfaces
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}
