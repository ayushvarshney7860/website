import { cn } from "@/lib/utils";
import { FooterConfig } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ config }: { config: FooterConfig }) => {
   const navs = [
      {
         name: "About Us",
         href: "#",
      },
      {
         name: "Services",
         href: "#",
      },
      {
         name: "Portfolio",
         href: "#",
      },
      {
         name: "Contact Us",
         href: "#",
      },
      {
         name: "FAQ",
         href: "#",
      },
   ];
   return (
      <footer className="w-full container px-0 sm:px-8 pb-16 sm:pb-5 pt-10 flex flex-col items-center">
         <Link
            href={"/"}
            className="text-xl font-semibold flex gap-x-2 px-2 items-center"
         >
            <div className="rounded-lg">
               <Image
                  src={config.logo}
                  alt="logo"
                  height={32}
                  width={200}
                  className={cn("invert", config.invert_logo_on_dark && "dark:invert-0")}
               />
            </div>
            {config.title}
         </Link>
         <ul className="flex flex-wrap items-center justify-center space-x-4 text-sm sm:text-base sm:space-x-8 mt-6 sm:mt-10 max-w-[80vw]">
            {config.links.map((nav) => (
               <li key={nav.name}>
                  <Link
                     href={nav.href}
                     className="font-semibold opacity-85 hover:underline"
                  >
                     {nav.name}
                  </Link>
               </li>
            ))}
         </ul>
         <div className="pt-5 p-2 mt-12 sm:mt-24 border-t-2 border-primary/80 w-full flex flex-col space-y-2 xs:flex-row justify-between text-center sm:text-start">
            <span className="opacity-85 text-xs xs:text-sm md:text-base">
               &copy; 2024 HighPixelZone.
               <br /> All rights reserved
            </span>
            <ul className="flex justify-center sm:justify-start space-x-2 sm:space-x-4 underline opacity-80 text-xs xs:text-sm md:text-base">
               <li>
                  <Link href={config.privacy_policy}>Privacy Policy</Link>
               </li>
               <li>
                  <Link href={config.terms_and_condition}>
                     Terms and Condition
                  </Link>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
