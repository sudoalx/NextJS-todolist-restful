"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteTodos } from "../helpers/todos";
import { useRouter } from "next/navigation";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    await createTodo(description);
    router.refresh();
  };

  const deleteCompleted = async () => {
    await deleteTodos();
    router.refresh();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row items-center justify-center mt-8 mb-8"
    >
      <input
        type="text"
        className="rounded border border-gray-600 p-2 w-full sm:w-96 bg-gray-800 active:bg-gray-900 text-white transition-all focus:outline-none mr-2"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex mt-2 sm:mt-0">
        <button
          type="submit"
          className="flex items-center justify-center rounded bg-cyan-500 p-2 text-white hover:bg-cyan-700 transition-all"
        >
          Create
        </button>

        <button
          onClick={() => deleteCompleted()}
          type="button"
          className="flex items-center justify-center rounded ml-2 bg-red-500 p-2 text-white hover:bg-red-700 transition-all"
        >
          <IoTrashOutline />
          Delete
        </button>
      </div>
    </form>
  );
};
