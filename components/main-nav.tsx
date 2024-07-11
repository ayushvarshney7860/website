"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
   routes: {
      href: string;
      active: boolean;
      label: string;
   }[];
}

const MainNav = ({ routes, className }: MainNavProps) => {
   return (
      <nav className="flex items-center">
         <ul
            className={cn(
               "items-center space-x-2 lg:space-x-4 hidden md:flex",
               className
            )}
         >
            {routes.map((route) => (
               <li key={route.href}>
                  <Link
                     href={route.href}
                     className={cn(
                        "text-sm font-medium transition-colors p-2 rounded-lg hover:text-primary hover:bg-neutral-100 dark:hover:bg-gray-900",
                        route.active
                           ? "text-black dark:text-white"
                           : "text-muted-foreground"
                     )}
                  >
                     {route.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default MainNav;
