using System;

namespace TransitApp.API.Models
{
    public class StopTime
    {
    public int Id { get; set; }
    public int TripId { get; set; }
    public DateTime ArrivalTime { get; set; }
    public int StopId { get; set; }
    public Stop Stop {get; set;}
    public string StopSequence { get; set; }
    public string StopHeadsign { get; set; }
    public string PickupType { get; set; }
    public string DropOffType { get; set; }
    public double ShapeDistTraveled { get; set; }
    }
}