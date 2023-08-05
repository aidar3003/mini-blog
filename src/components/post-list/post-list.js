import React, {Component} from "react";
import PostListItem from "../post-list-item";

export default class PostList extends Component {
    render() {
        return(
            <div>
                <ul className="app-list list-group">
                <PostListItem />
                </ul>
            </div>
        )
    }
}