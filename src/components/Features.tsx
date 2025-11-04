import { Zap, Package, CloudOff } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={Zap}
            title="1 klik langsung jalan"
            description="Pilih service → bayar → otomatis aktif dengan URL unik kamu (contoh: something.copod.my.id). Tidak perlu setup server sendiri."
            delay={0.1}
          />
          <FeatureCard
            icon={Package}
            title="Marketplace container"
            description="n8n untuk automations, WhatsApp gateway untuk bot, sampai container custom kamu sendiri. CPU & RAM bisa dipilih sesuai kebutuhan."
            delay={0.2}
          />
          <FeatureCard
            icon={CloudOff}
            title="Tanpa VPS & DevOps"
            description="Tidak perlu sewa VPS, tidak perlu pusing Docker, reverse proxy, SSL, atau domain. Semua sudah kami host di node kami."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
