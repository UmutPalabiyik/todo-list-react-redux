import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    deleteTodo: (state, action) => {
      const newValue = state.value.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.value = newValue
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = (state) => state.todos.value;
export default todosSlice.reducer;
