import React, { type ReactNode } from 'react';
import todoStore, { todoItem } from '@/lib/store/zustard';
import headlessChildrenChecker from '@/lib/functions/headlessChildrenChecker';

const Todo = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const List = ({
  children,
}: {
  children: (args: todoItem[]) => ReactNode[];
}) => {
  const { todo } = todoStore();

  if (headlessChildrenChecker(children)) return null;

  return <>{children(todo)}</>;
};

const Title = ({ children }: { children: string }) => {
  return <p>{children}</p>;
};

const Description = ({children}: { children: string }) => {
    return <p>{children}</p>
}

const DeleteButton = ({children, id}: { children: JSX.Element, id: number }) => {
    const {onClickDelete} = todoStore();

    return (<button onClick={() => onClickDelete(id)}></button>)
}


Todo.List = List;
Todo.Title = Title;
Todo.Description = Description
Todo.DeleteButton = DeleteButton;

export default Todo;
