"use client";

import { globalAnimations } from "@/app/config/animation-config";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AnimateOnScroll = ({
   children,
   animateIn = "animate__fadeInLeft",
   animateOut = "",
   animateOnce = false,
   className = "",
}: {
   children: React.ReactNode;
   animateIn?: string;
   animateOut?: string;
   animateOnce?: boolean;
   className?: string;
}) => {
   return (
      <AnimationOnScroll
         animateIn={animateIn}
         animateOut={animateOut || globalAnimations.animateOut}
         animateOnce={animateOnce || globalAnimations.animateOnce}
         className={className}
         animatePreScroll={true}
      >
         {children}
      </AnimationOnScroll>
   );
};

export default AnimateOnScroll;
