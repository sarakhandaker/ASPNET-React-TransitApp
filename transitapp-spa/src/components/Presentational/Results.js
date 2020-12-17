import React, { Component } from 'react'
import { api } from '../../services/api';
import LeafletMap from './LeaftletMap'
import Modal from './Modal'

class Results extends Component {
    state = {
        stops: [],
        showModal: false,
        id: ''
    }

    componentDidMount() {
        const address = this.props.address
        const apiAddress = address.lat.toString() + address.lng * -1
        api.stop.closest(apiAddress).then(r =>
            this.setState({ stops: r.data })
        )
    }

    clickSave = id => {
        this.setState({
            id: id,
            showModal: true
        })
    }

    makeList = () => {
        return this.state.stops.map(stop =>
            <li key={stop.id} className="mb-3">
                <div className="row" >
                    <div className="col-sm-10">
                        <p><span><i className="fa fa-bus mr-2"></i></span> <strong>{stop.stopName}</strong></p>
                        <p>- miles from address</p>
                    </div>
                    <div className="col-sm-2 p-0">
                        {this.props.loggedIn ? <button onClick={() => this.clickSave(stop.id)} className="btn btn-success btn-sm">Save Stop</button> : null}
                    </div>
                </div>
            </li>)
    }

    render() {
        const { stops } = this.state
        return (
            <div className="container mt-3 pt-3 mb-3" style={{ "border": "solid", "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
                {this.state.showModal ? <Modal save={this.props.save} id={this.state.id} ></Modal> : null}
                <div className="row">
                    <div className="col-sm-4">
                        <h4 className="text-center"> {this.props.name} </h4>
                        <hr />
                        <ul className="pl-2" style={{ "listStyle": "none" }}>
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