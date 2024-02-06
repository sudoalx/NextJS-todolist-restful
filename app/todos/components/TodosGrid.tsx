"use client";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { TodoItem } from "..";
import { toggleTodo } from "../actions/todo-actions";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos }: TodosGridProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Todos</h1>
      <h2 className="text-xl font-bold text-center">Rest Todos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
        {!todos?.length && <NoTodos />}
      </div>
    </>
  );
};

const NoTodos = () => {
  return (
    <p className="text-center text-xl font-bold text-gray-600">
      No todos found. Add a new todo to get started.
    </p>
  );
};
