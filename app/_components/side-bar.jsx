"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import DashboardIcon from "@/app/_icons/DashboardIcon";
import HomeIcon from "@/app/_icons/HomeIcon";
import UsersIcon from "@/app/_icons/UsersIcon";
import GridIcon from "@/app/_icons/GridIcon";
import { AuthContext } from "@/app/_utils/auth-context";
import { useContext } from "react";
import Logo from "@/app/_icons/Logo";

const MGMT_PREFIX = "/staff";

const menuItems = [
  { href: `${MGMT_PREFIX}`, label: "Home", icon: HomeIcon },
  { href: `${MGMT_PREFIX}/customer`, label: "Customer", icon: UsersIcon },
  { href: `${MGMT_PREFIX}/appointment`, label: "Appointment", icon: GridIcon },
];

export default function SideBar() {
  const { signOut } = useContext(AuthContext);
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-base-100 text-base-content fixed left-0 top-0 ">
      <div className="flex flex-row justify-start items-center w-full h-16 bg-gradient-to-r from-primary to-base-100 px-8">
        <Logo width={50} height={50} color="white"/>
        <p className="text-xl font-bold italic text-white ml-2">
          Staff Center
        </p>
      </div>
      <nav className="py-12 ml-4">
        <ul className="space-y-6">
          {menuItems.map((item) => {
            let Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx("w-full sm:h-14 flex justify-start sm:gap-4 items-center btn btn-ghost text-xl text-base-content rounded-md", {
                    "btn-active text-primary": pathname === item.href,
                  })}
                >
                  <Icon color={pathname === item.href ? "var(--color-primary)" : "var(--color-base-content)"} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute left-[20%] bottom-12 inset-x-auto flex justify-start items-center gap-6">
        <button
          className="btn btn-outline rounded-badge"
          onClick={async () => {
            await signOut();
          }}
        >
          Logout
        </button>
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="dark" />
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}
