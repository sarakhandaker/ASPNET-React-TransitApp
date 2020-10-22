import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             address:""
        }
    }

    handleOnChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.handleSubmit(this.state.address)
    }

    render() {
        
        return (
            <div className="container mt-5 p-2" style={{ "backgroundColor": "rgba(255, 255, 255, 0.75)" }}>
                <form onSubmit={this.handleSubmit}>
                    <label>Type in the Address to Look for a Stop</label><br/>
                    <input onChange= {this.handleOnChange} name="address"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Form