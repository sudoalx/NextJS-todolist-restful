import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Mind Stone",
        complete: true,
      },
      {
        description: "Soul Stone",
        complete: false,
      },
      {
        description: "Power Stone",
        complete: false,
      },
      {
        description: "Time Stone",
        complete: false,
      },
      {
        description: "Reality Stone",
        complete: true,
      },
      {
        description: "Space Stone",
        complete: false,
      },
    ],
  });
  console.log(todo);

  return NextResponse.json({ message: "Seed executed!" });
}
