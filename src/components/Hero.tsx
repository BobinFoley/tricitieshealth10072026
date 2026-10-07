import { motion } from "motion/react";
import { ArrowRight, Activity, ShieldCheck, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-20 lg:pt-[120px] lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 backdrop-blur-md border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Certified DOT Physicals & Men's Health Clinic • Elizabethton, TN</span>
            </div>
            <div className="mb-6">
              <p className="text-orange-600 font-bold text-xl md:text-2xl uppercase tracking-wider">
                Call Our Office Now To Schedule an Appointment
              </p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              DOT Physicals & <span className="text-primary">Men's Health</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium mb-4 max-w-xl leading-relaxed">
              Specialized Care for Commercial Drivers & Comprehensive Men's Vitality in Elizabethton & the Tri-Cities.
            </p>
            <div className="space-y-4 mb-8 max-w-xl">
              <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-100/80">
                <p className="text-sm font-bold text-teal-950 uppercase tracking-wide mb-1 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-teal-600" />
                  Fast, Certified DOT Physicals
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Same-week appointments, thorough exam, urinalysis, and official DOT medical certificate with wallet card so you get back on the road without delay.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm font-bold text-primary-dark uppercase tracking-wide mb-1 flex items-center gap-2">
                  <Activity size={16} className="text-primary" />
                  Confidential Erectile Dysfunction & TRT
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Personalized, discreet treatment protocols for ED, low testosterone, energy restoration, and long-term men's performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="tel:423-543-7000"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 w-full sm:w-auto"
              >
                Schedule Physical or Consult <ArrowRight size={20} />
              </a>
              <div className="flex gap-4 px-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Direct Clinic Line</span>
                  <a href="tel:423-543-7000" className="text-sm font-semibold font-mono text-slate-900 hover:text-primary transition-colors">(423) 543-7000</a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-slate-500 font-medium">Confidential</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-slate-500 font-medium">Patients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9/5</p>
                <p className="text-sm text-slate-500 font-medium">Patient Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/dr-kim-mcmurtrey-tri-cities-health.png" 
                alt="Dr. Kim McMurtrey" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-6 p-6 bg-white rounded-3xl shadow-xl shadow-primary/5 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Dr. Kim McMurtrey</p>
                  <p className="text-xs text-slate-500">Board Certified Practitioner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
