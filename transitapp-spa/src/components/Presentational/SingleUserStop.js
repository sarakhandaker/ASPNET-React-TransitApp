import React, { Component } from 'react'

export default class SingleUserStop extends Component {
    render() {
        return (
            <li className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p><strong>{this.props.stop.label}</strong> - {this.props.stop.stop.stopName}</p>
                </div>
                <button onClick={() => this.props.handleDelete(this.props.stop.id)} className="btn btn-success btn-sm mr-auto">Delete Stop</button>
            </li>
        )
}
}
