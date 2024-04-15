
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface UpdateTodoPayload {
  id: number;
  title: string;
}

export interface Todo {
  id?: number;
  title: string;
}

export interface TodosState {
  list: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  editingTodoId: number | null;
}

export const fetchTodos = createAsyncThunk('todos/all', async () => {
    const response = await axios.get('http://localhost:3000/api/todos'); 
    return response.data;
});

export const fetchDelete = createAsyncThunk('todos/delete', async (id: number) => {
    const response = await axios.delete(`http://localhost:3000/api/todos/${id}`,
    );
    if (response.status === 200) {
      return id;
    }
  });

export const fetchAdd = createAsyncThunk('todos/add', async (inputs: Todo) => {
  const response = await axios.post('http://localhost:3000/api/todos',
    inputs,
  );
  return response.data;
});

export const fetchUpdate = createAsyncThunk('todos/update', async ({ id, title }: UpdateTodoPayload) => {
    const response = await axios.patch(`http://localhost:3000/api/todos/${id}`, {
      title,
    });
    return response.data;
  });

export const setEditingTodoId = createAction<number|null>('todos/setEditingTodoId');