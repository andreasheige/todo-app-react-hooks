import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuid4 } from "uuid";

class TodoContainer extends React.Component {
    
    state = {
        todos: [
            {
                id: uuid4(),
                title: "Default 1",
                completed: true,
            },
            {
                id: uuid4(),
                title: "Default 2",
                completed: true,
            },
            {
                id: uuid4(),
                title: "Default 3",
                completed: false,
            },
        ],
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
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    // Add new todo
    addTodoItem = title => {
        const newTodo = {
            id: uuid4(),
            title: title,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return (
            <div>
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