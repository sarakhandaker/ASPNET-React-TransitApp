import React, { Component } from 'react'
import { api } from '../services/api';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class Results extends Component {
    state = {
        stops: []
    }

    componentDidMount() {
        const address = this.props.address
        console.log(this.props.address)
        const apiAddress = address.lat.toString() + address.lng * -1
        console.log(apiAddress)
        api.stop.closest(apiAddress).then(r => console.log(r))
    }

    render() {
        const {lat, lng} = this.props.address
        return (
            <div>
                <Map center={[lat, lng]} zoom={16}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Map>
            </div>
        );
    }
}

export default Results;