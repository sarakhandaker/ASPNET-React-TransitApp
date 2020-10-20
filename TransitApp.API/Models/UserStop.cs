namespace TransitApp.API.Models
{
    public class UserStop
    {
        public User User {get; set;}
        public int UserId { get; set; }
        public Stop Stop {get; set;}
        public int StopId { get; set; }
        public string Label { get; set; }

    }
}