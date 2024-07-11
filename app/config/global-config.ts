import { GlobalConfig } from "@/types";

const global_config: GlobalConfig = {
   book_btn_text: "Book",
   book_btn_href: "/contact",
   learn_more_btn_text: "Learn More",
   learn_more_btn_href: "/services",
   navbar: {
      book_btn_href: "/contact",
      title: "",
      logo: "/logo.png",
      invert_logo_on_dark: true,
      routes: [
         {
            label: "Home",
            href: "/",
         },
         {
            label: "About us",
            href: "/about",
         },
         {
            label: "Services",
            href: "/services",
         },
         {
            label: "Our Work",
            href: "/our-work",
         },
         {
            label: "Contact Us",
            href: "/contact",
         },
      ],
   },
   social: {
      links: [
         {
            icon: "/assets/icons/whatsapp.svg",
            link: "http://wa.me/9118688337",
         },
         {
            icon: "/assets/icons/telephone.svg",
            link: "tel:9118688337",
         },
         {
            icon: "/assets/icons/instagram.svg",
            link: "https://www.instagram.com/highpixelzone/",
         },
         {
            icon: "/assets/icons/youtube.svg",
            link: "https://www.youtube.com/@highpixelzone4874",
         },
         {
            icon: "/assets/icons/gmail.svg",
            link: "mailto:ayush.v7860@gmail.com",
         },
      ],
   },
   footer: {
      title: "",
      logo: "/logo.png",
      invert_logo_on_dark: true,
      links: [
         {
            name: "Home",
            href: "/",
         },
         {
            name: "About Us",
            href: "/about",
         },
         {
            name: "Services",
            href: "/services",
         },
         {
            name: "Our Works",
            href: "/our-work",
         },
         {
            name: "Contact Us",
            href: "/contact",
         },
      ],
      privacy_policy: "/privacy-policy",
      terms_and_condition: "/terms-and-conditions",
   },
};

export default global_config;
