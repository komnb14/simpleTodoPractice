import React from 'react';
import Todo from "@/common/compound/Todo";


const Delete = () => {
        return (
            <div>
                <Todo>
                    <Todo.List>
                        {(todo) => todo.map((data) => {
                            return (
                                <div key={data.id}>
                                    <Todo.Title>{data.title}</Todo.Title>
                                    <Todo.DeleteButton id={data.id}><p>????</p></Todo.DeleteButton>
                                </div>
                            )
                        })}
                    </Todo.List>
                </Todo>
            </div>
        );
    }
;

export default Delete;
