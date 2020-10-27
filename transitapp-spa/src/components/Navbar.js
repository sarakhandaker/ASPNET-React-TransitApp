import React, { PureComponent } from 'react';
import { Dropdown } from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

class NavBar extends PureComponent {

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push("/home");
        window.location.reload();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin = (event) => {
        event.preventDefault()
        const { username, password } = this.state
        const data = { username: username, password: password }

        api.auth.login(data).then(res => {
            console.log(res)
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
        const { username, password, error } = this.state
        const {loggedIn} =this.props
        return (
            <>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container-fluid row">
                    <Link to='/home' className="navbar-brand">King County Transit App</Link>
                    <ul className="navbar-nav mr-auto">
                        {loggedIn ? <Link to='/stops' ><li className="nav-item nav-link"> Saved Bus Stops</li></Link> : null}
                        <Link to='/search'><li className="nav-item nav-link">Search For a Stop</li></Link>
                    </ul>
                    {loggedIn ?
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Welcome {loggedIn.unique_name.charAt(0).toUpperCase() + loggedIn.unique_name.slice(1)}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Edit your Address</Dropdown.Item>
                                <Dropdown.Item className="sign-out" onClick={this.handleLogout}> <i className="fa fa-sign-out sign-out"></i>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <form onSubmit={this.handleLogin} className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="text" name="username" placeholder="Username" required value={username} onChange={this.handleChange} />
                            <input className="form-control mr-sm-2" type="password" name="password" placeholder="Password" required value={password} onChange={this.handleChange} />
                            <button className="btn btn-success my-2 my-sm-0" type="submit"> Login </button>
                        </form>
                    }
                </div>
            </nav>
            {error? <Alert className="text-right" variant="danger"> Invalid Username and Password </Alert>: null}
            </>
        )
    }
}

export default NavBar;