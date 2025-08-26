import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Force theme application on mount
  useEffect(() => {
    if (mounted && theme) {
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      
      if (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')) {
        html.classList.add('dark');
      } else {
        html.classList.add('light');
      }
      
      console.log("Theme applied:", theme, "Resolved:", resolvedTheme, "HTML classes:", html.classList.toString());
    }
  }, [mounted, theme, resolvedTheme]);

  if (!mounted) return null;

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    console.log("Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
    
    // Manually apply theme class immediately
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(newTheme);
  };

  return (
    <div className="fixed top-6 right-4 z-50">
      <motion.button
        onClick={toggleTheme}
        className="w-12 h-12 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl shadow-xl flex items-center justify-center hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
    </div>
  );
};