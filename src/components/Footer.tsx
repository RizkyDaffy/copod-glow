import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">K</span>
                </div>
                <span className="text-lg font-bold text-foreground">KlyroHost</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mini-PaaS self-hosted untuk automasi, WhatsApp bot, dan container kustom Anda.
              </p>
            </div>

            {/* Platform Info */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Platform</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm text-muted-foreground">Panel & billing:</span>
                  <a
                    href="https://panel.klyrohost.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-hover transition-colors underline underline-offset-4"
                  >
                    panel.klyrohost.my.id
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm text-muted-foreground">Instance kamu:</span>
                  <span className="text-sm font-mono text-foreground">*.klyrohost.my.id</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="https://panel.klyrohost.my.id" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © 2025 KlyroHost. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
