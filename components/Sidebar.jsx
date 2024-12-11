"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const links = [
  { href: "/", label: "Strona główna", icon: <FaHome /> },
  { href: "/user/signup", label: "Rejestracja", icon: <FaUserPlus /> },
  { href: "/user/signin", label: "Logowanie", icon: <FaSignInAlt /> },
  { href: "/user/profile", label: "Profil", icon: <FaUser /> },
  { href: "/user/signout", label: "Wylogowanie", icon: <FaSignOutAlt /> },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-2">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                {link.icon}
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
