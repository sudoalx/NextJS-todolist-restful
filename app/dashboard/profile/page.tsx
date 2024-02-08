"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  const { name, email, image } = session?.user ?? {
    name: "No user",
    email: "No email",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <hr />
      <div className="mt-4 w-full flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">Profile Picture</h2>
        <Image
          src={image ?? "https://via.placeholder.com/150"}
          alt={name ?? "No user"}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <div className="mt-4 space-y-4">
        <h2 className="text-xl font-semibold">Account Information</h2>
        <span className="font-semibold">Name:</span>{" "}
        <span className="text-gray-300">{name ?? "No user"}</span>
        <br />
        <span className="font-semibold">Email:</span>{" "}
        <span className="text-gray-300">{email ?? "No email"}</span>
      </div>
    </div>
  );
}
