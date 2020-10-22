import React, { Component } from 'react'
import StopSearchForm from './StopSearchForm'
import Results from './Results'
const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_KEY}&location=`

export class Search extends Component {
    
       state = {
             submitted: false,
             address:"",
             stops:[]
        }

        componentDidMount(){

        }

    handleSubmit=(address)=>{
        this.setState({submitted: true})
        fetch(URL + address).then(resp => resp.json()).then(resp => {
            this.setState({ address: resp.results[0].locations[0].latLng })
            })
    }

    render() {
        return (
            <div>
            {this.state.submitted ? <Results/> : <StopSearchForm handleSubmit= {this.handleSubmit}/>}
            </div>
        )
    }
}

export default Search