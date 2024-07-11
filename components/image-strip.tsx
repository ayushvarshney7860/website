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
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";

const ImageStrip = ({ images }: { images: string[] }) => {
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);
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
                        onClick={() => {
                           setOpen(true);
                           setIndex(index);
                        }}
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
         <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
            <DrawerContent className="h-[90%]">
               <Carousel
                  opts={{
                     startIndex: index,
                     loop: true,
                  }}
                  className="h-[calc(100%-24px)] pt-4 w-full"
               >
                  <CarouselContent className="items-center h-full">
                     {images.map((image, index) => (
                        <CarouselItem
                           className="h-full pl-0 w-full mx-auto flex items-center"
                           key={index}
                        >
                           <Image
                              src={image}
                              alt={"sample-image"}
                              height={1500}
                              width={1500}
                              key={index}
                              className="transition-all rounded max-h-full w-full object-contain my-auto"
                           />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>
            </DrawerContent>
         </Drawer>
      </div>
   );
};

export default ImageStrip;
