"use client";

import { useEffect, useState } from "react";

const NotTouch = ({ children }: { children: React.ReactNode }) => {
   const [isMounted, setIsMounted] = useState(false);

   function is_touch_enabled() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
   }

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return "";

   return !is_touch_enabled() ? <>{children}</> : "";
};

export default NotTouch;
