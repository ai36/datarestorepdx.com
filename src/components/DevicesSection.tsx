import { motion } from "framer-motion";
import { HardDrive, Cylinder, Usb, Database, Disc, MemoryStick } from "lucide-react";

const devices = [
  { icon: Usb, label: "USB Flash Drives", desc: "Corrupted, broken, or unrecognized USB devices" },
  { icon: HardDrive, label: "Hard Disk Drives", desc: "Mechanical failures, bad sectors, clicking drives" },
  { icon: Cylinder, label: "Solid State Drives", desc: "Firmware corruption, TRIM recovery, controller failure" },
  { icon: Disc, label: "External Drives", desc: "Dropped, water-damaged, or unresponsive enclosures" },
  { icon: MemoryStick, label: "Memory Cards", desc: "SD, microSD, CF — photo & video recovery" },
  { icon: Database, label: "RAID Arrays", desc: "Multi-disk arrays — recovery of RAID configurations" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DevicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            What We Recover
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Every Device. Every Scenario.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From consumer flash drives to enterprise SSDs — our lab handles the full spectrum of storage media recovery.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {devices.map((d) => (
            <motion.div key={d.label} variants={item} className="glass-card p-6 flex flex-col items-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-4">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{d.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevicesSection;
