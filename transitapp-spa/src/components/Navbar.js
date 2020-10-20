import React, { PureComponent } from 'react';

class NavBar extends PureComponent {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" >King County Transit App</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" >Saved Bus Stops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" > Search For a Stop</a>
                        </li>
                    </ul>
                    {this.props.user ?
                        <div className="dropdown">
                            <a className="dropdown-toggle text-light" >Welcome</a>
                            <div className="dropdown-menu mt-3">
                                <a className="dropdown-item" ><i className="fa fa-user"></i>Edit Profile</a>
                                <div className="dropdown divider"></div>
                                <a className="dropdown-item" ><i className="fa fa-sign-out"></i>Logout</a>
                            </div>
                        </div>
                        :
                        <form className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="text" name="username" placeholder="Username" required />
                            <input className="form-control mr-sm-2" type="password" name="password" placeholder="Password" required />
                            <button className="btn btn-success my-2 my-sm-0" type="submit"> Login </button>
                        </form>
                    }
                </div>
            </nav>
        )
    }
}

export default NavBar;