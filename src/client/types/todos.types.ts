export interface TodoItem {
  id: number;
  description: string;
  status: "COMPLETED" | "ADDED" | "EDITED";
  createdAt: Date;
  updatedAt?: Date;
}

export interface TodoListState {
  items: TodoItem[]
}

export interface TodoListReducer {
  todoList: TodoListState;
}