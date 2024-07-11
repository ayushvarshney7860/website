"use client";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialAnimationConfig, TestimonialConfig } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import AnimateOnScroll from "../helpers/AnimateOnScroll";

const Stars = ({ stars }: { stars: number }) => {
   if (Math.floor(stars) !== stars)
      return (
         <>
            {Array.from(Array(Math.floor(stars)).keys()).map((n) => (
               <Image
                  src="/assets/icons/star-fill.svg"
                  alt="star"
                  height={40}
                  width={40}
                  key={n}
               />
            ))}
            <Image
               src="/assets/icons/star-lefthalf.svg"
               alt="star"
               height={40}
               width={40}
            />
            {Array.from(Array(Math.floor(5 - stars)).keys()).map((n) => (
               <Image
                  src="/assets/icons/star-outline.svg"
                  alt="star"
                  height={40}
                  width={40}
                  key={n}
               />
            ))}
         </>
      );
   else
      return (
         <>
            {Array.from(Array(stars).keys()).map((n) => (
               <Image
                  src="/assets/icons/star-fill.svg"
                  alt="star"
                  height={40}
                  width={40}
                  key={n}
               />
            ))}
            {Array.from(Array(5 - stars).keys()).map((n) => (
               <Image
                  src="/assets/icons/star-outline.svg"
                  alt="star"
                  height={40}
                  width={40}
                  key={n}
               />
            ))}
         </>
      );
};

const Testimonial = ({
   config,
   animations,
}: {
   config: TestimonialConfig;
   animations: TestimonialAnimationConfig;
}) => {
   return (
      <>
         <h2 className="text-3xl sm:text-5xl font-bold text-center pt-16 sm:pt-20">
            {config.heading} <br />
            <span className="font-semibold text-xl sm:text-3xl">
               {config.sub_heading}
            </span>
         </h2>
         <AnimateOnScroll
            animateIn={animations.testimonials}
            className="w-full container pb-24 sm:pb-40 pt-16 sm:pt-24 px-10 flex lg:space-x-24 items-center justify-center relative"
         >
            <Carousel
               plugins={[
                  Autoplay({
                     delay: animations.autoplay.delay,
                  }),
               ]}
               opts={{
                  loop: animations.autoplay.loop,
               }}
            >
               <CarouselContent>
                  {config.testimonials.map((testimonial) => (
                     <CarouselItem key={testimonial.date}>
                        <div className="flex flex-col space-y-5 items-center">
                           <div className="flex items-center space-x-0.5 mix-blend-multiply text-foreground">
                              <Stars stars={testimonial.stars} />
                           </div>
                           <p className="font-bold text-sm sm:text-base md:text-lg text-center mx-auto max-w-[75vw] xs:max-w-[300px] sm:max-w-[400px] md:max-w-[550px] xl:max-w-[700px]">
                              {testimonial.description}
                           </p>
                           <div className="flex space-x-3">
                              <Image
                                 src={testimonial.imageUrl}
                                 alt="client-image"
                                 width={200}
                                 height={200}
                                 className="rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-cover"
                              />
                              <div className="flex flex-col justify-center">
                                 <span className="font-semibold opacity-85 text-base sm:text-lg">
                                    {testimonial.name}
                                 </span>
                                 <span className="opacity-85 text-xs sm:text-sm">
                                    {testimonial.date}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="hidden xs:inline-flex ml-12 sm:ml-8 md:ml-16" />
               <CarouselNext className="hidden xs:inline-flex mr-12 sm:mr-8 md:mr-16" />
            </Carousel>
         </AnimateOnScroll>
      </>
   );
};

export default Testimonial;
