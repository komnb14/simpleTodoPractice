import React from 'react';
import Todo from '@/common/compound/Todo';
import AddTodo from '@/common/compound/AddTodo';
import IndexTodoList from '@/domains/index/components/IndexTodoList';
import AddTodoList from '@/domains/index/components/AddTodoList';

const Index = () => {
  return (
    <div>
      <Todo>
        <ul>
          <IndexTodoList />
        </ul>
      </Todo>
      <AddTodo>
        <AddTodoList />
      </AddTodo>
    </div>
  );
};

export default Index;
