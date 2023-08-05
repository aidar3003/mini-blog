import React, {Component} from "react";

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    render() {
        return(
            <div className="btn-group">
                <button>All</button>
                <button>Liked</button>
            </div>
        )
    }
}