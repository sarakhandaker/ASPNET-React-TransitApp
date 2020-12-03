import React, { useState, useEffect } from 'react'
import { api } from '../services/api';

const UserStops = props => {
    let [userStops, setUserStops] = useState([])

    useEffect(() => {
        if (props.id) 
            api.stop.getUserStops(props.id).then(r => setUserStops(r.data))
    }, [props.id])

    const handleDelete = id => {
        api.stop.deleteStop(props.id, id)
        debugger
        setUserStops(userStops.filter(stop => stop.id !== id))
    }

    const makeList = () => {
        return userStops.map((stop, i) =>
            <li key={i} className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p><strong>{stop.label}</strong> - {stop.stop.stopName}</p>
                </div>
                <button onClick={() => handleDelete(stop.id)} className="btn btn-success btn-sm mr-auto">Delete Stop</button>
            </li>)
    }

    return (<div className="container mt-3 pt-3 mb-3" style={{ "border": "solid", "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
        <h3> Your Saved Bus Stops: </h3>
        <hr />
        <ul style={{ "listStyle": "none" }}>
            {userStops ? makeList() : null}
        </ul>
    </div>
    );
}

export default UserStops;