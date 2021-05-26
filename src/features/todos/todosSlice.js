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
      state.value = [
        state.value.filter((todo) => {
          return todo !== action.payload;
        }),
      ];
    },
  },
});



export const { addTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = state => state.todos.value;
export default todosSlice.reducer;
