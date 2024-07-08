"use client";

import Link from "next/link";
import MainNav from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { NavbarConfig } from "@/types";
import Image from "next/image";

const Navbar = ({ config }: { config: NavbarConfig }) => {
   const pathname = usePathname();

   const routes = [
      ...config.routes.map((route) => ({
         ...route,
         active: pathname === route.href,
      })),
   ];

   const [show, setShow] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   const controlNavbar = () => {
      if (typeof window !== "undefined") {
         if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setShow(false);
         } else {
            setShow(true);
         }

         setLastScrollY(window.scrollY);
      }
   };

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", controlNavbar);

         return () => {
            window.removeEventListener("scroll", controlNavbar);
         };
      }
   }, [lastScrollY, controlNavbar]);

   return (
      <nav
         className={cn(
            "flex items-center border-b z-50 bg-background transition-all fixed w-full px-4",
            show ? "py-2 h-16" : "h-0 py-0 overflow-hidden"
         )}
      >
         <div className="flex items-center w-full animate-enter-top">
            <div className="flex gap-x-6">
               <Link
                  href={"/"}
                  className="text-md font-semibold flex gap-x-2 py-2 px-2 items-center"
               >
                  <div className="rounded-lg overflow-hidden">
                     <Image
                        src={config.logo}
                        alt="logo"
                        height={32}
                        width={150}
                        className={cn(
                           "invert",
                           config.invert_logo_on_dark && "dark:invert-0"
                        )}
                     />
                  </div>
                  {config.title}
               </Link>
               <MainNav routes={routes} />
            </div>
            <div className="flex items-center space-x-4 ml-auto">
               <Link href={config.book_btn_href} className="hidden xs:inline">
                  <Button
                     variant={"outline"}
                     className="font-semibold text-base"
                  >
                     Book
                  </Button>
               </Link>
               <ModeToggle />
               <MobileNav routes={routes} />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
