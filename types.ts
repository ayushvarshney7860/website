// ------------------- Home Page Configs --------------------
export interface HomeConfig {
   featured_text: string;
   featured_description: string;
   featured_image: string;
   image_strip: string[];
}

export interface ServiceConfig {
   top_heading: string;
   heading: string;
   description: string;
   featured_video: string;
   featured_title: string;
   featured_description: string;
   services_details: { title: string; description: string; image: string }[];
   know_more_btn_text: string;
   know_more_btn_href: string;
}

export interface AboutConfig {
   heading: string;
   image: string;
   features: { title: string; description: string }[];
   image_strip: string[];
}

export interface TestimonialConfig {
   heading: string;
   sub_heading: string;
   testimonials: {
      stars: number;
      description: string;
      imageUrl: string;
      name: string;
      date: string;
   }[];
}

export interface ContactFormConfig {
   heading: string;
   description: string;
   submit_button: string;
   formAction: string;
   submission_text: string;
   form_fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
   };
}
export interface ContactConfig {
   top_heading: string;
   heading: string;
   description: string;
   image: string;
   contacts: {
      name: string;
      icon: string;
      description: string;
      href: string;
   }[];
   contact_form: ContactFormConfig;
}

export interface ExpConfig {
   exp: { bold: number; title: string }[];
}

export interface Config {
   home: HomeConfig;
   services: ServiceConfig;
   about: AboutConfig;
   testimonial: TestimonialConfig;
   getInTouch: ContactConfig;
   experience: ExpConfig;
}

// ----------------------- About Page Configs -------------------------

export interface AboutLandingPageConfig {
   about_text: string;
   about_description: string;
   image: string;
}

export interface AboutHistoryAndMissionConfig {
   history_text: string;
   history_description: string;
   mission_text: string;
   mission_description: string;
   check_out_btn_text: string;
   check_out_btn_href: string;
}

export interface AboutPageConfig {
   landing: AboutLandingPageConfig;
   history_and_mission: AboutHistoryAndMissionConfig;
}

// ------------------------ Service Page Configs -----------------------
export interface ServicePageConfig {
   heading: string;
   align_text_in_opposite_directions: boolean;
   services: {
      title: string;
      description: string;
      image: string;
      image_strip: string[];
   }[];
   check_out_btn_text: string;
   check_out_btn_href: string;
}

// ------------------------Our works page Configs ----------------------
export interface OurWorksPageConfig {
   heading: string;
   default_category: string;
   image_categories: { name: string; images: string[] }[];
   video_category: string;
   videos: string[];
}

// ------------------------ Global Components Configs ------------------

export interface NavbarConfig {
   book_btn_href: string;
   title: string;
   logo: string;
   invert_logo_on_dark: boolean;
   routes: {
      label: string;
      href: string;
   }[];
}

export interface SocialConfig {
   links: { icon: string; link: string }[];
}

export interface FooterConfig {
   title: string;
   logo: string;
   invert_logo_on_dark: boolean;
   links: { name: string; href: string }[];
   privacy_policy: string;
   terms_and_condition: string;
}

export interface GlobalConfig {
   book_btn_href: string;
   book_btn_text: string;
   learn_more_btn_href: string;
   learn_more_btn_text: string;
   navbar: NavbarConfig;
   social: SocialConfig;
   footer: FooterConfig;
}

// ----------------------- Animation Configs ---------------------

export interface HomeAnimationConfig {
   featured_text: string;
   featured_image: string;
}

export interface ServiceAnimationConfig {
   featured_card: string;
   service_card: string;
}

export interface AboutAnimationConfig {
   about_text: string;
   about_image: string;
}

export interface TestimonialAnimationConfig {
   testimonials: string;
   autoplay: {
      loop: boolean;
      delay: number;
   };
}

export interface ContactAnimationConfig {
   heading: string;
   contacts: string;
   contact_form: string;
}

export interface ExperienceAnimationConfig {
   banner: string;
}

export interface AboutLandingPageAnimationConfig {
   about_text: string;
   about_image: string;
}

export interface AboutHistoryAndMissionAnimationConfig {
   history_text: string;
   mission_text: string;
}

export interface ServicePageAnimationConfig {
   heading: string;
   left_image_animation: string;
   right_image_animation: string;
   left_text_animation: string;
   right_text_animation: string;
}

export interface OurWorkPageAnimationConfig {
   tabs: string;
   heading: string;
}

export interface GlobalAnimationConfig {
   animateOnce: boolean;
   animateOut: string;
   image_strip: {
      animation: string;
      delay: number;
      loop: boolean;
      left_to_right: boolean;
   };
}

export interface AnimationConfig {
   home: HomeAnimationConfig;
   services: ServiceAnimationConfig;
   about: AboutAnimationConfig;
   testimonial: TestimonialAnimationConfig;
   contact: ContactAnimationConfig;
   experience: ExperienceAnimationConfig;
   about_landing_page: AboutLandingPageAnimationConfig;
   about_history_and_mission: AboutHistoryAndMissionAnimationConfig;
   service_page: ServicePageAnimationConfig;
   our_work_page: OurWorkPageAnimationConfig;
}
