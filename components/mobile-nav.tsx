"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

interface MainNav {
   routes: {
      href: string;
      label: string;
      active: boolean;
   }[];
}

const MobileNav = ({ routes }: MainNav) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Button
            size="icon"
            className="flex md:hidden"
            variant="ghost"
            onClick={() => setOpen(true)}
         >
            <Menu />
            <span className="sr-only">Open Menu</span>
         </Button>
         <div
            className={cn(
               "block md:hidden absolute h-screen w-full top-0 bg-secondary dark:bg-gray-950 bg-gray-50 transition-all z-50",
               open ? "right-0" : "right-[100vw]"
            )}
         >
            <Button
               variant="ghost"
               className="absolute top-5 right-5"
               size="icon"
               onClick={() => setOpen(false)}
            >
               <X size={30} />
               <span className="sr-only">Close Menu</span>
            </Button>
            <nav className="h-full items-center justify-center">
               <ul className="flex flex-col space-y-3 w-full h-full items-start justify-center px-14">
                  {routes.map((route) => (
                     <li key={route.href}>
                        <Link
                           href={route.href}
                           onClick={() => setOpen(false)}
                           className={cn(
                              "text-3xl font-semibold w-full transition-colors p-4 rounded-lg hover:text-primary hover:bg-neutral-100 dark:hover:bg-gray-900",
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
         </div>
      </>
   );
};

export default MobileNav;
