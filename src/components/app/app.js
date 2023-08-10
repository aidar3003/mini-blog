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
            ],
            body: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, ...after]
            return {
                data: newArr
            }
        })
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
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
                <PostList 
                    posts={data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
            
        )
    }
} 