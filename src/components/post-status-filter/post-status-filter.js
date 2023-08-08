import React, {Component} from "react";

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    render() {
        return(
            <div className="btn-group">
                <button className="btn btn-info">All</button>
                <button className="btn btn-outline-danger">Liked</button>
            </div>
        )
    }
}