import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted border border-border p-1 transition-colors duration-300 hover:border-primary/50"
      aria-label="Toggle theme"
    >
      {/* Track icons */}
      <Sun 
        size={14} 
        className="absolute left-1.5 top-1/2 -translate-y-1/2 text-amber-500" 
      />
      <Moon 
        size={14} 
        className="absolute right-1.5 top-1/2 -translate-y-1/2 text-primary" 
      />
      
      {/* Sliding thumb */}
      <motion.div
        className="w-5 h-5 rounded-full bg-foreground shadow-md"
        animate={{
          x: theme === "dark" ? 26 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
};

export default ThemeToggle;
