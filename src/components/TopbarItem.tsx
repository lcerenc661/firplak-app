'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const TopbarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();

  return (
    <button className="">
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group text-xs 
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
      ${
        path === pathName
          ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
          : ""
      }
      `}>

        <span className="group-hover:text-white">{ title}</span>
      </Link>
    </button>
  );
};
