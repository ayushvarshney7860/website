"use client"

import { ParallaxProvider } from "react-scroll-parallax";

const ParallaxProviders = ({children}: {children:React.ReactNode}) => {
   return ( <ParallaxProvider>
      {children}
   </ParallaxProvider> );
}
 
export default ParallaxProviders;