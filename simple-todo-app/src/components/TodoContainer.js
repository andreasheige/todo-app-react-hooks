import React from 'react';
import TodoList from './TodoList';
import Header from './layout/Header';
import InputTodo from './AddTodo';
import uuid from "uuid";
import axios from 'axios';

class TodoContainer extends React.Component {
    
    state = {
        todos: [],
    };
    // Todo is Active / Completed
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    // Delete todo
    deleteTodo = id => {
        axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                }),
            ],
        })
        )
    };

    // Add new todo
    addTodoItem = title => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                id: uuid.v4(),
                title: title,
                completed: false,
            })
        .then(response =>
            this.setState({
                todos: [...this.state.todos, response.Data],
        })
        )
    };
    //  API Request of "fake-todos"
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({ todos: response.data }));
    };

    render() {
        return (
            <div className="container">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            />
            </div>
        );
    }
}

export default TodoContainer;