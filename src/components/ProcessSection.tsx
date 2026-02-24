import { motion } from "framer-motion";
import { Package, Search, FileText, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { icon: Package, num: "01", title: "Bring Your Device", desc: "Drop off your damaged device along with a target drive for recovered data." },
  { icon: CreditCard, num: "02", title: "Pay for Diagnostic", desc: "A fixed diagnostic fee covers thorough analysis of your storage media." },
  { icon: FileText, num: "03", title: "Receive Recovery Quote", desc: "We'll message you with a detailed quote and recovery outlook." },
  { icon: Search, num: "04", title: "Approve & Pay", desc: "Review the quote. Only pay if you choose to proceed with recovery." },
  { icon: CheckCircle, num: "05", title: "Pick Up Your Data", desc: "Collect your original device and the drive with your recovered files." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/40">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Simple, Transparent Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From drop-off to pickup — five clear steps with no surprises.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.75 bg-border -translate-x-0.5 my-20" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:flex items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`lg:w-1/2 px-24 lg:px-0 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`glass-card w-full lg:no-w-full p-6 inline-block text-left ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="step-number">{s.num}</span>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-13">{s.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex items-center justify-center w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
