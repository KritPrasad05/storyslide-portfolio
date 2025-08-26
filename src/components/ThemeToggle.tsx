import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className="fixed top-6 right-0 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ x: "75%" }}
        animate={{ x: isHovered ? "0%" : "75%" }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="relative"
      >
        <motion.button
          onClick={toggleTheme}
          className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "moon" : "sun"}
              initial={{ 
                rotate: isDark ? -90 : 90,
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                rotate: 0,
                scale: 1,
                opacity: 1
              }}
              exit={{ 
                rotate: isDark ? 90 : -90,
                scale: 0,
                opacity: 0
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isDark ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
        
        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? -8 : 10
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-full top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground/90 text-background text-xs rounded whitespace-nowrap pointer-events-none"
        >
          {isDark ? "Switch to light" : "Switch to dark"}
        </motion.div>
      </motion.div>
    </div>
  );
};