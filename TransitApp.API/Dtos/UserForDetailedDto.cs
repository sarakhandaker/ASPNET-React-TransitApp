using System.Collections.Generic;
using TransitApp.API.Models;

namespace TransitApp.API.Dtos
{
    public class UserForDetailedDto
    {
        
        public int Id { get; set; }
        public string Username { get; set; }
        public ICollection<UserStop> UserStops { get; set; }
    }
}