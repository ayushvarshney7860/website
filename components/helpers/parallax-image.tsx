"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const ParallaxImage = ({
   src,
   alt,
   width,
   height,
   className,
   parentClassName = "",
   translateY = [-20, 20],
   translateX = [0, 0],
}: {
   src: string;
   alt: string;
   height: number;
   width: number;
   className?: string;
   parentClassName?: string;
   translateY?: [number, number];
   translateX?: [number, number];
}) => {
   return (
         <Parallax
            translateY={translateY}
            translateX={translateX}
            className={parentClassName}
         >
            <Image
               src={src}
               alt={alt}
               height={height}
               width={width}
               className={className}
            />
         </Parallax>
   );
};

export default ParallaxImage;
