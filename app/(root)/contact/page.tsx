import animation_config from "@/app/config/animation-config";
import config from "@/app/config/home-config";
import ContactCard from "@/components/cards/contact-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
   const animations = animation_config.contact;
   const configs = config.getInTouch;
   return (
      <div className="lg:container !px-0 pt-20">
         <div className="w-full container pb-16 sm:pb-20 px-10 flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-8 lg:space-x-24 items-center justify-center relative">
            <div
               className={cn(
                  "sm:px-8 flex flex-col text-center max-w-[350px] sm:max-w-[unset] sm:text-start space-y-2 sm:space-y-3 sm:w-3/5 animate__animated",
                  animations.heading
               )}
            >
               <span className="font-semibold opacity-85">
                  {configs.top_heading}
               </span>
               <h2 className="text-3xl md:text-5xl font-bold">
                  {configs.heading}
               </h2>
               <span className="opacity-85">{configs.description}</span>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 sm:pr-10">
               <div className="flex flex-col space-y-8">
                  {configs.contacts.map((contact) => (
                     <div
                        className={cn(
                           "flex flex-col sm:flex-row items-center space-y-1 sm:items-start animate__animated",
                           animations.contacts
                        )}
                        key={contact.name}
                     >
                        <Image
                           src={contact.icon}
                           alt="icon"
                           width={40}
                           height={40}
                           className="sm:p-2 sm:mr-1.5 mb-auto w-12 sm:w-10 filter-none dark:invert"
                        />
                        <div className="flex flex-col">
                           <h3 className="px-1 sm:pt-2 pb-0 font-bold text-xl sm:text-lg text-center sm:text-start">
                              {contact.name}
                           </h3>
                           <Link
                              href={contact.href}
                              className="underline font-semibold opacity-85 p-1 pt-0"
                           >
                              {contact.description}
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div
            className={cn(
               "container w-full animate__animated",
               animations.contact_form
            )}
         >
            <div className="pb-16 sm:pb-32 px-0 xs:px-5 sm:px-10 flex space-x-5 lg:space-x-8 w-full">
               <div className="w-full md:w-2/3">
                  <ContactCard config={configs.contact_form} />
               </div>
               <Image
                  src={configs.image}
                  alt="equire-image"
                  width={200}
                  height={200}
                  className="object-cover w-1/3 rounded-lg hidden md:block"
               />
            </div>
         </div>
      </div>
   );
};

export default Contact;
