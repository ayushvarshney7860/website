/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
            port: "3000",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "highpixelzone.com",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "img.youtube.com",
            port: "",
            pathname: "/vi/**",
         },
      ],
   },
};

export default nextConfig;
