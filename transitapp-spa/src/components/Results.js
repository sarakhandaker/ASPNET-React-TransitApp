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

    makeList=()=>{
        return this.state.stops.map(stop => <li><i className="fa fa-bus mr-2"></i>{stop.stopName}</li>)
    }

    render() {
        const { stops } = this.state
        return (
            <div className="container mt-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-sm-4" style={{ "backgroundColor": "rgba(255, 255, 255)" }}>
                        <h2> Closest Bus Stops To {this.props.name}: </h2>
                        <ul style={{"listStyle": "none"}}>
                        {stops? this.makeList(): null}
                        </ul>
                    </div>
                    <div className="col-sm-8">
                        <LeafletMap address={this.props.address} stops={stops}></LeafletMap>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;