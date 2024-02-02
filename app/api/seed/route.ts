import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Collect Mind Stone",
        complete: true,
      },
      {
        description: "Collect Soul Stone",
        complete: false,
      },
      {
        description: "Collect Power Stone",
        complete: false,
      },
      {
        description: "Collect Time Stone",
        complete: false,
      },
      {
        description: "Collect Reality Stone",
        complete: true,
      },
      {
        description: "Collect Space Stone",
        complete: false,
      },
    ],
  });

  return NextResponse.json({ message: "Seed executed!" });
}
