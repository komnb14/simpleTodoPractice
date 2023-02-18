import React from 'react';
import Todo from "@/common/compound/Todo";
import IndexTodoList from "@/domains/index/components/IndexTodoList";

const Index = () => {
    return (
        <div>
            <Todo>
                <ul>
                    <IndexTodoList/>
                </ul>
            </Todo>
        </div>
    );
};

export default Index;
