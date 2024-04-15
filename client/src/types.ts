export interface Todo {
  id: number;
  title: string;
}

export interface TodosState {
  list: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  editingTodoId: number | null;
}
