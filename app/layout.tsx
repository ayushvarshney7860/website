import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navbar";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";
import "animate.css/animate.min.css";
import NotTouch from "@/components/helpers/not-touch";
import Social from "@/components/social-buttons";
import Footer from "@/components/footer";
import global_config from "./config/global-config";
import { Toaster } from "@/components/ui/toaster";
import ParallaxProviders from "@/providers/paralla-provider";
import seo_config from "./config/seo-config";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
   metadataBase: new URL("https://highpixelzone.com"),
   alternates: {
      canonical: "/",
   },
   ...seo_config,
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={font.className}>
            <Toaster />
            <NotTouch>
               <AnimatedCursor
                  innerSize={8}
                  outerSize={35}
                  innerScale={1}
                  outerScale={2}
                  outerAlpha={0}
                  showSystemCursor={true}
                  innerStyle={{
                     backgroundColor: "transparent",
                  }}
                  outerStyle={{
                     border: "3px solid hsl(var(--primary))",
                  }}
                  trailingSpeed={5}
               />
            </NotTouch>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
               <div className="flex flex-col min-h-full w-full">
                  <NavBar config={global_config.navbar} />
                  <Social config={global_config.social} />
                  <ParallaxProviders>
                     <main className="p-0 mt-16 h-full w-full overflow-hidden">
                        {children}
                     </main>
                  </ParallaxProviders>
                  <Footer config={global_config.footer} />
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
