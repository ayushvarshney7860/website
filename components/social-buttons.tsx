import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { SocialConfig } from "@/types";

const Social = ({ config }: { config: SocialConfig }) => {
   return (
      <div className="transition-all fixed bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 sm:bottom-[unset] sm:left-[unset] sm:right-0 sm:top-1/2 z-50">
         <div className="flex sm:flex-col bg-background border shadow-lg rounded-full mb-3 sm:mb-0 sm:mr-5 md:mr-8 overflow-hidden animate__animated animate__fadeInRight delay-500">
            {config.links.map((social) => (
               <Link href={social.link} key={social.icon} target="_blank">
                  <Button
                     variant={"ghost"}
                     className="rounded-none p-1 h-10 w-[50px] xs:h-[44px] xs:w-16 sm:h-16 sm:w-[44px]"
                  >
                     <Image
                        src={social.icon}
                        alt="icon"
                        height={24}
                        width={24}
                        className="w-5 xs:w-6 dark:invert filter-none grayscale-0"
                     />
                  </Button>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Social;
