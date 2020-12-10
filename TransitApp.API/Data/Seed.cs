using System.Collections.Generic;
using System.Linq;
using TransitApp.API.Models;
using Newtonsoft.Json;
using System;
using System.Globalization;
using Newtonsoft.Json.Converters;

namespace TransitApp.API.Data
{
    public class Seed
    {
        public static void SeedStops(DataContext context){
            if (!context.Stops.Any())
            {
                var stopData = System.IO.File.ReadAllText("Data/stopsSeedData.json");
                var stops = JsonConvert.DeserializeObject<List<Stop>>(stopData);
                foreach (Stop stop in stops)
                {
                    context.Stops.Add(stop);
                }

                var stopTimesData = System.IO.File.ReadAllText("Data/stopTimesSeedData.json");
                var stopTimes = JsonConvert.DeserializeObject<List<StopTime>>(stopTimesData, new IsoDateTimeConverter { DateTimeFormat = "HH:mm:ss" });
                foreach (StopTime stopTime in stopTimes)
                {
                    context.StopTimes.Add(stopTime);
                }

                context.SaveChanges();
            }
        }
    }
}