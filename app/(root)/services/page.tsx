import animation_config from "@/app/config/animation-config";
import config from "@/app/config/service-config";
import BookBtn from "@/components/book-btn";
import AnimateOnScroll from "@/components/helpers/AnimateOnScroll";
import ParallaxImage from "@/components/helpers/parallax-image";
import ImageStrip from "@/components/image-strip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Services = () => {
   const animations = animation_config.service_page;
   const AnimateOrNot = ({
      children,
      index,
      className,
      animateIn = "",
   }: {
      children: React.ReactNode;
      index: number;
      className: string;
      animateIn?: string;
   }) => {
      return index === 0 ? (
         <div className={cn(className, "animate__animated", animateIn)}>
            {children}
         </div>
      ) : (
         <AnimateOnScroll animateIn={animateIn} className={className}>
            {children}
         </AnimateOnScroll>
      );
   };
   return (
      <div className="lg:container !px-0 overflow-hidden">
         <h1
            className={cn(
               "text-5xl xs:text-6xl sm:text-7xl font-bold text-center mt-16 mb-10 lg:-mb-10 animate__animated",
               animations.heading
            )}
         >
            Our Services
         </h1>
         {config.services.map((service, index) => (
            <div className="relative pt-24 lg:pb-24" key={index}>
               <div
                  className={cn(
                     "w-full container pb-5 px-10 flex lg:gap-7 items-center",
                     index & 1 && "lg:flex-row-reverse"
                  )}
                  key={index}
               >
                  <AnimateOrNot
                     animateIn={
                        index & 1
                           ? animations.right_text_animation
                           : animations.left_text_animation
                     }
                     className={cn(
                        "flex flex-col space-y-7 sm:w-4/5 lg:w-3/5 z-10 animate__animated lg:delay-500",
                        config.align_text_in_opposite_directions &&
                           index & 1 &&
                           "lg:items-end lg:text-end"
                     )}
                     index={index}
                  >
                     <h2 className="text-4xl xs:text-5xl font-semibold">
                        {service.title}
                     </h2>
                     <p className="text-base xs:text-xl sm:text-2xl lg:text-xl opacity-100 font-semibold">
                        {service.description}
                     </p>
                     <div className="flex space-x-3 sm:space-x-6">
                        <BookBtn />
                        <Link href={config.check_out_btn_href}>
                           <Button
                              className="xs:text-lg xs:p-7"
                              variant={"outline"}
                           >
                              {config.check_out_btn_text}
                           </Button>
                        </Link>
                     </div>
                  </AnimateOrNot>
                  <AnimateOrNot
                     animateIn={
                        index & 1
                           ? animations.left_image_animation
                           : animations.right_image_animation
                     }
                     className={cn(
                        "lg:static absolute top-0 left-0 mx-0 -z-10 lg:z-10 overflow-hidden animate__animated h-full lg:h-[unset]"
                     )}
                     index={index}
                  >
                     <ParallaxImage
                        src={service.image}
                        alt="photography image"
                        height={500}
                        width={500}
                        parentClassName="h-full lg:h-[unset]"
                        className="w-screen h-full lg:w-[unset] lg:h-[unset] object-cover rounded-none opacity-40 lg:opacity-100"
                     />
                  </AnimateOrNot>
               </div>
               <ImageStrip images={service.image_strip} />
            </div>
         ))}
      </div>
   );
};

export default Services;
