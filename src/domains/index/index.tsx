import React from 'react';
import Todo from "@/common/compound/Todo";

const Index = () => {
    return (
        <div>
            <Todo>
                <ul>
                    <Todo.List>
                        {(todo) => todo.map((data) => {
                            return (<li key={data.id}>
                                <Todo.Title>
                                    {data.title}
                                </Todo.Title>
                                <Todo.Description>
                                    {data.description}
                                </Todo.Description>
                            </li>)
                        })}
                    </Todo.List>
                </ul>
            </Todo>
        </div>
    );
};

export default Index;
