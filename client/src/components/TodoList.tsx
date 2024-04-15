import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, fetchDelete, fetchUpdate, setEditingTodoId } from '../redux/todoThunks';
import { AppDispatch } from '../redux/store';
import { TodosState } from '../types';


const TodosList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector((state: { todos: TodosState }) => state.todos.list);
  const editingTodoId = useSelector((state: { todos: TodosState }) => state.todos.editingTodoId);

  const [editTodo, setEditTodo] = useState('');


  const handleEditTodo = (id: number, currentTitle: string) => {
    dispatch(setEditingTodoId(id));
    setEditTodo(currentTitle);
  };

  const handleCancelEdit = () => {
    dispatch(setEditingTodoId(null));
    setEditTodo('');
  };

  const handleSaveEdit = (id: number) => {
    dispatch(fetchUpdate({ id, title: editTodo }));
    dispatch(setEditingTodoId(null));
    setEditTodo('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(fetchDelete(id));
  };

  return (
    <>
      {todos.slice().reverse().map((todo) => (
        <div key={todo.id} >
          {todo.id === editingTodoId ? (
            <div className='edit-container'>
              <div className="edit-form">
                <input
                  id="todoEditInput"
                  name="todoEditInput"
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className="edit-input"
                />
                <div className="buttons-container">
                  <button onClick={() => handleSaveEdit(todo.id)} className='button-primary'>Save</button>
                  <button onClick={handleCancelEdit} className='button-secondary'>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="todos-list-item">
              <p>{todo.title}</p>
              <div className='buttons-container'>
                <button onClick={() => handleEditTodo(todo.id, todo.title)} className='button-primary'>Edit</button>
                <button onClick={() => handleDelete(todo.id)} className='button-secondary'>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default TodosList;
