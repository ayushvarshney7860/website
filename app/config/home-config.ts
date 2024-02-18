import { Config } from "@/types";

const config: Config = {
   home: {
      featured_text: "Something Moments That Last A Lifetime",
      featured_description:
         "Welcome to our photography portfolio. Where every picture tells a story.",
      featured_image: "/assets/home-landing/something.jpg",
      image_strip: [
         "/assets/home-landing/1.jpg",
         "/assets/home-landing/2.jpg",
         "/assets/home-landing/3.jpg",
         "/assets/home-landing/4.jpg",
         "/assets/home-landing/5.jpg",
         "/assets/home-landing/6.jpg",
         "/assets/home-landing/7.jpg",
         "/assets/home-landing/8.jpg",
         "/assets/home-landing/9.jpg",
         "/assets/home-landing/10.jpg",
      ],
   },
   services: {
      top_heading: "Capturing",
      heading: "Unforgettable Moments through The Lens",
      description:
         "We offer a tange of photography services including weddings portraits and commercial Our team Of expenenced photographers is dedicated captunng the essence Of every moment ensunng that your memories are preserved for a lifetime.",
      featured_video: "nvpWVVKFwl8",
      featured_title: "Videos to make it Memorable",
      featured_description:
         "We offer a tange of photography services including weddings portraits and commercial Our team Of expenenced photographers is dedicated captunng the essence Of every moment ensunng that your memories are preserved for a lifetime.",
      services_details: [
         {
            title: "Weddings That Tell Your Love Story",
            description:
               "Our wedding services are capture the moments and emotions of your special day, creating a beautiful narrative that tells your Love story.",
            image: "/assets/dummy.jpg",
         },
         {
            title: "Weddings That Tell Your Love Storys",
            description:
               "Our wedding services are capture the moments and emotions of your special day, creating a beautiful narrative that tells your Love story.",
            image: "/assets/dummy.jpg",
         },
         {
            title: "Weddings That Tell Your Love Stories",
            description:
               "Our wedding services are capture the moments and emotions of your special day, creating a beautiful narrative that tells your Love story.",
            image: "/assets/dummy.jpg",
         },
      ],
      know_more_btn_text: "Know More",
      know_more_btn_href: "/services"
   },
   about: {
      heading: "About Us",
      image: "/assets/dummy.jpg",
      features: [
         {
            title: "Cutting-edge photography equipments",
            description:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos autem impedit tempora fugit? Dolorem ipsa explicabo ipsum laborum id.",
         },
         {
            title: "Unique and creative style",
            description:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos autem impedit tempora fugit? Dolorem ipsa explicabo ipsum laborum id.",
         },
         {
            title: "Special packages",
            description:
               " We recognize that each wedding is as unique as the couple it celebrates. That's why we offer personalized packages to suit your preferences and budget. From intimate ceremonies to grand celebrations, we have the perfect photography package for you..",
         },
      ],
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
   experience: {
      exp: [
         {
            bold: "10+",
            title: "Years of experience",
         },
         {
            bold: "100+",
            title: "Photoshoots",
         },
         {
            bold: "1500+",
            title: "Happy Customers",
         },
      ],
   },
   testimonial: {
      heading: "Testimonials",
      sub_heading: "50+ Satisfied Customers",
      testimonials: [
         {
            stars: 2.5,
            description:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati nobis quidem fugiat corporis commodi vitae, exercitationem mollitia iste eum ullam, minima harum consequuntur optio qui ea voluptate, nostrum libero totam saepe eos! Dolorem?",
            imageUrl: "/assets/dummy.jpg",
            name: "Arjun Varshney",
            date: "Feb 2024",
         },{
            stars: 2.5,
            description:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati nobis quidem fugiat corporis commodi vitae, exercitationem mollitia iste eum ullam, minima harum consequuntur optio qui ea voluptate, nostrum libero totam saepe eos! Dolorem?",
            imageUrl: "/assets/person.jpg",
            name: "Arjun Varshney",
            date: "Feb 2024",
         },
         {
            stars: 4.5,
            description:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati nobis quidem fugiat corporis commodi vitae, exercitationem mollitia iste eum ullam, minima harum consequuntur optio qui ea voluptate, nostrum libero totam saepe eos! Dolorem?",
            imageUrl: "/assets/dummy.jpg",
            name: "Arjun Varshney",
            date: "Mar 2024",
         },
         {
            stars: 4.5,
            description:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati nobis quidem fugiat corporis commodi vitae, exercitationem mollitia iste eum ullam, minima harum consequuntur optio qui ea voluptate, nostrum libero totam saepe eos! Dolorem?",
            imageUrl: "/assets/dummy.jpg",
            name: "Arjun Varshney",
            date: "Feb 2023",
         },
         {
            stars: 4.5,
            description:
               "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati nobis quidem fugiat corporis commodi vitae, exercitationem mollitia iste eum ullam, minima harum consequuntur optio qui ea voluptate, nostrum libero totam saepe eos! Dolorem?",
            imageUrl: "/assets/dummy.jpg",
            name: "Arjun Varshney",
            date: "Feb 2022",
         },
      ],
   },
   getInTouch: {
      top_heading: "Capturing Moments",
      heading: "Get in Touch",
      description:
         "We would love to hear from you, Contact us for any inquiries or bookings",
      image: "/assets/enquire.jpg",
      contacts: [
         {
            name: "Email",
            icon: "/assets/icons/envelope.svg",
            description: "something@something.com",
            href: "mailto:something@something.com",
         },
         {
            name: "Phone",
            icon: "/assets/icons/phone.svg",
            description: "1234567890",
            href: "tel:1234567890",
         },
         {
            name: "Office",
            icon: "/assets/icons/location-pin.svg",
            description: "Regional Science City",
            href: "https://maps.app.goo.gl/Ny32o2zsp6oq96RW9",
         },
      ],
      contact_form: {
         heading: "Enquire About Us",
         description: "We would love to hear from you!",
         submit_button: "Submit",
         formAction:
            "https://docs.google.com/forms/d/e/1FAIpQLSfKvYVRISRbvhrqDMjBXxEGS6UagqQP2BsMuMiHBPD5FuvOeA/formResponse",
         submission_text: "Your enquiry has been sent.",
         form_fields: {
            name: "entry.136349079",
            email: "emailAddress",
            phone: "entry.1362874737",
            message: "entry.816284549",
         },
      },
   },
};

export default config;
