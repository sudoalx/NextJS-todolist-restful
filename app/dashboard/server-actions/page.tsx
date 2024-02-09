export const dynamic = "force-dynamic";
export const revalidate = 0;

import { TodosGrid } from "@/app/todos";
import { NewTodo } from "@/app/todos/components/NewTodo";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Server Actions Todos Page",
  description: "Rest Todos Page",
};

export default async function RestTodosPage() {
  const user = await getUserServerSession();
  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
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
