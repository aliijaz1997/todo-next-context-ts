import React, { useReducer } from "react";
import {ActionKind} from "../types/interface"
import {reducer} from './todoReducer'
import { Todo, TodoProviderProps, contextType} from '../types/interface'
const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn javascript",
      description: "lorem ipsum",
      done: true,
    },
    {
      id: 2,
      title: "Learn typescript",
      description: "lorem ipsum",
      done: false,
    },
  ],
};

export const TodoContext: React.Context<contextType> = React.createContext(null);


export function TodoProvider({ children } : TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddTodo(todoData: Todo) {
    const newTodo = { id: state.todos.length + 1, ...todoData };
    dispatch({ type: ActionKind.ADD_TODO, payload: newTodo });
  }

  function handleDeleteTodo(id : number) {
    dispatch({ type: ActionKind.DELETE_TODO, payload: id });
  }

  function handleUpdateDone(id : number) {
    dispatch({ type: ActionKind.UPDATE_DONE, payload: id });
  }

  return (
    <TodoContext.Provider
      value={{
        handleAddTodo,
        handleDeleteTodo,
        handleUpdateDone,
        state,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
