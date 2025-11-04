import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PricingSpec {
  label: string;
  value: string;
}

interface PricingCardProps {
  title: string;
  tag: string;
  tagColor: "blue" | "green";
  price: string;
  description: string;
  specs: PricingSpec[];
  ctaText: string;
  ctaLink: string;
  delay?: number;
}

export const PricingCard = ({
  title,
  tag,
  tagColor,
  price,
  description,
  specs,
  ctaText,
  ctaLink,
  delay = 0,
}: PricingCardProps) => {
  const tagColorClass = tagColor === "blue" ? "bg-badge-blue/10 border-badge-blue/30 text-badge-blue" : "bg-badge-green/10 border-badge-green/30 text-badge-green";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.01, y: -4 }}
      className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border backdrop-blur-glass shadow-card-glass hover:border-primary/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-sm text-muted-foreground">/bulan</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${tagColorClass}`}>
          {tag}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>

      {/* Specs */}
      <div className="space-y-3 mb-6">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
          >
            <span className="text-sm text-muted-foreground font-medium">{spec.label}</span>
            <span className="text-sm font-semibold">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow group-hover:shadow-glow transition-all duration-200"
        asChild
      >
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          {ctaText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>

      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};
