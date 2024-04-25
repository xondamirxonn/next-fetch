import { createSlice } from "@reduxjs/toolkit";

interface TodoType {
  todos: {
    name: string;
    id: number;
  }[];
}

const initialState: TodoType = {
  todos: [],
};

const TodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
     
    },
  },
});
