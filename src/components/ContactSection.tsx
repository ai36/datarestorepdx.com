"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    description: "",

    hp: "",
    formStartedAt: 0,
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, formStartedAt: Date.now() }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      toast({
        title: "Request Submitted",
        description: "We'll contact you within 1 business hour.",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        deviceType: "",
        description: "",
        hp: "",
        formStartedAt: Date.now(),
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err?.message ?? "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Start Your Recovery Today
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Submit a request and we'll respond within one business hour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5"
          >
            <div className="hidden" aria-hidden="true">
              <label>
                Company
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.hp}
                  onChange={(e) => setForm({ ...form, hp: e.target.value })}
                />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Name
                </label>
                <Input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Phone
                </label>
                <Input
                  required
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(503) 555-0100"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </label>
              <Input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Device Type
              </label>
              <Input
                required
                maxLength={100}
                value={form.deviceType}
                onChange={(e) =>
                  setForm({ ...form, deviceType: e.target.value })
                }
                placeholder="e.g., External HDD, USB Flash Drive, SSD"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Describe the Problem
              </label>
              <Textarea
                required
                maxLength={1000}
                rows={4}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="What happened to your device? Any error messages?"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 accent-glow h-12"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Request
                </>
              )}
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Service Area
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Portland, OR
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Including Beaverton, Hillsboro, Gresham
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Vancouver, WA
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Including Camas, Battle Ground
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Hours
              </h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon – Thu: 9:00 AM – 5:00 PM</p>
                  <p>Fri: 9:00 AM – 3:00 PM</p>
                  <p>Sat: Closed</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:hello@agamalabs.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    datarestore@agamalabs.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
