import { motion } from "motion/react";
import { ShieldAlert, Activity, Heart, Brain, Thermometer, Info } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function LymeDisease() {
  const earlySymptoms = [
    "Red expanding skin rash",
    "Severe headaches and neck stiffness",
    "Lightheadedness",
    "Flu-like symptoms",
    "Shortness of breath / Heart palpitations",
    "Shooting pains that interfere with sleep",
    "Pain and swelling in large joints"
  ];

  const lateSymptoms = [
    "Chronic fatigue & Muscle aches",
    "Joint pain & Twitching",
    "Memory loss & Concentration issues",
    "Sleep impairment",
    "Neuropathy (Nerve pain, numbness)",
    "Gastrointestinal symptoms",
    "Psychiatric (Depression, mood changes)"
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Lyme Disease Treatment" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Infectious Disease</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Lyme Disease
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Lyme disease is a bacterial infection primarily transmitted by deer ticks, typically found in wooded and grassy areas. With an estimated 300,000 annual diagnoses in the U.S., early detection is critical for effective treatment.
          </p>
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-12">
            <Info className="text-primary shrink-0" size={20} />
            <p className="text-sm text-slate-700 italic">
              <strong>Note:</strong> Diagnosing Lyme disease can be difficult. Many patients are initially misdiagnosed with similar conditions due to overlapping symptoms.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Early Stage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-slate-50 rounded-[40px] border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Thermometer className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Early Symptoms</h2>
            </div>
            <ul className="space-y-4">
              {earlySymptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {symptom}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Late Stage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-slate-900 rounded-[40px] text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Activity className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Late Stage Symptoms</h2>
            </div>
            <ul className="space-y-4">
              {lateSymptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {symptom}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Expert Diagnosis and Treatment</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                If you suspect you have been exposed to a tick or are experiencing these symptoms, don't wait. We provide comprehensive evaluations and specialized testing to ensure an accurate diagnosis and treatment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:423-543-7000" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Call for Evaluation: (423) 543-7000
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Heart className="text-primary" size={20} />
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase">Heart Health</span>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Brain className="text-primary" size={20} />
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase">Mental/Memory</span>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center col-span-2">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <ShieldAlert className="text-primary" size={20} />
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase">Nerve & Muscle Pain</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <RegionalSEO />
    </div>
  );
}
