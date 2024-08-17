import { cn } from "@/lib/utils";
import ParallaxImage from "../helpers/parallax-image";
import {
   AboutLandingPageAnimationConfig,
   AboutLandingPageConfig,
} from "@/types";
import BookBtn from "../book-btn";
import LearnMoreBtn from "../learn-more-btn";

const AboutLandingPage = ({
   config,
   animations,
}: {
   config: AboutLandingPageConfig;
   animations: AboutLandingPageAnimationConfig;
}) => {
   return (
      <div className="w-full min-h-[calc(100vh-64px)] container overflow-hidden pt-20 py-28 px-10 flex lg:space-x-7 items-center relative">
         <div
            className={cn(
               "flex flex-col space-y-7 w-full sm:w-3/5 z-10 animate__animated lg:delay-500",
               animations.about_text
            )}
         >
            <h1 className="text-5xl xs:text-6xl font-bold">
               {config.about_text}
            </h1>
            <p className="text-sm xs:text-xl opacity-85 font-semibold">
               {config.about_description}
            </p>
            <div className="flex space-x-3 sm:space-x-6">
               <BookBtn />
               <LearnMoreBtn outline />
            </div>
         </div>
         <div
            className={cn(
               "lg:static absolute top-0 left-0 mx-0 -z-10 lg:z-10 overflow-hidden animate__animated h-full lg:h-[unset]",
               animations.about_image
            )}
         >
            <ParallaxImage
               src={config.image}
               alt="photography image"
               height={500}
               width={500}
               parentClassName="h-full lg:h-[unset]"
               className="w-screen h-full lg:w-[unset] lg:h-[unset] object-cover rounded-none opacity-40 lg:opacity-100"
            />
         </div>
      </div>
   );
};

export default AboutLandingPage;
