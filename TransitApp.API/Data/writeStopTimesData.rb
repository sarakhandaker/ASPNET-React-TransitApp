require 'json'
data_arr = []
stopObjects=[]
File.open('/Users/sarakhandaker/Projects/Transit App/TransitApp.API/Data/stop_times.txt').each do
    |line| data_arr<< line 
end
data_arr.shift
data_arr.each do |each_stop|
    each_stop=each_stop.split(",")
    each_stop[2]=each_stop[2][1...-1]

    # ArrivalTimeLogic
    arrivalTime=each_stop[1]
    if (arrivalTime[0]+ arrivalTime[1]).to_i >= 24
        hour=(((arrivalTime[0]+arrivalTime[1]).to_i)-24)
        if (hour>9)
            hour=hour.to_s
            arrivalTime[0]=hour[0]
            arrivalTime[1]=hour[1]
        else 
            hour=hour.to_s
            arrivalTime[1]=hour[0]
            arrivalTime[0]="0"
        end
    end

    stopObjects.push({
        "TripId": each_stop[0].to_i, 
        "ArrivalTime": arrivalTime, 
        # "DepartureTime": each_stop[2], 
        "StopId": each_stop[3].to_i, 
        "StopSequence": each_stop[4], 
        "StopHeadsign": each_stop[5], 
        "PickupType": each_stop[6], 
        "DropOffType": each_stop[7], 
        "ShapeDistTraveled": each_stop[8].to_f
})
end

File.open("/Users/sarakhandaker/Projects/Transit App/TransitApp.API/Data/stopTimesSeedData.json","w") do |file|
 file.write stopObjects.to_json
end