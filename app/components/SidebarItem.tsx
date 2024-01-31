import Link from "next/link";
import { CiBookmarkCheck } from "react-icons/ci";

export const SidebarItem = () => {
  return (
    <li>
      <Link
        href="/dashboard/rest-todos"
        className="w-full px-4 py-3 flex items-center space-x-4 rounded-md text-gray-300 group"
        aria-label="Dashboard"
      >
        <CiBookmarkCheck size={30} />
        <span className="-mr-1 font-medium">Dashboard</span>
      </Link>
    </li>
  );
};
