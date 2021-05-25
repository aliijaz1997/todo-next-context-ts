import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";
import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import {Todo} from '../types/interface'
function App() {
  const { state } = useContext(TodoContext);

  return (
    <div className="container">
      <TodoForm />

      {state.todos.map((todo : Todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}

export default App;
