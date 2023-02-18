import useInput from '@/hooks/useInput';
import todoStore from '@/lib/store/zustard';
import React, { useCallback, useState } from 'react';

const AddTodoList = () => {
  const [title, onTitleHandler, clearTitleValue] = useInput('');
  const [description, onDescriptionHandler, clearDescriptionValue] =
    useInput('');

  const { addTodo } = todoStore();

  const handleSubmit = useCallback(
    (e: HTMLFormElement) => {
      e.preventDefault();
      if (title.trim() && description.trim()) {
        addTodo({ id: new Date(), title, description });
        clearTitleValue();
        clearDescriptionValue();
      }
    },
    [title, description]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={onTitleHandler}
        placeholder="제목"
      />
      <input
        type="text"
        value={description}
        onChange={onDescriptionHandler}
        placeholder="설명"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default AddTodoList;
