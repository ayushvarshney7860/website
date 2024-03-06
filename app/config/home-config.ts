import { Config } from "@/types";

const config: Config = {
   home: {
      featured_text: "YOUR STORY OUR LENSE",
      featured_description:
         "Welcome to HighPixelZone where we capture the moments you cherish.",
      featured_image: "/assets/home-landing/front.webp",
      image_strip: [
         "/assets/home-landing/1.webp",
         "/assets/home-landing/2.webp",
         "/assets/home-landing/3.jpg",
         "/assets/home-landing/4.jpg",
         "/assets/home-landing/5.jpg",
         "/assets/home-landing/6.jpg",
         "/assets/home-landing/7.jpg",
         "/assets/home-landing/8.jpg",
         "/assets/home-landing/9.jpg",
         "/assets/home-landing/10.jpg",
         "/assets/home-landing/5.jpg",
         "/assets/home-landing/6.jpg",
         "/assets/home-landing/7.jpg",
         "/assets/home-landing/8.jpg",
         "/assets/home-landing/9.jpg",
         "/assets/home-landing/10.jpg",
      ],
   },
   services: {
      top_heading: "",
      heading: "Your vision, Our expertise ",
      description:
         "From pre - wedding to maternity shoots, our team is dedicated towards capturing each moment with extreme dedication  to captivate the beauty of the magical moment of your life.",
      featured_video: "nvpWVVKFwl8",
      featured_title: "Videos to make it memorable",
      featured_description:
         "Services That We Provide.",
      services_details: [
         {
            title: "Pre-Wedding",
            description:
               "Pre Fun!!Let's capture your love story or arranged-love story with lights and laughter through our lense.. celebrate the little moments before the big day with our amazing pre wedding videos,reels & photographs",
            image: "/assets/14.webp",
         },
         {
            title: "The Big Big Dayy!!",
            description:
               "Love, laughter,fun & chaos all captured in a single frame,from smiles of happiness to tears of separation we'll  have it all covered through our camera just for you to cherish each moment.",
            image: "/assets/15.webp",
         },
         {
            title: "Maternity Shoot  ",
            description:
               "As the love blooms & the adventures begin..creating a miracle who's everyone's 1st priority, for morning sickness to maternity glow we'll capture it all for you to cherish",
            image: "/assets/16.webp",
         },
      ],
      know_more_btn_text: "Know More",
      know_more_btn_href: "/services"
   },
   about: {
      heading: "Why Choose Us ?",
      image: "/assets/2K4A7083.jpg",
      features: [
         {
            title: "Passion for Perfection",
            description:
               "Our team of skilled photographers is driven by a passion for capturing the essence of love. We believe in telling your unique story through the lens, ensuring that every photograph reflects the genuine emotions and joy of your special day.",
         },
         {
            title: "Experienced Professionals",
            description:
               "With years of experience in photography, our team is well- versed in navigating through the intricacy of a wedding day, we seamlessly blend into the event,capturing every moment as the magic unfolds so that you can relish each one of them.",
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
            bold: 10,
            title: "Years of experience",
         },
         {
            bold: 10000,
            title: "Photoshoots",
         },
         {
            bold: 5000,
            title: "Happy Customers",
         },
      ],
   },
   testimonial: {
      heading: "Testimonials",
      sub_heading: "50+ Satisfied Customers",
      testimonials: [
         {
            stars: 4,
            description:
               "The work done by these guys are commendable. They have awesome photography and cinematography skills. Most and must recommended by me. They are doing great work and I hope they will be on top of everyone.",
            imageUrl: "/assets/2K4A7132.webp",
            name: "Shubham Varshney",
            date: "Feb 2024",
         },{
            stars: 4.5,
            description:
               "Best photography n they captured my special moment most beautifully....I luv itt .....",
            imageUrl: "/assets/0V8A7351-min.jpg",
            name: "Shreya Chandra",
            date: "January 2024",
         },
         {
            stars: 4.5,
            description:
               "Great teams comes with the great management. Amazing work by them. Starting from the booking, pre discussions, covering the event, then post delivery, all was so easy with them. Got amazing pictures and album is so cherishing. 10/10✨",
            imageUrl: "/assets/dummy.jpg",
            name: "Akash Verma",
            date: "January 2024",
         },
         {
            stars: 4.5,
            description:
               "The team is very professional and knowledgeable. Our wedding photos came out really good and the videos were also very professionally edited. The deliverables were on time. They have many options for wedding album as well. We found the package value for money.",
            imageUrl: "/assets/dummy.jpg",
            name: "Manas Gupta",
            date: "Dec 2023",
         },
         {
            stars: 4.5,
            description:
               "Had a wonderful experience High Pixel Zone, The team is exceptionally professional and they have handled all the requests wonderfully. All the photographers are absolutely professional , specially AV and his team. Thankyou for the wonderful experience!",
            imageUrl: "/assets/dummy.jpg",
            name: "Lalit Kumar",
            date: "Feb 2023",
         },
      ],
   },
   getInTouch: {
      top_heading: "Capturing your story through our lens",
      heading: "Get in Touch",
      description:
         "We would love to hear from you, Contact us for any inquiries or bookings",
      image: "/assets/enquire.jpg",
      contacts: [
         {
            name: "Email",
            icon: "/assets/icons/envelope.svg",
            description: "highpixelzone1@gmail.com",
            href: "mailto:highpixelzone1@gmail.com",
         },
         {
            name: "Phone",
            icon: "/assets/icons/phone.svg",
            description: "9118688337, 9369720710",
            href: "tel:9118688337",
         },
         {
            name: "Office",
            icon: "/assets/icons/location-pin.svg",
            description: "Rajajipuram, Lucknow",
            href: "https://maps.app.goo.gl/1sd3H19MEk9Ed2qRA"
         },
      ],
      contact_form: {
         heading: "Enquire About Us",
         description: "We would love to hear from you!",
         submit_button: "Submit",
         formAction:
            "https://docs.google.com/forms/d/e/1FAIpQLScwlWjFeM9aERDHRLK7delArA7Yn133gta5sEwDS1ydOYkELQ/formResponse",
         submission_text: "Your enquiry has been sent.",
         form_fields: {
            name: "entry.100873565",
            email: "emailAddress",
            phone: "entry.1894660412",
            message: "entry.46392351",
         },
      },
   },
};

export default config;
