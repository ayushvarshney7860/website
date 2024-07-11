import Image from "next/image";
import AnimateOnScroll from "../helpers/AnimateOnScroll";

const ServiceCard = ({
   title,
   description,
   image,
   animation,
}: {
   title: string;
   description: string;
   image: string;
   animation: string;
}) => {
   return (
      <AnimateOnScroll animateIn={animation}>
         <div className="flex flex-col space-y-2 sm:space-y-5 items-center text-center py-3 max-w-[400px] sm:max-w-[250px] sm:px-2 lg:max-w-[300px] xl:max-w-[380px]">
            <Image
               src={image}
               height={500}
               width={500}
               alt="something"
               className="object-cover rounded"
            />
            <h2 className="text-lg lg:text-3xl font-bold max-w-[95%]">
               {title}
            </h2>
            <p className="text-sm lg:text-lg opacity-75 max-w-[95%]">
               {description}
            </p>
         </div>
      </AnimateOnScroll>
   );
};

export default ServiceCard;
