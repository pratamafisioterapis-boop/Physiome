
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const LandingFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-xl tracking-tighter">Ph</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Physiome</span>
            </Link>
            <p className="text-secondary-foreground/70 mb-8 max-w-sm leading-relaxed">
              Bantu Pasien Pulih Lebih Cepat dengan Physiome. Platform manajemen klinik fisioterapi modern yang didukung kecerdasan buatan.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Features</a></li>
              <li><a href="#pricing" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Pricing</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Telehealth</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Patient App</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">AI Assistant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-accent-mint transition-colors font-medium">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-accent-mint" />
                <span className="font-medium">hello@physiome.id</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-accent-mint" />
                <span className="font-medium">+62 811 2345 6789</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent-mint" />
                <span className="font-medium">Sudirman CBD, Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm font-medium">
            &copy; {new Date().getFullYear()} Physiome. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
