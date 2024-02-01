"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  label: string;
}

export const SidebarItem = ({ icon, path, label }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`
        w-full px-4 py-3 flex items-center space-x-4 rounded-md text-gray-300 group
        hover:bg-cyan-500 hover:text-white transition duration-300
        ${
          pathName === path
            ? "bg-gradient-to-r from-cyan-500 to-light-blue-500 text-white"
            : ""
        }
        `}
        aria-label="Dashboard"
      >
        {icon}
        <span className="-mr-1 font-medium">{label}</span>
      </Link>
    </li>
  );
};
