import AnimateOnScroll from "../helpers/AnimateOnScroll";
import ParallaxImage from "../helpers/parallax-image";
import { AboutAnimationConfig, AboutConfig } from "@/types";
import ImageStrip from "../image-strip";

const About = ({
   config,
   animations,
   without_title = false,
}: {
   config: AboutConfig;
   animations: AboutAnimationConfig;
   without_title?: boolean;
}) => {
   return (
      <div className="relative pt-16 lg:pb-20 container !px-0 overflow-hidden">
         {!without_title && (
            <h2 className="text-3xl sm:text-5xl font-bold text-center sm:pt-24 z-20">
               {config.heading}
            </h2>
         )}
         <div className="w-full pb-20 lg:pb-5 pt-20 container overflow-hidden px-10 flex lg:space-x-24 items-start">
            <div className="flex flex-col space-y-7 w-full sm:w-3/4 md:w-3/5 z-0 lg:delay-300">
               <AnimateOnScroll animateIn={animations.about_text}>
                  <div className="flex flex-col space-y-10">
                     {config.features.map((feature) => (
                        <div
                           className="flex flex-col space-y-4"
                           key={feature.title}
                        >
                           <h2 className="text-2xl xl:text-4xl font-semibold">
                              {feature.title}
                           </h2>
                           <p className="text-sm lg:text-base opacity-85 font-semibold">
                              {feature.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </AnimateOnScroll>
            </div>
            <div className="lg:static absolute top-0 left-0 right-0 bottom-0 mx-0 -z-10 lg:z-10 overflow-hidden">
               <AnimateOnScroll
                  animateIn={animations.about_image}
                  className="h-full"
               >
                  <ParallaxImage
                     src={config.image}
                     alt="photography image"
                     height={500}
                     width={500}
                     className="w-screen h-full lg:w-[unset] lg:h-[unset] object-cover opacity-40 lg:opacity-100 rounded-none lg:rounded lg:animate-scale-down animate-fade-in"
                     parentClassName="h-full"
                  />
               </AnimateOnScroll>
            </div>
         </div>
         <ImageStrip images={config.image_strip} />
      </div>
   );
};

export default About;
