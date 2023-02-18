import { create } from 'zustand';

export interface todoItem {
  id: number | Date;
  title: string;
  description: string;
}

interface bear {
  todo: todoItem[];
  addTodo: (item: todoItem) => void;
}

const todoStore = create<bear>((set) => ({
  todo: [{ id: 0, description: 'Hello', title: '타이틀' }],
  addTodo: (item: todoItem) =>
    set((state: bear) => ({ todo: [...state.todo, item] })),
}));

export default todoStore;
