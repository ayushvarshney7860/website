"use client";

import { Key, useState } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import Image from "next/image";

const ImageGallery = ({ dividedImages }: { dividedImages: string[][] }) => {
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);

   const allImages = dividedImages.flat();
   return (
      <>
         {dividedImages.map((images, colIndex) => (
            <div className="flex flex-col w-full gap-1" key={colIndex}>
               {images.map((image: string, index: Key | null | undefined) => (
                  <Image
                     src={image}
                     alt={"sample-image"}
                     height={500}
                     width={500}
                     className="hover:scale-105 transition-all rounded w-full"
                     key={index}
                     onClick={() => {
                        setOpen(true);
                        setIndex(allImages.indexOf(image));
                     }}
                  />
               ))}
            </div>
         ))}
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
                     {allImages.map((image, index) => (
                        <CarouselItem
                           className="h-full pl-0 w-full mx-auto flex items-center"
                           key={index}
                        >
                           <Image
                              src={image}
                              alt={"sample-image"}
                              height={1000}
                              width={1000}
                              key={index}
                              className="transition-all rounded max-h-full w-full object-contain my-auto"
                           />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>
            </DrawerContent>
         </Drawer>
      </>
   );
};

export default ImageGallery;
