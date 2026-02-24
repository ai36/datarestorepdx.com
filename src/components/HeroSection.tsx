import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "public/hero-lab.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Professional data recovery lab with precision equipment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/60 to-primary/40" />
      </div>

      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6 mr-3">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wide uppercase">
              Portland, OR
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wide uppercase">
              Vancouver, WA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6">
            Professional Data Recovery{" "}
            <span className="text-gradient">You Can Trust</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Fast, confidential, and precise. We recover data from damaged
            drives, flash storage, and SSDs — serving local businesses and
            individuals across the Pacific Northwest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 accent-glow text-base px-8 h-12"
              onClick={() => {
                router.push("/#pricing");
              }}
            >
              Start Diagnostic
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/40 text-accent hover:bg-accent/10 text-base px-8 h-12"
              onClick={() => {
                router.push("/#contact");
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Free Consultation
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-primary-foreground/50 text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              95% Recovery Success Rate
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Same-Day Diagnostics
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
