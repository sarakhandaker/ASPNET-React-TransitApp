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

    render() {
        const {stops } = this.state
        return (
            <div>
                <LeafletMap address={this.props.address} stops={stops}></LeafletMap>
            </div>
        );
    }
}

export default Results;