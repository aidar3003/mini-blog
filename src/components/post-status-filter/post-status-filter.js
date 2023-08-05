import React, {Component} from "react";

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