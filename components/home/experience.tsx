import { ExpConfig, ExperienceAnimationConfig } from "@/types";
import AnimateOnScroll from "../helpers/AnimateOnScroll";
import AnimateNumber from "../helpers/animate-numbers";

const Experience = ({
   config,
   animations,
}: {
   config: ExpConfig;
   animations: ExperienceAnimationConfig;
}) => {
   return (
      <AnimateOnScroll
         animateIn={animations.banner}
         className="container mb-10 pt-10 pb-20 md:px-16 flex flex-col items-center gap-16 md:flex-row justify-between md:items-start bg-secondary rounded-lg"
      >
         {config.exp.map((e) => (
            <div
               className="flex flex-col items-center justify-center text-center"
               key={e.title}
            >
               <span className="md:pt-2 -mb-5 text-[8px] text-base">Over</span>
               <AnimateNumber number={e.bold} />
               <span className="-m-5 text-[8px] text-lg font-semibold">
                  {e.title}
               </span>
            </div>
         ))}
      </AnimateOnScroll>
   );
};

export default Experience;
