import { motion } from "framer-motion";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Harga awal</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Bayar per instance per bulan. Satu akun bisa punya banyak instance
            (misal 3 bot WA + 2 n8n). Hapus kapan saja.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="n8n Basic"
            tag="Automation"
            tagColor="blue"
            price="Rp 15.000"
            description="Only for Small and Simple Tasks. Bukan untuk chatbot atau AI agent berat."
            specs={[
              { label: "CPU", value: "0.5 core limit" },
              { label: "RAM", value: "512 MB" },
              { label: "Stack", value: "n8n self instance" },
            ]}
            ctaText="Start n8n"
            ctaLink="https://panel.copod.my.id"
            delay={0.1}
          />

          <PricingCard
            title="Go WhatsApp (25G)"
            tag="WhatsApp Bot"
            tagColor="green"
            price="Rp 15.000"
            description="Good for start. 1 nomor WhatsApp, testing bot, RnD klien kecil."
            specs={[
              { label: "CPU", value: "0.25 core limit" },
              { label: "RAM", value: "256 MB" },
              { label: "Stack", value: "WhatsApp gateway container" },
            ]}
            ctaText="Start WA Bot"
            ctaLink="https://panel.copod.my.id"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
