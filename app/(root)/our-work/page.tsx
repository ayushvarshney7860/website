import animation_config from "@/app/config/animation-config";
import config from "@/app/config/our-works-config";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import sizeOf from "image-size";
import { Key } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";

const OurWork = () => {
   function divideImages(imagePaths: string[]) {
      let colHeights: [number, number, number] = [0, 0, 0];
      const columnImages: [string[], string[], string[]] = [[], [], []];

      imagePaths.forEach((path) => {
         let shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));
         columnImages[shortestColumnIndex].push(path);

         let img = sizeOf(process.cwd() + "/public" + path);
         colHeights[shortestColumnIndex] += img.height! / img.width!;
      });

      return columnImages;
   }
   return (
      <div className="container pb-20">
         <h1
            className={cn(
               "text-5xl xs:text-6xl sm:text-7xl font-bold text-center mt-16 mb-7 animate__animated",
               animation_config.our_work_page.heading
            )}
         >
            {config.heading}
         </h1>
         <Tabs defaultValue={config.default_category}>
            <TabsList
               className={cn(
                  "bg-background pb-7 flex flex-wrap justify-center h-fit animate__animated",
                  animation_config.our_work_page.tabs
               )}
            >
               {config.image_categories.map((category) => (
                  <TabsTrigger value={category.name} key={category.name}>
                     {category.name}
                  </TabsTrigger>
               ))}
               <TabsTrigger
                  value="Videos"
                  className="border-primary text-primary"
               >
                  {config.video_category}
               </TabsTrigger>
            </TabsList>
            {config.image_categories.map((category) => (
               <TabsContent
                  value={category.name}
                  className="grid grid-cols-3 gap-1"
                  key={category.name}
               >
                  {divideImages(category.images).map((images, index) => (
                     <div className="flex flex-col w-full gap-1" key={index}>
                        {images.map(
                           (image: string, index: Key | null | undefined) => (
                              <Drawer key={index}>
                                 <DrawerTrigger>
                                    <Image
                                       src={image}
                                       alt={"sample-image"}
                                       height={500}
                                       width={500}
                                       className="hover:scale-105 transition-all rounded w-full"
                                    />
                                 </DrawerTrigger>
                                 <DrawerContent className="h-[90%]">
                                    <Carousel
                                       opts={{
                                          startIndex:
                                             category.images.indexOf(image),
                                       }}
                                       className="h-[calc(100%-24px)] pt-4 w-full"
                                    >
                                       <CarouselContent className="items-center h-full">
                                          {category.images.map((image, index) => (
                                             <CarouselItem className="h-full pl-0 w-full mx-auto flex items-center" key={index}>
                                                <Image
                                                   src={image}
                                                   alt={"sample-image"}
                                                   height={1500}
                                                   width={1500}
                                                   key={index}
                                                   className="transition-all rounded max-h-full w-full object-contain my-auto"
                                                />
                                             </CarouselItem>
                                          ))}
                                       </CarouselContent>
                                    </Carousel>
                                 </DrawerContent>
                              </Drawer>
                           )
                        )}
                     </div>
                  ))}
               </TabsContent>
            ))}
            <TabsContent
               value="Videos"
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
            >
               {config.videos.map((video, index) => (
                  <Drawer key={index}>
                     <DrawerTrigger>
                        <div className="relative border rounded group">
                           <Image
                              src={
                                 "https://img.youtube.com/vi/" +
                                 video +
                                 "/hqdefault.jpg"
                              }
                              alt={"sample-image"}
                              height={300}
                              width={300}
                              key={index}
                              className="transition-all rounded w-full object-contain my-auto group-hover:scale-105"
                           />
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 transition-all">
                              <PlayCircle className="h-16 w-16 invert dark:filter-none" />
                           </div>
                        </div>
                     </DrawerTrigger>
                     <DrawerContent className="h-[90%]">
                        <iframe
                           src={`https://www.youtube.com/embed/${video}`}
                           title="YouTube video player"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen
                           className="w-full h-[calc(100%-48px)] my-auto mx-auto"
                           key={index}
                        />
                     </DrawerContent>
                  </Drawer>
               ))}
            </TabsContent>
         </Tabs>
      </div>
   );
};

export default OurWork;
