import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoProvider from './components/TodoProvider';

const App = () => {
  return (
    <div>
      <h1 className="title">TODOS:</h1>
      <TodoProvider>
        <AddTodo/>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
