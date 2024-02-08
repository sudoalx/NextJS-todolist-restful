import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Welcome to the demo</h1>
      <h3 className="text-2xl font-semibold">This is a demo includes:</h3>
      <ul className="text-lg text-center">
        <li className="mb-4">Todo app managed by Restful API</li>
        <li className="mb-4">Todo app managed by Server Actions</li>
        <li className="mb-4">State management with Cookies</li>
      </ul>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Link
            href="/dashboard/"
            className="text-blue-500 p-4 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
