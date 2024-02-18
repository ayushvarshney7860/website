"use client";

import { globalAnimations } from "@/app/config/animation-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const ImageStrip = ({ images }: { images: string[] }) => {
   return (
      <div
         className={cn(
            "mt-16 lg:mt-0 lg:mx-10 overflow-hidden animate__animated",
            globalAnimations.image_strip.animation
         )}
      >
         <Parallax
            translateX={
               globalAnimations.image_strip.left_to_right ? [-5, 5] : [5, -5]
            }
            className="flex justify-center gap-1 container"
         >
            {images.map((image, index) => (
               <Image
                  src={image}
                  alt="image"
                  key={index}
                  height={300}
                  width={300}
                  className="h-32 w-32 lg:h-40 lg:w-40 object-cover"
               />
            ))}
         </Parallax>
      </div>
   );
};

export default ImageStrip;
