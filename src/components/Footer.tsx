import { Activity } from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/login_logo1.png" 
              alt="Tri-Cities Health Clinic" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-white leading-none tracking-tight">Tri-Cities Health</span>
              <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">DOT Physicals & Men's Health</span>
            </div>
          </Link>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div />
          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
            <p>© 2026 Tri-Cities Health. All rights reserved.</p>
            <p className="normal-case tracking-normal font-medium text-slate-500">
              Marketing and Website Design by <a href="https://micromanagedmedia.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors underline decoration-slate-800 underline-offset-4">Bob Rutledge at MicroManaged Media, Inc.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
