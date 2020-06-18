using System;
namespace Application.MainDTOs
{
    public class UserInfoDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public UserStatsDto UserStat { get; set; }

    }
}