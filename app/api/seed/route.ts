import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test@sudoalex.dev",
      name: "Alex",
      password: "password",
      roles: ["admin", "user", "editor"],
      todos: {
        create: [
          {
            description: "Collect Soul Stone",
            complete: false,
          },
          {
            description: "Collect Time Stone",
            complete: true,
          },
          {
            description: "Collect Space Stone",
            complete: false,
          },
          {
            description: "Collect Reality Stone",
            complete: true,
          },
          {
            description: "Collect Power Stone",
            complete: false,
          },
          {
            description: "Collect Mind Stone",
            complete: false,
          },
        ],
      },
    },
  });

  return NextResponse.json({
    message: "Seed executed!",
    data: user,
  });
}
