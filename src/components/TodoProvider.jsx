import React, { useContext } from 'react';
import { createContext, useState } from 'react';

const TodoContext = createContext();

const initialState =[{
    id: 1,
    text:"Learn React",
    completed:false,
},
{
    id: 2,
    text:"Learn Angular",
    completed:false,
}]

const TodoProvider = ({children}) => {

const [todoList, setTodoList] = useState(initialState);
const addingTodo = (newTodo)=> {
setTodoList([newTodo, ...todoList])
}
const deleteTodo=(id)=>{
        const UpdatedTodoList = [...todoList].filter((todo)=> todo.id !== id);
        setTodoList(UpdatedTodoList);
}
const completedTodo=(id)=>{
    const UpdatedTodoList = [...todoList].map((todo)=> {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    });
    setTodoList(UpdatedTodoList);
}
const editTodo=(id, editedTodo)=>{
    const UpdatedTodoList = [...todoList].map((todo)=> {
        if(todo.id === id){
            todo.text=editedTodo
        }
        return todo
    });
    setTodoList(UpdatedTodoList);
}
const contextValue = {
    todoList,
    addingTodo,
    deleteTodo,
    completedTodo,
    editTodo,
};

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;