import React, { Component } from 'react'
import { api } from '../services/api';
import LeafletMap from './LeaftletMap'

class Results extends Component {
    state = {
        stops: []
    }

    componentDidMount() {
        const address = this.props.address
        const apiAddress = address.lat.toString() + address.lng * -1
        api.stop.closest(apiAddress).then(r =>
            this.setState({ stops: r.data })
        )
    }

    makeList = () => {
        return this.state.stops.map(stop =>
            <li className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p>{stop.stopName}</p>
                </div>
                {this.props.loggedIn? <button onClick={this.props.reset} className="btn btn-success btn-sm mr-auto">Save Stop</button>: null}
            </li>)
    }

    render() {
        const { stops } = this.state
        return (
            <div className="container mt-3 pt-3 mb-3" style={{ "border": "solid","backgroundColor": "rgba(255, 255, 255,0.8)" }}>
                <div className="row">
                    <div className="col-sm-4">
                        <h3> Closest Bus Stops To {this.props.name}: </h3>
                        <hr />
                        <ul style={{ "listStyle": "none" }}>
                            {stops ? this.makeList() : null}
                        </ul>
                    </div>
                    <div className="col-sm-8">
                        <LeafletMap address={this.props.address} stops={stops}></LeafletMap>
                    </div>
                </div>
                <div className="row m-3 mr-auto">
                    <button onClick={this.props.reset} className="btn btn-info btn-lg">Search New Address</button>
                </div>
            </div>
        );
    }
}

export default Results;