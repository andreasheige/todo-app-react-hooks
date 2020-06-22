// Local
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Header from './layout/Header';
import InputTodo from './AddTodo';
// 3- part
import uuid from "uuid";
import axios from 'axios';

const TodoApp = props => {
    const [todos, setTodos] = useState([])
    const [show, setShow] = useState(false)

        // Todo is Active / Completed
    const handleChange = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
                }) 
            )
            setShow(!show)
    };

        // Delete todo
    const deleteTodo = id => {
        setTodos([
                ...todos.filter(todo => {
                    return todo.id !== id;
                }),
            ])
        };
    
    // Add new todo
    const addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo])
    };

    useEffect(() => {
        console.log("test")
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => setTodos(response.data))
    // Specifying an array to stop/control hooks infinite loop
    }, []); 

        return (
            <div className="container">
            <Header headerSpan={show} />
            <InputTodo addTodoProps={addTodo} />
            <TodoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={deleteTodo}
            />
            </div>
        );
    
} 

export default TodoApp;