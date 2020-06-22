import React, { useState } from "react";

const AddTodo = props => {
    const [title, setTitle] = useState("")

    const onChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
    e.preventDefault()
    props.addTodoProps(title)
    setTitle("")
}

return (
    <form onSubmit={handleSubmit} classname="form-container">
        <input
        type="text"
        className="input-text"
        placeholder="Add new TODO here..."
        value={title}
        name="title"
        onChange={onChange}
        />
        <input type="submit" className="input-submit" value="Add"/>
    </form>
)
}
export default AddTodo;