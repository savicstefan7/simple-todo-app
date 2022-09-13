import React from 'react';
import { useTodoContext } from './TodoProvider';
import { useState } from 'react';

const TodoList = () => {
    const [editClickedId, setEditClickedId] = useState(null);
    const {todoList, deleteTodo, completedTodo, editTodo } = useTodoContext();
    const [editingTodo, setEditingTodo] = useState("");
const saveEditHandler = (id, editingTodo) => {
setEditClickedId(null);
editTodo(id, editingTodo);
console.log(editingTodo);
}
  return (
    <ul className="table">
       {todoList.map((todo)=> 
       (<li key={todo.id}>
            <div>
                <input type="checkbox" onChange={()=> completedTodo(todo.id)} checked={todo.completed} />
                {
                    editClickedId === todo.id ? 
                    <><input type="text" placeholder={todo.text} onChange ={(e) => setEditingTodo(e.target.value)} value={editingTodo} /> <button className="editBtn" onClick={() => saveEditHandler(todo.id, editingTodo)}>Save</button> </>
                    : <>{todo.text} </> 
                        } 
            </div>
        <div>
            <button onClick={() => setEditClickedId(todo.id)} className="editBtn">Edit</button>
            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
        </li>))}
    </ul>
  );
};

export default TodoList