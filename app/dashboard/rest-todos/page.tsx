import { TodosGrid } from "@/app/todos";
import { NewTodo } from "@/app/todos/components/NewTodo";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Restful API Todos Page",
  description: "Rest Todos Page",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: "asc",
    },
  });

  return (
    <div>
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
