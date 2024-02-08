import { getServerSession } from "next-auth";
import { WidgetItem } from "../components/WidgetItem";
import { redirect } from "next/navigation";

import Image from "next/image";
import { authOptions } from "@/lib/authOptions";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const { name, email, image } = session?.user ?? {
    name: "No user",
    email: "No email",
    image: "/images/placeholder.jpeg",
  };
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="User logged in server-side">
        {session ? (
          <>
            <span>
              <Image
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto"
                src={image ?? ""}
                alt={name ?? "Placeholder"}
              />
            </span>
            <br />
            <span>
              <span className="text-green-500">Name:</span>
              <input
                className="bg-gray-700 text-gray-300 p-1 rounded-md w-full text-center"
                type="text"
                value={name ?? ""}
                readOnly
              />
            </span>
            <br />
            <span>
              <span className="text-green-500">Email:</span>{" "}
              <input
                className="bg-gray-700 text-gray-300 p-1 rounded-md w-full text-center"
                type="text"
                value={email ?? ""}
                readOnly
              />
            </span>
            <br />
            <span className="text-green-500">Session:</span>{" "}
            <textarea
              className="bg-gray-700 text-gray-300 p-1 rounded-md w-full"
              value={JSON.stringify(session, null, 2)}
              readOnly
            />
          </>
        ) : (
          <span className="text-red-500">No session</span>
        )}
      </WidgetItem>
    </div>
  );
}
