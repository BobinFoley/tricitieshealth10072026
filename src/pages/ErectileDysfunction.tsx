import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  Heart, 
  Pill, 
  Syringe, 
  Stethoscope, 
  HelpCircle, 
  CheckCircle2, 
  Lock, 
  Phone,
  Flame,
  FileCheck2,
  AlertCircle
} from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

export default function ErectileDysfunction() {
  const treatmentModalities = [
    {
      title: "Custom Oral PDE5 Regimens",
      subtitle: "Tailored Dosing & Combinations",
      icon: Pill,
      tag: "First-Line Medical Therapy",
      color: "bg-blue-600",
      description: "Generic Sildenafil (Viagra), Tadalafil (Cialis daily or as-needed), and personalized compound blends adjusted for individual cardiovascular tolerance and efficacy.",
      benefits: [
        "Optimal absorption and dosage titration",
        "Options for daily low-dose or event-based use",
        "Affordable prescriptions without insurance hurdles"
      ]
    },
    {
      title: "Penile Injection Therapy (Trimix / Bimix)",
      subtitle: "Fast-Acting & Highly Effective",
      icon: Syringe,
      tag: "Advanced Clinical Solution",
      color: "bg-indigo-600",
      description: "Compounded multi-action formulations (Papaverine, Phentolamine, and Alprostadil) delivering direct localized blood flow within minutes, independent of nerve or mental stress.",
      benefits: [
        "Over 85-90% success rate even when pills fail",
        "Rapid onset (5 to 15 minutes)",
        "In-office patient instruction and comfortable self-administration"
      ]
    },
    {
      title: "Testosterone (TRT) & Endocrine Optimization",
      subtitle: "Addressing Root Hormonal Deficiencies",
      icon: Flame,
      tag: "Hormone Optimization",
      color: "bg-amber-600",
      description: "Low free testosterone reduces nitric oxide production, diminishes sensitivity, and destroys drive. We evaluate complete androgen panels to restore biological balance.",
      benefits: [
        "Restores natural morning erections & spontaneous drive",
        "Improves response to oral ED medications",
        "Enhances energy, focus, and lean muscle mass"
      ]
    },
    {
      title: "Cardiovascular & Nitric Oxide Support",
      subtitle: "Endothelial & Arterial Function",
      icon: Heart,
      tag: "Vascular Health",
      color: "bg-rose-600",
      description: "Penile arteries are among the smallest in the body. ED is frequently the first warning sign of hypertension, high cholesterol, or early arterial stiffness. We treat the cardiovascular source.",
      benefits: [
        "Lipid, glucose, and blood pressure regulation",
        "Endothelial support to boost natural blood flow",
        "Prevents progressive arterial narrowing"
      ]
    }
  ];

  const diagnosticSteps = [
    {
      step: "01",
      title: "100% Confidential Medical History",
      description: "Private conversation discussing your symptoms, onset, medication history, sleep habits, and lifestyle factors in a judgment-free medical clinic."
    },
    {
      step: "02",
      title: "Targeted Biomarker & Lab Testing",
      description: "We check total & free testosterone, estradiol, thyroid, lipid profile, fasting blood sugar, and vital signs to pinpoint the exact physiological cause."
    },
    {
      step: "03",
      title: "Customized Protocol Selection",
      description: "We match you with the safest and most effective therapy—whether optimized oral prescriptions, Trimix injection protocols, hormone replacement, or a combination."
    },
    {
      step: "04",
      title: "Ongoing Monitoring & Dose Titration",
      description: "Close follow-up to ensure optimal rigidity, duration, comfort, and zero undesirable side effects for both you and your partner."
    }
  ];

  const faqs = [
    {
      q: "Why did oral medications like Viagra or Cialis stop working for me?",
      a: "Tension, nerve damage, vascular progression (arterial plaque), uncontrolled blood sugar, or dropping testosterone levels can render standard oral pills ineffective. In our Elizabethton clinic, we investigate these underlying blockers and offer advanced options like Trimix or hormone optimization that work even when pills have stopped helping."
    },
    {
      q: "What is Trimix injection therapy, and is it painful?",
      a: "Trimix is a compounded prescription medication injected using a micro-needle (similar to an insulin needle) directly into the side of the penis. Most men report feeling only a minor pinch. It triggers reliable, firm blood flow within 5 to 15 minutes that lasts 30 to 60 minutes without requiring sexual stimulation."
    },
    {
      q: "Is an in-person clinic visit better than online subscription websites?",
      a: "Yes. Online pill mills usually mail generic tablets without checking your blood pressure, heart health, prostate, or hormone panels. Because ED is frequently the first clinical sign of cardiovascular disease or diabetes, a thorough evaluation by a certified provider protects your long-term health while finding a truly effective solution."
    },
    {
      q: "How private is my appointment?",
      a: "Your privacy is strictly guarded under HIPAA regulations. We do not transmit patient notes or records over unsecure channels, and our team handles all consultations with complete clinical professionalism and discretion."
    },
    {
      q: "Do I need insurance to receive ED treatment?",
      a: "No. Many ED treatments and specialty compounding are self-pay. We keep our consultation fees and prescription protocols direct, affordable, and transparent without frustrating insurance denials."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Erectile Dysfunction Treatment" />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Lock size={14} />
            <span>Confidential Men's Health Clinic • Elizabethton, TN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Specialized & Discreet <br />
            <span className="text-primary">Erectile Dysfunction</span> Treatment
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium max-w-3xl">
            Regain your confidence, spontaneity, and intimacy. At Tri-Cities Health, we go beyond basic pills to uncover the vascular, hormonal, and neurological causes of ED with clinically proven medical treatments.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="tel:423-543-7000" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-center hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Call For Private Consult: (423) 543-7000</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold px-2">
              <ShieldCheck size={18} className="text-green-600" />
              <span>100% HIPAA Confidential & Discreet</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-3xl font-extrabold text-primary mb-1">52%+</div>
            <p className="font-bold text-slate-900 text-sm mb-1">Men Over 40 Affected</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              ED is extremely common and highly treatable. You don't have to accept it as an inevitable part of aging.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-3xl font-extrabold text-primary mb-1">90%+</div>
            <p className="font-bold text-slate-900 text-sm mb-1">Treatment Response Rate</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              When matched with modern multi-agent therapy (Trimix) and hormone correction, nearly all men achieve reliable erections.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-3xl font-extrabold text-primary mb-1">Root Cause</div>
            <p className="font-bold text-slate-900 text-sm mb-1">Not Just Temporary Masking</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              We screen testosterone, nitric oxide pathways, cardiovascular status, and lifestyle factors for lasting results.
            </p>
          </div>
        </div>

        {/* Treatment Modalities */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Medical Solutions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">
              Comprehensive Treatment Modalities
            </h2>
            <p className="text-slate-600 text-base">
              Every man's body and vascular health are unique. We offer a full spectrum of evidence-based options to ensure you get safe, consistent, and predictable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatmentModalities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-md`}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-primary mb-4">{item.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-2 border-t border-slate-100 pt-5 mb-6">
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="tel:423-543-7000"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    Discuss this option with our practitioner →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4-Step Patient Journey */}
        <div className="mt-24 bg-slate-900 text-white rounded-[40px] p-8 md:p-14 relative overflow-hidden">
          <div className="max-w-3xl mb-12 relative z-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">What To Expect</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-white">
              The Path to Restoring Your Confidence
            </h2>
            <p className="text-slate-300 text-base">
              We make the consultation straightforward, comfortable, and discreet from the moment you call our office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {diagnosticSteps.map((s, i) => (
              <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-mono font-bold text-primary mb-3">{s.step}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-3">
              <Lock size={20} className="text-primary" />
              <p className="text-sm text-slate-300">
                All consultations and records are strictly confidential and HIPAA-protected.
              </p>
            </div>
            <a 
              href="tel:423-543-7000"
              className="bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 text-sm whitespace-nowrap"
            >
              Call (423) 543-7000
            </a>
          </div>

          <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Patient FAQ</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 mt-2 mb-3">
              Frequently Asked Questions About ED
            </h2>
            <p className="text-slate-600 text-sm">
              Straightforward answers to the most common questions our men's health patients ask.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                  <HelpCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 p-10 bg-gradient-to-r from-primary to-primary-dark rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Ready to Regain Your Vitality & Intimacy?
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Schedule your confidential consultation in Elizabethton, TN today. Serving Johnson City, Bristol, Kingsport, and the entire Tri-Cities region.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a 
              href="tel:423-543-7000"
              className="bg-white text-primary font-bold px-8 py-4 rounded-xl text-center hover:bg-slate-50 transition-colors shadow-md text-sm whitespace-nowrap"
            >
              Call (423) 543-7000
            </a>
            <Link 
              to="/testosterone-therapy"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl text-center transition-colors border border-white/20 text-sm whitespace-nowrap"
            >
              Explore TRT Options
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <RegionalSEO />
      </div>
    </div>
  );
}
