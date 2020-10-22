import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function LeafletMap(props) {
    const { address, stops } = props
    const { lat, lng } = address
    const [activeStop, setActiveStop] = React.useState(null);
    return (
        <Map center={[lat, lng]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {stops.map(stop => <Marker key={stop.id} position={[stop.stopLat, stop.stopLon]}
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