export enum TodoStatus {
  "ADDED",
  "EDITED",
}

export interface TodoItem {
  id: string;
  description: string;
  status: TodoStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface TodoListState {
  items: TodoItem[];
}

export interface TodoListReducer {
  todoList: TodoListState;
}
