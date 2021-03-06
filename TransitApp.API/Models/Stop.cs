using System.Collections.Generic;

namespace TransitApp.API.Models
{
    public class Stop
    {
    public int Id { get; set; }
    public int StopIdKC { get; set; }
    public int StopCode { get; set; }
    public string StopName { get; set; }
    public string StopDesc { get; set; }
    public double StopLat { get; set; }
    public double StopLon { get; set; }
    public int ZoneId { get; set; }
    public string StopUrl { get; set; }
    public string LocationType { get; set; }
    public string ParentStation { get; set; }
    public string StopTimezone { get; set; }
    public ICollection<UserStop> UserStops {get; set;}
    public ICollection<StopTime> StopTimes {get; set;}
        
    }
}