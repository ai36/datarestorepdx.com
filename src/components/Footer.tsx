import { Shield } from "lucide-react";
import Logo from "./logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/60 pt-12 pb-9">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-4 flex flex-col items-center md:items-start gap-6">
            <Logo scrolled={false} />
            <p className="text-sm text-center md:text-left leading-relaxed max-w-sm">
              Professional data recovery for Portland, Oregon and Vancouver, Washington. Lab-grade equipment, confidential handling, and transparent pricing.
            </p>
          </div>
          <div className="text-right md:text-left pl-10 lg:pl-0">
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">USB Recovery</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">HDD Recovery</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">SSD Recovery</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Memory Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#process" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} DataRestorePDX. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
