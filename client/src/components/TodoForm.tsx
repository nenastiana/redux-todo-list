import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdd } from '../redux/todoThunks';
import { AppDispatch } from '../redux/store';
import '../index.css'

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(fetchAdd({ title }));
    setTitle('');
  };

  return (
    <>
      <h1>Meowy To-Do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="todoInput"
          name="todoInput"
          type="text"
          placeholder="Enter todo"
          value={title}
          onChange={handleChange}
        />
        <button className='addButton' type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodoForm;
