import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, fetchAdd, fetchDelete, fetchUpdate, setEditingTodoId } from './todoThunks';
import { TodosState } from '../types';

const initialState: TodosState = {
  list: [],
  status: 'idle',
  error: null,
  editingTodoId: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAdd.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAdd.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [...state.list, action.payload];
        state.error = null;
      })
      .addCase(fetchAdd.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDelete.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDelete.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = state.list.filter((todo) => todo.id !== action.payload);
        state.error = null;
      })
      .addCase(fetchDelete.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUpdate.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUpdate.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = state.list.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
        state.error = null;
      })
      .addCase(fetchUpdate.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(setEditingTodoId, (state, action) => {
        state.editingTodoId = action.payload;
      });
  },
});

const todosReducer = todosSlice.reducer;
export default todosReducer;
