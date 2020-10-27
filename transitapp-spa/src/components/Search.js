import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import StopSearchForm from './StopSearchForm'
import Results from './Results'
import { api } from '../services/api'
const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_KEY}&location=`

export class Search extends Component {

    state = {
        address: "",
        addressName: "",
        stops: [],
        error: false
    }

    handleSubmit = (address) => {
        this.setState({ addressName: address })
        fetch(URL + address).then(resp => resp.json()).then(resp => {
            if (resp.results[0].locations[0]) {
                this.setState({ address: resp.results[0].locations[0].latLng })
            }
            else {
                this.setState({ error: true })
            }
        })
    }

    reset = () => {
        this.setState({ address: "" })
    }

    save = (id) => {
        const data = {
            stopId: id,
            userId: this.props.loggedIn.nameid,
            label: "Home"
        }
        api.stop.saveStop(data).then(r =>
            this.setState({ address: "" })
        )
    }

    render() {
        const { error, address, addressName } = this.state
        return (
            <div>
                {error ? <Alert variant="primary"> Please Submit a Valid Address </Alert> : null}
                {address.lat ? <Results loggedIn={this.props.loggedIn} save={this.save} reset={this.reset} name={addressName} address={address} /> : <StopSearchForm handleSubmit={this.handleSubmit} />}
            </div>
        )
    }
}

export default Search