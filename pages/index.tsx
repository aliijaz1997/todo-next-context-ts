import { TodoProvider } from "../src/context/todo-context";
import App from "../src/components/App";

export default function Home() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}
