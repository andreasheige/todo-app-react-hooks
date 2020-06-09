import React, { Component } from 'react';

class InputTodo extends Component {
    
    state = {
        titile: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.titile);
        this.setState({
            titile: ""
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