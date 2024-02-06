"use client";
import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <button
      onClick={onToggleTodo}
      key={todoOptimistic.id}
      className={`${styles.todoItem} ${
        todoOptimistic.complete ? styles.completed : styles.pending
      }`}
    >
      {todoOptimistic.complete ? (
        <IoCheckbox className="text-2xl mr-2" />
      ) : (
        <IoSquareOutline className="text-2xl mr-2" />
      )}

      <h3 className="text-lg font-bold">{todoOptimistic.description}</h3>
    </button>
  );
};
