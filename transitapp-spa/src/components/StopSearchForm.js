import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.address)
    }

    render() {

        return (
            <div className="container mt-5 p-5 text-center" style={{ "backgroundColor": "rgba(255, 255, 255,0.8)" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="pb-3">
                        <h3> Search the Closest Three KC Metro Stops to Any Address</h3>
                        <hr />
                    </div>
                    <div className="form-group justify-content-md-center row">
                        <label className="col-form-label">Address: </label>
                        <div class="col-sm-6">
                            <input className="form-control" placeholder="address" onChange={this.handleOnChange} name="address" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form