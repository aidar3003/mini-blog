import React from "react";
import PostListItem from "../post-list-item";

import './post-list.css'

const PostList = ({posts}) => {
    const elements = posts.map((element) => {
        return (
            <li key={element.id} className="list-group-item">
                <PostListItem label={element.label} important={element.important} id={element.id}/>
            </li>
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
        )
}

export default PostList;