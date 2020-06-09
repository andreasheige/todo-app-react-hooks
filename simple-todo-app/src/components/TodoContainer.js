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
    
    handleChange = (id) => {
        console.log("clicked, id");
    };

    render() {
        return (
            <div>
            <Header />
            <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            />
            </div>
        );
    }
}

export default TodoContainer;