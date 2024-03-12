import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import Image from "next/image";
import Link from "next/link";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";

const menuItem = [
  // {
  //   icon: <IoCalendarOutline />,
  //   title: "Dashboard",
  //   path: "/dashboard",
  // },
  {
    icon: <IoCheckboxOutline />,
    title: "Agregar POD",
    path: "/dashboard/addproof",
  },
  {
    icon: <IoListOutline />,
    title: "Registros POD'S",
    path: "/dashboard/registeredproof",
  },
];

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="#" title="home">
            {/* Next/Image */}
            {/* <Image
              width={32}
              height={32}
              src="/large_logo_arch_daily.png"
              className="w-32"
              alt="Firplak logo"
            /> */}
            <h2 className="text-6xl font-bold text-cyan-600 text-center">Firplak</h2>
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            width={80}
            height={80}
            src="/user.png"
            alt="images"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Firplak User
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

          {menuItem.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
