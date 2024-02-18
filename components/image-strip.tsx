"use client";

import { globalAnimations } from "@/app/config/animation-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageStrip = ({ images }: { images: string[] }) => {
   return (
      <div
         className={cn(
            "mt-16 lg:mt-0 lg:mx-10 animate__animated",
            globalAnimations.image_strip.animation
         )}
      >
         <Carousel
            plugins={[
               Autoplay({
                  delay: globalAnimations.image_strip.delay,
               }),
            ]}
            opts={{
               loop: globalAnimations.image_strip.loop,
            }}
         >
            <CarouselContent>
               {images.map((image, index) => (
                  <CarouselItem className="basis-1/10 pl-1" key={index}>
                     <Image
                        src={image}
                        alt="image"
                        key={index}
                        height={300}
                        width={300}
                        className="h-32 w-32 lg:h-40 lg:w-40 object-cover aspect-square rounded"
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
};

export default ImageStrip;
