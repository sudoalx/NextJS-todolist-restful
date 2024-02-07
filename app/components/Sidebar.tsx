import { CiLogout } from "react-icons/ci";
import { SidebarItem } from ".";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";
import { RxCookie } from "react-icons/rx";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    path: "/dashboard/rest-todos",
    label: "Rest Todos",
  },
  {
    icon: <IoListOutline />,
    path: "/dashboard/server-actions",
    label: "Server Actions",
  },
  {
    icon: <RxCookie />,
    path: "/dashboard/cookies",
    label: "Cookies",
  },
];

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray-800 text-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard/" title="home">
            <MdOutlineAdminPanelSettings className="w-20 h-20 m-auto text-cyan-300 cursor-pointer" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            priority={false}
            src="/aipfp.jpeg"
            alt="profile picture"
            width={100}
            height={100}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-300 lg:block">
            Alex
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button
          className="px-4 py-3 flex items-center space-x-4 group w-full border hover:bg-red-500 rounded-lg hover:text-white transition duration-300 font-bold"
          aria-label="Logout"
        >
          <CiLogout className="text-xl group-hover:text-white transition duration-300 font-bold" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
