"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";

type navLinkT = {
  name: string;
  href: string;
};
const navLinks: navLinkT[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "User",
    href: "/user",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body>
        <nav className='py-5 px-10 bg-slate-200'>
          {navLinks.map((item: navLinkT) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                className={`text-black mx-4 ${
                  isActive ? "font-bold text-blue-800" : ""
                }`}
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}
