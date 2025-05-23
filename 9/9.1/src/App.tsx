import { useState, memo, useMemo, useCallback } from 'react';

function TodoItemComponent({ text, completed, onClick }) {
  const heavyComputation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) sum += i;
    return sum;
  }, []);

  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
}

const TodoItem = memo(TodoItemComponent);

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Fix performance', completed: false },
  ]);
  const [input, setInput] = useState('');

  const toggleTodo = useCallback(
    (id) => {
      console.log('create toggleTodo');
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [todos],
  );

  const addTodo = useCallback(() => {
    console.log('create addTodo');
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  }, [todos]);

  console.log('render App');
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;