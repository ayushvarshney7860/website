import { Button } from "../ui/button";
import ParallaxImage from "../helpers/parallax-image";
import { HomeAnimationConfig, HomeConfig } from "@/types";
import { cn } from "@/lib/utils";
import ImageStrip from "../image-strip";
import BookBtn from "../book-btn";
import LearnMoreBtn from "../learn-more-btn";

const Hero = ({
   config,
   animations,
}: {
   config: HomeConfig;
   animations: HomeAnimationConfig;
}) => {
   return (
      <div className="relative pt-16 lg:pb-36">
         <main className="w-full container px-10 flex lg:space-x-7 py-24 lg:pt-0 lg:pb-5 items-center overflow-hidden">
            <div
               className={cn(
                  "flex flex-col space-y-7 w-3/5 z-10 animate__animated lg:delay-500",
                  animations.featured_text
               )}
            >
               <h1 className="text-5xl xs:text-7xl font-bold">
                  {config.featured_text}
               </h1>
               <div className="text-xl xs:text-2xl opacity-85 font-semibold">
                  {config.featured_description}
               </div>
               <div className="flex space-x-3 sm:space-x-6">
                  <BookBtn />
                  <LearnMoreBtn outline />
               </div>
            </div>
            <div
               className={cn(
                  "lg:static absolute top-0 left-0 mx-0 -z-10 lg:z-10 overflow-hidden animate__animated h-full lg:h-[unset]",
                  animations.featured_image
               )}
            >
               <ParallaxImage
                  src={config.featured_image}
                  alt="photography image"
                  height={500}
                  width={500}
                  parentClassName="h-full lg:h-[unset]"
                  className="w-screen h-full lg:w-[unset] lg:h-[unset] object-cover rounded-none opacity-40 lg:opacity-100"
               />
            </div>
         </main>
         <ImageStrip images={config.image_strip} />
      </div>
   );
};

export default Hero;
