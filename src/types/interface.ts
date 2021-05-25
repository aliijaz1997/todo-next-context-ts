export interface Todo {
  id?: number;
  title : string;
  description: string;
  done?: boolean;
}

export interface TodoItemProps  {
  item : Todo
}

export interface TodoProviderProps {
  children : JSX.Element
}

export interface State {
  todos : Todo[]
}


export enum ActionKind {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_DONE = "UPDATE_DONE"
}

export type Action = {
  type: ActionKind.ADD_TODO,
  payload: Todo
} | {
  type: ActionKind.DELETE_TODO,
  payload: number
} | {
  type: ActionKind.UPDATE_DONE,
  payload: number
}

export interface contextType  {
  handleAddTodo(todo: Todo) : void,
  handleDeleteTodo(id: number) : void,
  handleUpdateDone(id: number) : void,
  state: State
}