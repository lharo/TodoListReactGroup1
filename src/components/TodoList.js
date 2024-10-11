import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  // useEffect to log whenever the todos array changes
  useEffect(() => {
    console.log('Todo list has changed:', todos);
  }, [todos]); // This effect will run whenever `todos` changes

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    setEditing(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingText(todoToEdit.text);
  };

  const handleSaveEdit = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, text: editingText } : todo
    ));
    setEditing(null);
    setEditingText('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <input 
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editing === todo.id ? (
              <>
                <input 
                  type="text" 
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;