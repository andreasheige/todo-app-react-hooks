import React, { Component } from 'react';

class InputTodo extends Component {
    
    state = {
        title: ""
    };
    // Instead of having multiple methods to handle different input fields
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    // Save todo
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add new todo here..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange} 
                />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default InputTodo;