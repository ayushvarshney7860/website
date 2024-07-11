"use client";

import CountUp, { useCountUp } from "react-countup";

function AnimateNumber({ number }: { number: number }) {
   useCountUp({
      ref: "counter",
      end: number,
      enableScrollSpy: true,
      scrollSpyDelay: 1000,
   });

   return (
      <CountUp
         end={number}
         enableScrollSpy
         className="py-5 text-5xl lg:text-7xl font-bold"
      />
   );
}

export default AnimateNumber;
