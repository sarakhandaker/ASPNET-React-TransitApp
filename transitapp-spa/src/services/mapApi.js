const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_KEY}&location=`

const GeoLocateAddress = address => {
    return fetch(URL + address).then(resp => resp.json())
} 

export const mapApi={
    GeoLocateAddress
}