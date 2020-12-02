import React, { Component, useState, useEffect } from 'react'
import { api } from '../services/api';
import { useJwt } from "react-jwt";
const token = localStorage.getItem('token');

const UserStops = props => {
    const { decodedToken } = useJwt(token)
    let [user, setUser]= useState([])

    const getUsers= () => {
        const id = decodedToken.nameid
        api.stop.getUserStops(id).then(r => setUser(r.data))
    }

    const useEffect= ()=> {
        getUsers()
    }
    
    const handleDelete = id => {
        api.handleDelete(id).then( r => {
            let stops=this.state.user.UserStops.filter(stop => stop.id !== id)
            let user={...this.state.user, UserStops: stops}
            this.setState({user: user}) 
        }
        )
    }

    const makeList = () => {
        return this.state.user.userStops.map(stop =>
            <li key={stop.id} className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p><strong>{stop.label}</strong> - {stop.stop.stopName}</p>
                </div>
                <button onClick={()=> handleDelete(stop.id)} className="btn btn-success btn-sm mr-auto">Delete Stop</button>
            </li>)
    }

    return (<div className="container mt-3 pt-3 mb-3" style={{ "border": "solid", "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
                <h3> Your Saved Bus Stops: </h3>
                <hr />
                <ul style={{ "listStyle": "none" }}>
                    {user.stops ? makeList() : null}
                </ul>
            </div>
        );
}

export default UserStops;