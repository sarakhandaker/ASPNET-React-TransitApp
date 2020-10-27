import React, { Component } from 'react'
import { api } from '../services/api';

class UserStops extends Component {
    state = {
        user: []
    }

    getUsers() {
        const id = this.props.decodedToken.nameid
        api.stop.getUserStops(id).then(r =>
            this.setState({ user: r.data }))
    }

    componentDidUpdate(prevProps) {
        if (this.props.decodedToken !== prevProps.decodedToken){
            this.getUsers()
        }
    }

    makeList = () => {
        return this.state.user.userStops.map(stop =>
            <li className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p>{stop.label} - {stop.stop.stopName}</p>
                </div>
                <button onClick={this.props.reset} className="btn btn-success btn-sm mr-auto">Delete Stop</button>
            </li>)
    }

    render() {
        const stops = this.state.user.userStops
        return (
            <div className="container mt-3 pt-3 mb-3" style={{ "border": "solid", "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
                <h3> Your Saved Bus Stops: </h3>
                <hr />
                <ul style={{ "listStyle": "none" }}>
                    {stops ? this.makeList() : null}
                </ul>
            </div>
        );
    }
}

export default UserStops;