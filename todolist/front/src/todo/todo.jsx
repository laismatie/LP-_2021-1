import axios from "axios"
import React, { Component } from "react"
import PageHeader from "../template/pageHeader"
import TodoForm from "../todo/todoForm"
import TodoList from "../todo/todoList"

const URL_NODE_EXPRESS = 'http://localhost:3001/api/todos'
export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {description: "", list:[]}

        this.handleChange= this.handleChange.bind(this)
        this.handleAdd= this.handleAdd.bind(this)
        this.handleSearch= this.handleSearch.bind(this)
        this.handleAsDone= this.handleAsDone.bind(this)
        this.handleRemove= this.handleRemove.bind(this)
        this.handleAsPendind= this.handleAsPendind.bind(this)

        this.handleSearch();

    }
    
    handleAdd(){
        const description = this.state.description;
        axios.post(URL_NODE_EXPRESS, {description})
        .then(resp => this.handleSearch());
    }

    handleSearch(description = ''){
        const search = description ? `&description__regex=/${description}` : '';
        axios.get(`${URL_NODE_EXPRESS}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}));
    }

    handleAsDone(todo){
       axios.put(`${URL_NODE_EXPRESS}/${todo._id}`, {...todo, done: true})
       .then(resp => this.handleSearch());
    } 

    handleRemove(todo){
        axios.delete(`${URL_NODE_EXPRESS}/${todo._id}`)
        .then(resp => this.handleSearch());
    } 

    handleAsPendind(todo){
        axios.put(`${URL_NODE_EXPRESS}/${todo._id}`, {...todo, done: false})
       .then(resp => this.handleSearch());
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    } 

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                />
                <TodoList list={this.state.list}
                    handleAsDone={this.handleAsDone}
                    handleRemove={this.handleRemove}
                    handleAsPendind={this.handleAsPendind}
                />
            </div>

        )
    }
}