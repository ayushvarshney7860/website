import About from "@/components/home/about-section";
import GetInTouch from "@/components/home/get-in-touch";
import Hero from "@/components/home/hero-section";
import Services from "@/components/home/services-section";
import Testimonial from "@/components/home/testimonial";
import config from "../config/home-config";
import animation_config from "../config/animation-config";
import Experience from "@/components/home/experience";

export default function Home() {
   return (
      <div className="lg:container !px-0">
         <Hero config={config.home} animations={animation_config.home} />
         <Services
            config={config.services}
            animations={animation_config.services}
         />
         <About config={config.about} animations={animation_config.about} />
         <Experience
            config={config.experience}
            animations={animation_config.experience}
         />
         <Testimonial
            config={config.testimonial}
            animations={animation_config.testimonial}
         />
         <GetInTouch
            config={config.getInTouch}
            animations={animation_config.contact}
         />
      </div>
   );
}
