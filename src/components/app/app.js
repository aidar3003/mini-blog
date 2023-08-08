import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : [
                {label: 'I am learning React',important: true, like: false, id: 1},
                {label: 'It so interesting', important: false, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3}
            ]
        }
    }
    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data}/>
                <PostAddForm/>
            </div>
            
        )
    }
} 