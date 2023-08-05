import React, {Component} from "react";

import './post-add-form.css'

export default class PostAddForm extends Component{
    render() {
        return(
            <form className="bottom-panel d-flex">
                <input type="text" placeholder="Add post" className="form-control new-post-label"/>
                <button className="btn btn-outline-secondary" type="submit">Add</button>
            </form>
        )
    }
}