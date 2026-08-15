"use client"; // مهم جداً لأن AOS تشتغل في المتصفح فقط

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return <>{children}</>;
}
