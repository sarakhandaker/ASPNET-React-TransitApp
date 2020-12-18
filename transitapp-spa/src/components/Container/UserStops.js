import React, { useState, useEffect } from 'react'
import { api } from '../../services/api';
import LeafletMap from '../Presentational/LeaftletMap'
import SingleUserStop from '../Presentational/SingleUserStop'

const UserStops = props => {
    let [userStops, setUserStops] = useState([])
    let [address, setAddress] = useState({})

    useEffect(() => {
        if (props.id)
            api.stop.getUserStops(props.id).then(r => setUserStops(r.data))
            .then( r => {
                
            })
    }, [props.id])

    const handleDelete = id => {
        api.stop.deleteStop(props.id, id)
        setUserStops(userStops.filter(stop => stop.id !== id))
    }

    const makeList = () => {
        return userStops.map((stop, i) => <SingleUserStop key= {i} stop={stop} handleDelete={handleDelete}/>)
    }

    return (<div className="container mt-3 pt-3 mb-3" style={{ "border": "solid", "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
        <div className="row mb-3">
            <div className="col-sm-4">
                <h3> Your Saved Bus Stops: </h3>
                <hr />
                <ul style={{ "listStyle": "none" }}>
                    {userStops ? makeList() : null}
                </ul>
            </div>
            <div className="col-sm-8">
                {userStops ? <LeafletMap address={{ lat: 47.608013, lng: -122.335167 }} stops={userStops.map(s => s.stop)}></LeafletMap> : null}
            </div>
        </div>
    </div>
    );
}

export default UserStops;