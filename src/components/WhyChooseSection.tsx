import { motion } from "framer-motion";
import { MapPin, Zap, Lock, DollarSign, Eye, Award } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Local Service", desc: "Serving Portland, OR and Vancouver, WA — no shipping, no waiting." },
  { icon: Zap, title: "Fast Turnaround", desc: "Same-day diagnostics. Most recoveries completed within 48–72 hours." },
  { icon: Lock, title: "Confidential Handling", desc: "Your data never leaves our secure lab. Strict privacy protocols." },
  { icon: DollarSign, title: "No Recovery — No Fee", desc: "If we can't recover your data, you only pay the diagnostic fee." },
  { icon: Eye, title: "Transparent Pricing", desc: "Fixed diagnostic cost. Recovery quote before any work begins." },
  { icon: Award, title: "Lab-Grade Equipment", desc: "Professional-grade tools and clean-room conditions for delicate recoveries." },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Trusted by Local Businesses Across Portland & Vancouver
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-4">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
