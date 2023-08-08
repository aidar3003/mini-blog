import React, {Component} from "react";

import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            important: false
        }
        this.onImportant = this.onImportant.bind(this)
    }

    onImportant() {
        this.setState(({important}) => {
            if(important === true) {
                return important += false;
            }
            else {
                return important += true;
            }
        })
    }

    render() {
        const {label, like, important = false} = this.props;

        let classNames = "app-list-item d-flex justify-content-between";
            if(important) {
            classNames += ' important';
            }
            if(like) {
                classNames += ' like';
                }

        return(
            <li className={classNames}>
            <span className="app-list-item-label">{label}</span>
            <div className="d-flex justify-content-center align-items-center">
               <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
                <i className="fa fa-star"></i>
               </button> 
               <button type="button" className="btn-trash btn-sm">
                <i className="fa fa-trash-o"></i>
               </button> 
               <i className="fa fa-heart"></i>
            </div>
        </li>
        )
    }
}
