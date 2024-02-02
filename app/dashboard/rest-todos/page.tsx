import { TodosGrid } from "@/app/todos";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Rest Todos Page",
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
      {/* TODO: Add todos form */}
      <TodosGrid todos={todos} />
    </div>
  );
}
