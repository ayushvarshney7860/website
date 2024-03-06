import { ServicePageConfig } from "@/types";

const config: ServicePageConfig = {
   heading: "Our Services",
   align_text_in_opposite_directions: false,
   services: [
      {
         title: "Wedding Shoots",
         description:
            "Make your dream destination wedding a reality with our specialized services. Whether you're planning a serene beach wedding or a royal palace celebration, our team is equipped to travel anywhere to capture the magic of your destination wedding.",
         image: "/assets/DSC01316xz.jpg",
         image_strip: [
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
         ],
      },
      {
         title: "Pre-Wedding Shoots",
         description:
            "Celebrate the journey to your big day with a pre-wedding photoshoot. Choose from picturesque locations and let our photographers capture your love in a more intimate setting. The result is a collection of stunning images that add a personal touch to your wedding story.",
         image: "/assets/pre/pre wedding main.webp",
         image_strip: [
            "/assets/pre/b (1).webp",
            "/assets/pre/b (2).webp",
            "/assets/pre/b (3).webp",
            "/assets/pre/b (4).webp",
            "/assets/pre/b (5).webp",
            "/assets/pre/b (6).webp",
            "/assets/pre/b (7).webp",
            "/assets/pre/b (8).webp",
            "/assets/pre/b (9).webp",
            "/assets/pre/9.webp",
         ],
      },
      {
         title: "Album Design and Printing",
         description:
            "Transform your memories into tangible treasures with our expertly designed wedding albums. Our team crafts personalized albums that showcase the beauty and emotion of your wedding day, creating a timeless keepsake for you and your loved ones.",
         image: "/assets/dummy.jpg",
         image_strip: [
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
            "/assets/dummy.jpg",
            "/assets/something.jpg",
         ],
      },
   ],
   check_out_btn_text: "Check out Our Work",
   check_out_btn_href: "/our-work",
};

export default config;
