import React, { PureComponent } from 'react';
import { Dropdown } from 'react-bootstrap'
import {api} from '../services/api'
import { Link } from 'react-router-dom'

class NavBar extends PureComponent {

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleLogout = () => {
        localStorage.clear()
        window.location.reload();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin = (event) => {
        event.preventDefault()
        const { username, password} = this.state
        const data = {username: username, password: password}

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
        const { username, password} = this.state
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container row">
                <Link to='/home' className="navbar-brand">King County Transit App</Link>
                    <ul className="navbar-nav mr-auto">
                        <Link to='/saved' ><li className="nav-item nav-link"> Saved Bus Stops</li></Link>
                        <Link to='/search'><li className="nav-item nav-link">Search For a Stop</li></Link>
                    </ul>
                    {this.props.loggedIn ?
                        <div classnamw="ml-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Welcome {this.props.loggedIn.unique_name}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Edit your Address</Dropdown.Item>
                                    <Dropdown.Item className="sign-out" onClick={this.handleLogout}> <i className="fa fa-sign-out sign-out"></i>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        :
                        <form onSubmit={this.handleLogin} className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="text" name="username" placeholder="Username" required value={username} onChange={this.handleChange}/>
                            <input className="form-control mr-sm-2" type="password" name="password" placeholder="Password" required value={password} onChange={this.handleChange}/>
                            <button className="btn btn-success my-2 my-sm-0" type="submit"> Login </button>
                        </form>
                    }
                </div>
            </nav>
        )
    }
}

export default NavBar;