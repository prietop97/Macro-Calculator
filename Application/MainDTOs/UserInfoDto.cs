using System;
using Application.UserStats.DTOs;
namespace Application.MainDTOs
{
    public class UserInfoDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public bool RegistrationCompleted { get; set; }
        public string Token { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}