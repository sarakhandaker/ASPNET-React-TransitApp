const getDistance = (lat1, lon1, lat2, lon2) => {
    console.log(lat1, lon1, lat2, lon2)
    const dLat = (lat2 - lat1) * (Math.PI / 180) // deg2rad
    const dLon = (lon2 - lon1) * (Math.PI / 180)
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1) * (Math.PI / 180)) * Math.cos((lat2) * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = 6371 * c * 0.621371; // Radius of the earth in km-> Distance in miles
    return d.toFixed(2);
}

export const helper = {
    getDistance: getDistance}