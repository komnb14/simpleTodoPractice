import {create} from "zustand";

export interface todoItem {
    id: number;
    title: string;
    description: string;
}

interface bear {
    todo: todoItem[];
    onClickDelete: (id: number) => void
}

const todoStore = create<bear>((set) => ({
    todo: [{id: 0, description: "Hello", title: "타이틀"}],
    onClickDelete: (id) => {
        set((state) => {
            const copyTodo = [...state.todo];
            const filterItem = copyTodo.filter((data) => data.id !== id);
            return {
                ...state,
                todo: filterItem,
            }
        })
    }
}))


export default todoStore
