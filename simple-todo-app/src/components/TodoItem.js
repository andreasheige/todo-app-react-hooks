import React, { useEffect } from 'react';


const TodoItem = props =>  {
      // Style for completed TODOs
      const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    };

    const { completed, id, title } = props.todo;

    useEffect(() => {
        return () => {
            alert("TODO, about to be deleted!")
        }
    }, []);

    return (
        <li className="todo-item">
        <input  type="checkbox" 
                checked={completed}
                onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
            Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
            {title}
        </span>
        </li>
        )     
};

export default TodoItem;