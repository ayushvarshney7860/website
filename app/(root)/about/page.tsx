import about_config from "@/app/config/about-config";
import animation_config from "@/app/config/animation-config";
import config from "@/app/config/home-config";
import HistoryAndMission from "@/components/about/history";
import AboutLandingPage from "@/components/about/landing";
import Experience from "@/components/home/experience";
import Services from "@/components/home/services-section";
import Testimonial from "@/components/home/testimonial";
import About from "@/components/home/about-section";

const AboutUs = () => {
   return (
      <div>
         <AboutLandingPage
            config={about_config.landing}
            animations={animation_config.about_landing_page}
         />
         <Experience
            config={config.experience}
            animations={animation_config.experience}
         />
         <HistoryAndMission
            config={about_config.history_and_mission}
            animations={animation_config.about_history_and_mission}
         />
         <About
            config={config.about}
            animations={animation_config.about}
            without_title
         />
         <Services
            config={config.services}
            animations={animation_config.services}
         />
         <Testimonial
            config={config.testimonial}
            animations={animation_config.testimonial}
         />
      </div>
   );
};

export default AboutUs;
