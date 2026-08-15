"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // يفضل استخدام resolvedTheme عشان لو الثيم الافتراضي كان system
  const { theme, setTheme, resolvedTheme } = useTheme();

  // الخطوة الأهم: التأكد إن الكومبوننت عمل Mount على الكلاينت
  useEffect(() => {
    setMounted(true);
  }, []);

  // منع الريندر قبل ما الكلاينت يشتغل عشان نتجنب الـ Hydration Error
  if (!mounted) {
    // بنرجع مساحة فاضية بنفس الحجم تقريباً عشان التصميم ميبوظش
    return <div className="w-9 h-9"></div>;
  }

  // بنحدد الثيم الحالي بدقة
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const Toggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={Toggle}
      className="px-3 py-2 text-yellow-500 rounded cursor-pointer flex items-center justify-center w-9 h-9"
    >
      {/* ضفنا mode="wait" عشان الأيقونة القديمة تختفي الأول قبل ما التانية تظهر */}
      <AnimatePresence mode="wait">
        {currentTheme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.4 }}
          >
            <FaSun className="text-yellow-500 text-xl" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.4 }}
          >
            <FaMoon className="text-gray-800 dark:text-white text-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
