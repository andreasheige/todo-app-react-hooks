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
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add new todo here..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange} 
                />
                <input type="submit" className="input-submit" value="Add" />
            </form>
        )
    }
}

export default InputTodo;