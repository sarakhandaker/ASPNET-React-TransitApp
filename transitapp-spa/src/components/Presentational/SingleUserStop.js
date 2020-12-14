import React, { Component } from 'react'

export default class SingleUserStop extends Component {
    state= {
        showtimes: false
    }

    showTimes=()=>[

    ]

    render() {
        return (
            <li className="mb-3">
                <div className="row" >
                    <i className="fa fa-bus mr-2"></i>
                    <p><strong>{this.props.stop.label}</strong> - {this.props.stop.stop.stopName}</p>
                </div>
                <button onClick={() => this.props.handleDelete(this.props.stop.id)} className="btn btn-success btn-sm mr-auto">Delete Stop</button>
                <button onClick={this.showTimes} className="btn btn-success btn-sm mr-auto ml-2">Show Times</button>

            </li>
        )
}
}
