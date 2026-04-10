import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"save Gotham",
            completed: false,
        }
    ],
    addTodo: (todo) =>{},
    deleteTodo: (id)=>{},
    editTodo: (id,todo)=>{},
    toggleComplete: (id)=>{},
})

export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider