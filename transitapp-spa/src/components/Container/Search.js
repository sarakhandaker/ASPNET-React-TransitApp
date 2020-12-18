import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import StopSearchForm from '../Presentational/StopSearchForm'
import Results from '../Presentational/Results'
import { api } from '../../services/api'
import { mapApi } from '../../services/mapApi'

export class Search extends Component {

    state = {
        address: "",
        addressName: "",
        stops: [],
        error: false
    }

    handleSubmit = address => {
        this.setState({ addressName: address })
        mapApi.GeoLocateAddress(address).then(resp => {
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

    save = (id, label) => {
        const data = {
            stopId: id,
            userId: this.props.loggedIn.nameid,
            label: label
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