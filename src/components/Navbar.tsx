import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">K</span>
            </div>
            <span className="text-lg font-bold">KlyroHost</span>
          </div>
          
          <Button
            variant="ghost"
            className="hidden sm:flex border border-border hover:bg-card-hover hover:border-primary/30 transition-all duration-200"
            asChild
          >
            <a href="https://panel.klyrohost.my.id" target="_blank" rel="noopener noreferrer">
              Open Panel →
            </a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
