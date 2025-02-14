import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [{id: 1, text: "hello world" }]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        /* updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {...todo,...action.payload }
                }
                return todo
            } )
        }*/
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer