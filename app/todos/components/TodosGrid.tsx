"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import { updateTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos }: TodosGridProps) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await updateTodo(id, complete);
    console.log("updatedTodo: ", updatedTodo);
    router.refresh();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Todos</h1>
      <h2 className="text-xl font-bold text-center">Rest Todos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </>
  );
};
