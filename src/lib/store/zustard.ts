import {create} from "zustand";

export interface todoItem {
    id: number;
    title: string;
    description: string;
}

interface bear {
    todo: todoItem[];
}

const todoStore = create<bear>((set) => ({
    todo: [{id: 0, description: "Hello", title: "타이틀"}],
}))


export default todoStore
