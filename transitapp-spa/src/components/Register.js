import React, { PureComponent } from 'react';
import { api } from '../services/api'

class Register extends PureComponent {
    state = {
        register: false,
        username: "",
        password: "",
        address: "",
        error: ""
    }
    toggleRegister = () => {
        this.setState({ register: !this.state.register })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin = (event) => {
        event.preventDefault()
        const { username, password, address } = this.state
        const data = { username: username, password: password, address: address }

        api.auth.register(data).then(res => {
            if (!res.data.token) { this.setState({ error: res.data }) }
            else {
                this.storeToken(res.data.token)
                window.location.reload();
            }
        })
    }

    storeToken(json) {
        localStorage.setItem('token', json)
    }

    render() {
        const { username, password, address } = this.state
        return (
            <div className="container mt-5 p-2" style={{ "backgroundColor": "rgba(255, 255, 255, 0.75)" }}>
                {this.state.register ?
                    <form onSubmit={this.handleLogin}>
                        <h2 className="text-center text-primary">Sign Up</h2>
                        <hr />

                        <div className="form-group">
                            <input type="text" className="form-control" required name="username" placeholder="Username" value={username} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" required name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" required name="address" placeholder="Address" value={address} onChange={this.handleChange} />
                        </div>

                        <div className="form-group text-center">
                            <button className="btn btn-success" type="submit">Register</button>
                            <button className="btn btn-info" type="button" onClick={this.toggleRegister}>Cancel</button>
                        </div>
                    </form>
                    :
                    <div>
                        <div style={{ "textAlign": "center" }}>
                            <h1>Find and save all your King County Metro Stops</h1>
                            <p className="lead">Come on in... All you need to do is sign up!</p>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg mr-2" onClick={this.toggleRegister}>Register</button>
                                <button className="btn btn-info btn-lg">Learn more</button>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Register;