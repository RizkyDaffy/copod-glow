import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Berapa lama sih bikin server Minecraft-nya?",
    answer: "Gak pake lama, bestie! Server Minecraft kamu bisa langsung jadi kurang dari 5 menit. Tinggal pilih game, pilih paket, bayar, terus langsung gas main deh!",
    tags: ["setup", "instan", "server"]
  },
  {
    question: "Pembayarannya bisa pake apa aja?",
    answer: "Kita terima berbagai metode pembayaran yang memudahkan kamu, mulai dari transfer bank, e-wallet, hingga QRIS. Semua transaksi aman dan tercatat otomatis di panel."
  },
  {
    question: "Cara join servernya gimana sih, kok aku bingung?",
    answer: "Gampang banget! Setelah server aktif, kamu akan dapat IP address dan port. Tinggal buka game Minecraft kamu, pilih Multiplayer, Add Server, masukkan IP-nya, dan langsung bisa main bareng temen-temen!"
  },
  {
    question: "Ini servernya bisa buat versi Java sama Bedrock gak?",
    answer: "Bisa dong! Kita support berbagai versi Minecraft, baik Java Edition maupun Bedrock Edition. Kamu bisa pilih versi yang sesuai dengan kebutuhan kamu saat setup server."
  },
  {
    question: "Kalau server down atau ada masalah, bisa dibantu gak?",
    answer: "Tentu bisa! Tim support kami siap bantu kamu 24/7. Kamu bisa hubungi kami melalui panel support atau WhatsApp. Kami akan respond secepat mungkin untuk menyelesaikan masalah kamu."
  },
  {
    question: "Bisa upgrade atau downgrade paket kapan aja?",
    answer: "Absolutely! Kamu bisa upgrade paket sewaktu-waktu kalau butuh resource lebih. Downgrade juga bisa, tinggal adjust aja di panel. Fleksibel banget deh!"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Pertanyaan yang Sering Ditanyain</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Cari jawaban soal hosting server game, terutama Minecraft!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border bg-card/40 backdrop-blur-glass rounded-2xl px-6 shadow-card-glass hover:bg-card-hover hover:border-white/20 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-base sm:text-lg font-semibold pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5">
                    <p className="leading-relaxed">{faq.answer}</p>
                    {faq.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center p-8 border border-border bg-card/40 backdrop-blur-glass rounded-2xl shadow-card-glass"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Masih bingung, bestie?</h3>
            <p className="text-muted-foreground mb-4">Tim support kita siap bantu 24/7! Jangan sungkan ya!</p>
            <a
              href="https://panel.klyrohost.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-hover transition-all duration-200 shadow-glow"
            >
              Hubungi Support
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
