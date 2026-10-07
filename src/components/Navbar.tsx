import { motion } from "motion/react";
import { Phone, MapPin, Menu, X, Truck, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "DOT Physicals", href: "/dot-physicals" },
    { name: "ED Treatment", href: "/erectile-dysfunction" },
    { name: "Testosterone (TRT)", href: "/testosterone-therapy" },
    { 
      name: "Services & Conditions", 
      href: "/#services",
      dropdown: [
        { name: "Erectile Dysfunction", href: "/erectile-dysfunction" },
        { name: "Testosterone Therapy (TRT)", href: "/testosterone-therapy" },
        { name: "DOT Physicals for Drivers", href: "/dot-physicals" },
        { name: "Low Libido & Vitality", href: "/low-libido" },
        { name: "Adrenal Fatigue & Stress", href: "/adrenal-fatigue" },
        { name: "Cholesterol & Cardiovascular", href: "/cholesterol" },
        { name: "Anxiety & Mood Health", href: "/anxiety" },
        { name: "Fibromyalgia & Chronic Pain", href: "/fibromyalgia" },
        { name: "Lyme Disease Evaluation", href: "/lyme-disease" },
        { name: "Sexual Dysfunction (Women)", href: "/sexual-dysfunction-women" },
        { name: "All Clinic Services", href: "/#services" },
      ]
    },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <Link to="/dot-physicals" className="bg-primary text-white py-2 px-4 text-center block hover:bg-primary-dark transition-colors">
        <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Truck size={16} className="hidden sm:block" />
          Certified DOT Physicals & Men's Health Clinic in Elizabethton, TN • Call (423) 543-7000
        </p>
      </Link>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/login_logo1.png" 
              alt="Tri-Cities Health Clinic" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight text-primary-dark leading-none">Tri-Cities Health</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">DOT Physicals & Men's Health</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      handleScroll(link.href);
                    }}
                    className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              handleScroll(subItem.href);
                            }}
                            className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex items-center gap-3">
              <a 
                href="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/primary-care-packet.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-primary bg-primary/5 rounded-full hover:bg-primary/10 transition-colors"
              >
                Forms
              </a>
              <a href="tel:423-543-7000" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 flex items-center gap-2">
                <Phone size={14} />
                423-543-7000
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-slate-900 py-3 uppercase tracking-wider text-[10px] mt-2 opacity-50">
                    {link.name}
                  </div>
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      onClick={() => {
                        setIsOpen(false);
                        handleScroll(subItem.href);
                      }}
                      className="text-lg font-medium text-slate-600 py-2 ml-4 flex items-center gap-2 border-l-2 border-slate-100 pl-4"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    handleScroll(link.href);
                  }}
                  className="text-lg font-medium text-slate-600 py-3 block"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <a 
            href="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/primary-care-packet.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-medium text-primary py-3 block border-t border-slate-50 mt-2"
          >
            Forms (PDF)
          </a>
          <a href="tel:423-543-7000" className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold w-full flex items-center justify-center gap-2">
            <Phone size={18} />
            423-543-7000
          </a>
        </motion.div>
      )}
    </nav>
  );
}
