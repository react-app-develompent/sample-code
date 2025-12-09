import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '第3章の復習をする', completed: false },
    { id: 2, text: 'ToDoアプリを完成させる', completed: false },
  ]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('active');

  const addTodo = () => {
    const text = input.trim();
    if (!text) {
      setError('タスクを入力してください');
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
    setInput('');
    setError('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed);
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    return todos;
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <h1>ToDoアプリ</h1>
      <div className="todo-form">
        <label htmlFor="todo-input" className="form-label">
          新しいタスク
        </label>
        <input
          id="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいToDoを入力"
          className="todo-input"
        />
        <button type="submit" className="add-button" onClick={addTodo}>
          追加
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          未完了 ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          完了 ({completedCount})
        </button>
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          すべて ({todos.length})
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
export default App;
