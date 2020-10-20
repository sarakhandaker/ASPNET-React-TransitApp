import React, { PureComponent } from 'react';

class Register extends PureComponent {
    state = {
        register: false
    }
    toggleRegister= ()=> {
        this.setState({register: !this.state.register})
    }
    render() {
        return (
            <>
                {this.state.register ?
                    <form>
                        <h2 className="text-center text-primary">Sign Up</h2>
                        <hr />

                        <div className="form-group">
                            <input type="text" className="form-control" required name="username" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" required name="password" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" required name="address" placeholder="Address" />
                        </div>

                        <div className="form-group text-center">
                            <button className="btn btn-success" type="submit">Register</button>
                            <button className="btn btn-default" type="button">Cancel</button>
                        </div>
                    </form>

                    :
                    <div class="container mt-5">
                        <div style={{ "text-align": "center" }}>
                            <h1>Find and save all your King County Metro Stops</h1>
                            <p class="lead">Come on in... All you need to do is sign up!</p>
                            <div class="text-center">
                                <button class="btn btn-primary btn-lg mr-2" onClick= {this.toggleRegister}>Register</button>
                                <button class="btn btn-info btn-lg">Learn more</button>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-4">
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </>
        )
    }
}

export default Register;