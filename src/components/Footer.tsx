import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-badge-green/10 border border-badge-green/20 text-xs font-medium text-badge-green">
            Early access / homelab build
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Copod saat ini berjalan di node kecil milik kami. Resource terbatas. Jika penuh,
            layanan baru akan ditahan (queued) sampai slot kosong.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Panel & billing:</span>
              <a
                href="https://panel.copod.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors underline underline-offset-4"
              >
                panel.copod.my.id
              </a>
            </div>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Instance kamu:</span>
              <span className="font-mono text-foreground">*.copod.my.id</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 Copod. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
