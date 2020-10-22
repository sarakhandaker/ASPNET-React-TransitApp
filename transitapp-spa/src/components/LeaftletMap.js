import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function LeafletMap(props) {
    const { address, stops } = props
    const { lat, lng } = address
    const [activeStop, setActiveStop] = React.useState(null);
    const bus = new Icon({
        iconUrl: "https://www.flaticon.com/svg/static/icons/svg/64/64283.svg",
        iconSize: [25, 25]
      });
    return (
        <Map center={[lat, lng]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {stops.map(stop => <Marker icon={bus} key={stop.id} position={[stop.stopLat, stop.stopLon]}
                onClick={() => { setActiveStop(stop); }} />)}
            {activeStop && (
                <Popup position={[activeStop.stopLat, activeStop.stopLon]} onClose={() => {setActiveStop(null)}}>
                    <div>
                        <p>{activeStop.stopName}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
}

export default LeafletMap;