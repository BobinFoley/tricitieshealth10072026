import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const primaryLinks = [
    { name: "DOT Physicals", href: "/dot-physicals" },
    { name: "ED Treatment", href: "/erectile-dysfunction" },
    { name: "Testosterone (TRT)", href: "/testosterone-therapy" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleScroll = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <Link to="/dot-physicals" className="bg-primary text-white py-1.5 px-4 text-center block hover:bg-primary-dark transition-colors">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Truck size={15} className="hidden sm:inline-block shrink-0" />
          Certified DOT Physicals & Men's Health Clinic in Elizabethton, TN • Call (423) 543-7000
        </p>
      </Link>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center gap-4">
          {/* Logo & Clinic Name (links to Home) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2">
            <img 
              src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/login_logo1.png" 
              alt="Tri-Cities Health Clinic" 
              className="h-11 w-auto shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight text-primary-dark leading-none">Tri-Cities Health</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.18em] mt-1">DOT Physicals & Men's Health</span>
            </div>
          </Link>
          
          {/* Uncrowded Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action CTAs: Forms & Aligned Phone Number */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a 
              href="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/primary-care-packet.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 px-4 inline-flex items-center justify-center text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors shrink-0"
            >
              Forms
            </a>
            <a 
              href="tel:423-543-7000" 
              className="h-10 px-5 inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 whitespace-nowrap shrink-0"
            >
              <Phone size={15} className="shrink-0" />
              <span>(423) 543-7000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a 
              href="tel:423-543-7000" 
              className="md:hidden h-9 px-3 inline-flex items-center justify-center gap-1.5 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary-dark transition-all"
            >
              <Phone size={13} />
              <span>Call</span>
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 px-5 pt-3 pb-6 flex flex-col gap-2 overflow-hidden shadow-xl"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 py-1">Featured Care</div>
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => {
                  setIsOpen(false);
                  handleScroll(link.href);
                }}
                className="text-base font-semibold text-slate-800 hover:text-primary py-2 px-1 border-b border-slate-50 block"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/#services"
              onClick={() => {
                setIsOpen(false);
                handleScroll("/#services");
              }}
              className="text-sm font-medium text-slate-600 hover:text-primary py-2 px-1 block"
            >
              All Clinic Services & Conditions
            </Link>

            <div className="pt-3 flex flex-col gap-2">
              <a 
                href="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/primary-care-packet.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center py-2.5 px-4 text-sm font-semibold text-primary bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
              >
                Download Patient Forms (PDF)
              </a>
              <a 
                href="tel:423-543-7000" 
                className="bg-primary text-white py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-primary/20"
              >
                <Phone size={16} />
                Call (423) 543-7000
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
