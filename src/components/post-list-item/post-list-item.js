import React, {Component} from "react";

export default class PostListItem extends Component {
    render() {
        return(
            <div>
                <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">Hello</span>
                </li>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}