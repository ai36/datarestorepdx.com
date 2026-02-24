import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is my data kept confidential?",
    a: "Absolutely. Every device is handled under strict privacy protocols. We never access, share, or store your personal data beyond what is necessary for recovery. Your files are deleted from our systems once you pick up your device.",
  },
  {
    q: "How long does recovery typically take?",
    a: "Diagnostics are completed same-day in most cases. Recovery time depends on the device and severity — simple recoveries take 24–48 hours, while complex cases may take 3–5 business days.",
  },
  {
    q: "What if my data cannot be recovered?",
    a: "If we are unable to recover your data, you owe nothing beyond the initial diagnostic fee. We believe in transparent, risk-free pricing.",
  },
  {
    q: "Do you work with encrypted drives?",
    a: "Yes. We handle BitLocker, FileVault, and hardware-encrypted drives. You will need to provide the encryption key or password for us to proceed.",
  },
  {
    q: "Do you serve Vancouver, WA?",
    a: "Yes. We actively serve both Portland, Oregon and Vancouver, Washington, including surrounding areas like Beaverton, Hillsboro, Gresham, Camas, and Battle Ground.",
  },
  {
    q: "What should I bring when I drop off my device?",
    a: "Bring your damaged device and a separate storage device (USB drive or external HDD) where we can transfer the recovered data. If you don't have one, we can provide one at cost.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/40">
      <div className="container-narrow mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border rounded-xl data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
