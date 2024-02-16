import { ExpConfig, ExperienceAnimationConfig } from "@/types";
import AnimateOnScroll from "../helpers/AnimateOnScroll";

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
         className="container mb-10 py-10 md:px-16 flex flex-col items-center gap-16 md:flex-row justify-between md:items-start bg-secondary rounded-lg space-x-6"
      >
         {config.exp.map((e) => (
            <div
               className="flex flex-col items-center justify-center text-center"
               key={e.title}
            >
               <span className="text-5xl lg:text-7xl font-bold">{e.bold}</span>
               <span className="md:pt-2 text-[8px] text-base">{e.title}</span>
            </div>
         ))}
      </AnimateOnScroll>
   );
};

export default Experience;
