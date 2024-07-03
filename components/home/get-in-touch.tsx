import { ContactAnimationConfig, ContactConfig } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../helpers/AnimateOnScroll";
import ContactCard from "../cards/contact-card";

const GetInTouch = ({
   config,
   animations,
}: {
   config: ContactConfig;
   animations: ContactAnimationConfig;
}) => {
   return (
      <>
         <div className="w-full bg-[#f4f0ed] dark:bg-secondary container pb-16 pt-10 sm:pb-20 px-10 flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-8 lg:space-x-24 items-center justify-center relative">
            <AnimateOnScroll
               animateIn={animations.heading}
               className="sm:px-8 flex flex-col text-center max-w-[350px] sm:max-w-[unset] sm:text-start space-y-2 sm:space-y-3 sm:w-3/5"
            >
               <span className="font-semibold opacity-85">
                  {config.top_heading}
               </span>
               <h2 className="text-3xl md:text-5xl font-bold">
                  {config.heading}
               </h2>
               <span className="opacity-85">{config.description}</span>
            </AnimateOnScroll>
            <div className="flex flex-col w-full sm:w-2/5 sm:pr-10">
               <div className="flex flex-col space-y-8">
                  {config.contacts.map((contact) => (
                     <AnimateOnScroll
                        animateIn={animations.contacts}
                        className="flex flex-col sm:flex-row items-center space-y-1 sm:items-start"
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
                     </AnimateOnScroll>
                  ))}
               </div>
            </div>
         </div>
         <AnimateOnScroll
            animateIn={animations.contact_form}
            className="container w-full mt-10"
         >
            <div className="pb-16 sm:pb-32 px-0 xs:px-5 sm:px-10 flex space-x-5 lg:space-x-8 w-full items-center justify-center">
               <div className="w-full md:w-2/3">
                  <ContactCard config={config.contact_form}/>
               </div>
            </div>
         </AnimateOnScroll>
      </>
   );
};

export default GetInTouch;
