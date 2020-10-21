require 'json'
data_arr = []
stopObjects=[]
File.open('/Users/sarakhandaker/Projects/Transit App/TransitApp.API/Data/stops.txt').each do
    |line| data_arr<< line 
end
data_arr.shift
data_arr.each do |each_stop|
    each_stop=each_stop.split(",")
    each_stop[2]=each_stop[2][1...-1]
    stopObjects.push({
        "StopIdKC": each_stop[0].to_i, 
        "StopCode": each_stop[1].to_i, 
        "StopName": each_stop[2], 
        "StopDesc": each_stop[3], 
        "StopLat": each_stop[4].to_f, 
        "StopLon": each_stop[5].to_f, 
        "ZoneId": each_stop[6].to_i, 
        "StopUrl": each_stop[7], 
        "LocationType": each_stop[8], 
        "ParentStation": each_stop[9], 
        "StopTimezone": each_stop[10].chomp
})
end

File.open("/Users/sarakhandaker/Projects/Transit App/TransitApp.API/Data/stopsSeedData.json","w") do |file|
 file.write stopObjects.to_json
end