"use server";

import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });
  if (!todo) {
    throw new Error("Todo not found");
  }
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });
  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const addTodo = async (description: string) => {
  const user = await getUserServerSession();
  if (!user) {
    return {
      message: "Unauthorized",
    };
  }
  try {
    const todo = await prisma.todo.create({
      data: {
        description,
        userId: user.id,
      },
    });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (e) {
    return {
      message: e,
    };
  }
};

export const deleteCompletedTodos = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: {
      complete: true,
    },
  });
  revalidatePath("/dashboard/server-todos");
};
