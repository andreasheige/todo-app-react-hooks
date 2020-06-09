import React from 'react';
import TodoList from './TodoList';
import Header from './Header'

class TodoContainer extends React.Component {
    
    state = {
        todos: [
            {
                id: 1,
                title: "Default 1",
                completed: true,
            },
            {
                id: 2,
                title: "Default 2",
                completed: true,
            },
            {
                id: 3,
                title: "Default 3",
                completed: false,
            },
        ],
    };
    
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

    deleteTodo = id => {
        console.log("deleted", id);
    };

    render() {
        return (
            <div>
            <Header />
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