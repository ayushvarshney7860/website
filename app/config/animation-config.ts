import { AnimationConfig, GlobalAnimationConfig } from "@/types";

const animation_config: AnimationConfig = {
   home: {
      featured_text: "animate__fadeInRight",
      featured_image: "animate__fadeInRight",
   },
   services: {
      featured_card: "animate__fadeIn",
      service_card: "animate__fadeInUp",
   },
   about: {
      about_text: "animate__slideInLeft",
      about_image: "animate__fadeInRight",
   },
   experience: {
      banner: "animate__fadeIn",
   },
   testimonial: {
      testimonials: "animate__fadeInUp",
      autoplay: {
         loop: true,
         delay: 5000,
      },
   },
   contact: {
      heading: "animate__fadeInLeft",
      contacts: "animate__fadeInRight",
      contact_form: "animate__fadeInUp",
   },
   about_landing_page: {
      about_text: "animate__fadeInRight",
      about_image: "animate__fadeInRight",
   },
   about_history_and_mission: {
      history_text: "animate__fadeInLeft",
      mission_text: "animate__fadeInRight",
   },
   service_page: {
      heading: "animate__fadeInDown",
      left_image_animation: "animate__fadeInLeft",
      right_image_animation: "animate__fadeInRight",
      left_text_animation: "animate__fadeInRight",
      right_text_animation: "animate__fadeInLeft",
   },
   our_work_page: {
      heading: "animate__fadeInDown",
      tabs: "animate__fadeInDown",
   },
};

export const globalAnimations: GlobalAnimationConfig = {
   animateOnce: true,
   animateOut: "",
   image_strip: {
      animation: "animate__fadeInUp",
      left_to_right: false,
   },
};

export default animation_config;
