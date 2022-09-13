import React from 'react'
import { useTodoContext } from './TodoProvider'
import { useState } from 'react';
const AddTodo = () => {

const { addingTodo } = useTodoContext();
const [todo, setTodo] = useState("");
const submitHandler = (e) => {
    e.preventDefault();
const newTodo={
    id: new Date().getTime(),
    text:todo,
    completed:false,
}

    addingTodo(newTodo);
    setTodo("");
}
return (
    <form className="addTodo" onSubmit={submitHandler}>
        <input type="text" className="inputField" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit"> ADD TODO</button>
    </form>
  )
}

export default AddTodo