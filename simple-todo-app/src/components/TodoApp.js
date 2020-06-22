import React from 'react';
import TodoList from './TodoList';
import Header from './layout/Header';
import InputTodo from './AddTodo';
import uuid from "uuid";
import axios from 'axios';

class TodoApp extends React.Component {
    
    state = {
        todos: [],
        show: false
    };
    // Todo is Active / Completed
    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show: !this.state.show,
        });
    };
    // Delete todo
    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    // Add new todo
    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    //  API Request of "fake-todos"
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => this.setState({ todos: response.data }));
    };

    render() {
        return (
            <div className="container">
            <Header headerSpan={this.state.show} />
            <InputTodo addTodoProps={this.addTodo} />
            <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
            />
            </div>
        );
    }
}

export default TodoApp;