import { ChevronRight } from "lucide-react";
import ServiceCard from "../cards/service-card";
import { Button } from "../ui/button";
import { ServiceAnimationConfig, ServiceConfig } from "@/types";
import AnimateOnScroll from "../helpers/AnimateOnScroll";
import BookBtn from "../book-btn";
import Link from "next/link";

const Services = ({
   config,
   animations,
}: {
   config: ServiceConfig;
   animations: ServiceAnimationConfig;
}) => {
   return (
      <div className="w-full min-h-screen container pt-16 pb-24 px-10 flex flex-col space-y-3 md:space-y-12 items-center relative bg-background">
         <div className="flex flex-col space-y-4 items-center max-w-[700px]">
            <div className="font-semibold">{config.top_heading}</div>
            <h1 className="inline text-3xl sm:text-5xl font-bold text-center">
               {config.heading}
            </h1>
            <span className="text-center text-base sm:text-lg pt-3">
               {config.description}
            </span>
         </div>
         <div className="flex flex-col space-y-5 items-center">
            <AnimateOnScroll
               animateIn={animations.featured_card}
               className="hidden sm:block w-[80%]"
            >
               <div className="flex flex-col space-y-2 sm:space-y-4 items-center text-center py-3 w-full">
                  <iframe
                     src={
                        "https://www.youtube.com/embed/" + config.featured_video
                     }
                     title="HighPixelZone Video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                     className="object-cover rounded-lg aspect-video w-full h-full border"
                  ></iframe>
                  <h2 className="text-lg lg:text-3xl font-bold max-w-[95%]">
                     {config.featured_title}
                  </h2>
                  <div className="text-sm lg:text-lg opacity-75 max-w-[95%]">
                     {config.featured_description}
                  </div>
               </div>
            </AnimateOnScroll>
            <div className="flex flex-wrap md:space-x-5 pt-3 justify-center">
               {config.services_details.map((detail) => (
                  <ServiceCard
                     title={detail.title}
                     description={detail.description}
                     image={detail.image}
                     key={detail.title}
                     animation={animations.service_card}
                  />
               ))}
            </div>
         </div>
         <div className="flex items-center space-x-3 pt-5">
            <BookBtn outline />
            <Link href={config.know_more_btn_href}>
               <Button className="xs:text-lg xs:py-7" variant={"ghost"}>
                  {config.know_more_btn_text}
                  <ChevronRight className="ml-2 animate__animated animate__headShake animate__slower animate__infinite" />
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default Services;
