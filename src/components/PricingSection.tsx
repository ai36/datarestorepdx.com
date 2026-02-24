import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const router = useRouter();

  return (
    <section id="pricing" className="section-padding bg-secondary/40">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Transparent, Honest Pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            No hidden fees. You always know the cost before we start.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Diagnostic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Step 1
            </span>
            <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
              Diagnostic
            </h3>
            <p className="mt-1 text-muted-foreground text-sm">
              Thorough analysis of your device
            </p>
            <div className="mt-5 text-4xl font-heading font-extrabold text-foreground">
              $49
              <span className="text-base font-normal text-muted-foreground ml-1">
                flat fee
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Complete device assessment",
                "Recovery feasibility report",
                "Detailed cost estimate",
                "Same-day results",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <Button
              className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => {
                router.push("/#contact");
              }}
            >
              Book Diagnostic
            </Button>
          </motion.div>

          {/* Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 border-accent/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Quote-Based
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Step 2
            </span>
            <h3 className="mt-2 text-2xl font-heading font-bold text-foreground">
              Recovery
            </h3>
            <p className="mt-1 text-muted-foreground text-sm">
              After diagnostic approval
            </p>
            <div className="mt-5 text-4xl font-heading font-extrabold text-foreground">
              Custom
              <span className="text-base font-normal text-muted-foreground ml-1">
                quote
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Based on complexity & device type",
                "Full quote before any work",
                "No recovery — no charge",
                "Secure data transfer included",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-8 w-full border-accent/30 text-foreground hover:bg-accent/10 hover:text-accent"
              onClick={() => {
                router.push("/#contact");
              }}
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
