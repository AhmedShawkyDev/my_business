"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        cursor-pointer
        fixed 
        
        bottom-8 right-8
        flex items-center justify-center 
        w-12 h-12 
        border-2 border-primary 
        rounded-full 
        text-primary 
        bg-transparent 
        hover:bg-primary hover:text-gray-900 
        transition-all duration-600
      "
    >
      <FaArrowUp />
    </button>
  );
}
