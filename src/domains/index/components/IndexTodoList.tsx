import React from 'react';
import Todo from "@/common/compound/Todo";

const IndexTodoList = () => {
    return (
        <Todo.List>
            {(todo) => todo.map((data) => {
                return (
                    <li key={data.id}>
                        <Todo.Title>
                            {data.title}
                        </Todo.Title>
                        <Todo.Description>
                            {data.description}
                        </Todo.Description>
                    </li>
                )
            })}
        </Todo.List>
    );
};

export default IndexTodoList;
