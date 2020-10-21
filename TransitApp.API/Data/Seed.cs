using System.Collections.Generic;
using System.Linq;
using TransitApp.API.Models;
using Newtonsoft.Json;

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

                context.SaveChanges();
            }
        }
    }
}