export interface TodoItem {
  id: number;
  description: string;
  status: "COMPLETED" | "ADDED" | "EDITED";
  createdAt: string;
  updatedAt?: string;
}

export interface TodoListState {
  items: TodoItem[]
}

export interface TodoListReducer {
  todoList: TodoListState;
}