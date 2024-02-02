"use client";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  return (
    <button
      onClick={() => toggleTodo(todo.id, !todo.complete)}
      key={todo.id}
      className={`${styles.todoItem} ${
        todo.complete ? styles.completed : styles.pending
      }`}
    >
      {todo.complete ? (
        <IoCheckbox className="text-2xl mr-2" />
      ) : (
        <IoSquareOutline className="text-2xl mr-2" />
      )}

      <h3 className="text-lg font-bold">{todo.description}</h3>
    </button>
  );
};
