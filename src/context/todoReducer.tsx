import {State, Action, ActionKind, Todo} from "../types/interface"
export const reducer = (state : State, action : Action): State  => {
  if (action.type === ActionKind.ADD_TODO) {
    const newTodo : Todo = action.payload;
    return {
      todos: [...state.todos, newTodo],
    };
  }

  if (action.type === ActionKind.DELETE_TODO) {
    const id : number = action.payload;
    return {
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }

  if (action.type === ActionKind.UPDATE_DONE) {
    const id = action.payload;

    return {
      todos: state.todos.map((currentTodo) => {
        if (currentTodo.id === id) {
          return { ...currentTodo, done: !currentTodo.done };
        }
        return currentTodo;
      }),
    };
  }
  return state;
};
