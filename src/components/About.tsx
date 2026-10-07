import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-0 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-16 lg:mt-0"
          >
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">About the Clinic</h2>
            <p className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Men's Health & DOT Certified Care</p>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At Tri-Cities Health, we focus on specialized, high-impact medical solutions that keep you active, confident, and on the road. Rather than a rushed waiting room, we provide personalized clinical consultations tailored to your individual physical and occupational demands.
              </p>
              <p>
                Led by experienced practitioners in Elizabethton, TN, our men's health protocols address erectile dysfunction (ED), low testosterone (TRT), and vitality from the root cause—combining hormone rebalancing, cardiovascular reviews, and proven treatments like PDE5 medications and Trimix therapies.
              </p>
              <p>
                For our commercial drivers across Northeast Tennessee and Southwest Virginia, our certified DOT physicals ensure you meet all FMCSA medical standards quickly, accurately, and without bureaucratic delays.
              </p>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
