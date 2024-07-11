import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import AnimateOnScroll from "../helpers/AnimateOnScroll";
import {
   AboutHistoryAndMissionAnimationConfig,
   AboutHistoryAndMissionConfig,
} from "@/types";
import Link from "next/link";

const HistoryAndMission = ({
   config,
   animations,
}: {
   config: AboutHistoryAndMissionConfig;
   animations: AboutHistoryAndMissionAnimationConfig;
}) => {
   return (
      <div className="w-full container py-16 px-10 flex flex-col items-center bg-background z-20">
         <div className="flex flex-col lg:flex-row items-center lg:justify-around space-y-10 lg:space-x-10">
            <AnimateOnScroll
               animateIn={animations.history_text}
               className="flex flex-col space-y-7 w-11/12 sm:w-4/5 lg:w-5/12 z-10 items-center"
            >
               <h1 className="text-5xl xs:text-6xl font-bold">
                  {config.history_text}
               </h1>
               <p className="text-sm xs:text-xl opacity-75 font-semibold text-center">
                  {config.history_description}
               </p>
            </AnimateOnScroll>
            <AnimateOnScroll
               animateIn={animations.mission_text}
               className="flex flex-col space-y-7 w-11/12 sm:w-4/5 lg:w-5/12 z-10 items-center"
            >
               <h1 className="text-5xl xs:text-6xl font-bold">
                  {config.mission_text}
               </h1>
               <p className="text-sm xs:text-xl opacity-75 font-semibold text-center">
                  {config.mission_description}
               </p>
            </AnimateOnScroll>
         </div>
         <div className="flex space-x-2 xs:space-x-6 mt-20">
            <Link href={config.check_out_btn_href}>
               <Button className="xs:text-lg xs:p-7">
                  {config.check_out_btn_text}
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default HistoryAndMission;
