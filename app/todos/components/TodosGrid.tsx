import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

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
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};
