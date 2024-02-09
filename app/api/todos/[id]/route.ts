import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const user = await getUserServerSession();
  if (!user) {
    return null;
  }
  const todo = await prisma.todo.findFirst({
    where: {
      id: id,
    },
  });
  if (todo?.userId !== user.id) {
    return null;
  }

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      {
        message: `Todo with id ${params.id} not found`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      {
        message: `Todo with id ${params.id} not found`,
      },
      { status: 404 }
    );
  }

  const { complete, description, ...rest } = await request.json();

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: params.id,
      },
      data: { complete, description },
    });

    return NextResponse.json(updatedTodo);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 400 }
    );
  }
}

export async function DELETE(req: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo) {
    return NextResponse.json(
      {
        message: `Todo with id ${params.id} not found`,
      },
      { status: 404 }
    );
  }

  await prisma.todo.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json({ message: `Todo with id ${params.id} deleted` });
}
