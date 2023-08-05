import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList/>
            </div>
            
        )
    }
} 