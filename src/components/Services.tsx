import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Activity, Truck, HeartPulse, ClipboardCheck, Zap, ShieldCheck, Sparkles, ArrowRight, Stethoscope } from "lucide-react";

const featuredSpecialties = [
  {
    title: "Erectile Dysfunction Treatment",
    subtitle: "Confidential & Clinically Proven",
    description: "Personalized medical protocols including oral PDE5 inhibitors, Trimix / Bimix penile injection therapy, and cardiovascular-hormonal root-cause optimization.",
    icon: Sparkles,
    badge: "Primary Men's Focus",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    color: "bg-blue-600 text-white",
    cardBg: "bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700 shadow-xl",
    isFeatured: true,
    link: "/erectile-dysfunction",
    highlights: ["Discreet, private evaluation", "Custom dosage & injection options", "Hormonal & vascular check"]
  },
  {
    title: "Certified DOT Physicals",
    subtitle: "Commercial Driver Medical Exams",
    description: "Prompt, certified FMCSA medical examinations for CDL drivers and fleet operators. Same-week scheduling, thorough urinalysis, vision/hearing, and official wallet card.",
    icon: Truck,
    badge: "Fast Turnaround",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    color: "bg-teal-600 text-white",
    cardBg: "bg-white text-slate-900 border-slate-200 shadow-sm",
    isFeatured: false,
    link: "/dot-physicals",
    highlights: ["Official DOT medical certificate", "Same-week appointments", "Convenient Elizabethton location"]
  },
  {
    title: "Testosterone Replacement Therapy (TRT)",
    subtitle: "Hormone Optimization for Men",
    description: "Evidence-based testosterone therapy for fatigue, loss of muscle mass, mental fog, and diminished drive. Careful monitoring and lab evaluations.",
    icon: Zap,
    badge: "Vitality & Energy",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    color: "bg-indigo-600 text-white",
    cardBg: "bg-white text-slate-900 border-slate-200 shadow-sm",
    isFeatured: false,
    link: "/testosterone-therapy",
    highlights: ["Complete hormone lab panel", "Restored stamina & focus", "Ongoing physician oversight"]
  },
  {
    title: "Men's Cardiovascular & Metabolic Health",
    subtitle: "Blood Pressure & Cholesterol",
    description: "Erectile and physical stamina depend on healthy blood flow. We screen cholesterol, blood glucose, and vascular health to address the underlying root causes.",
    icon: HeartPulse,
    badge: "Long-Term Health",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    color: "bg-rose-600 text-white",
    cardBg: "bg-white text-slate-900 border-slate-200 shadow-sm",
    isFeatured: false,
    link: "/cholesterol",
    highlights: ["Lipid & glucose panels", "Arterial health reviews", "Preventative heart wellness"]
  },
  {
    title: "Low Libido & Adrenal Fatigue",
    subtitle: "Stress & Energy Recovery",
    description: "Chronic stress, demanding driving shifts, and adrenal depletion drain your performance. We identify systemic cortisol and vitality imbalances.",
    icon: Activity,
    badge: "Rest & Recovery",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    color: "bg-amber-600 text-white",
    cardBg: "bg-white text-slate-900 border-slate-200 shadow-sm",
    isFeatured: false,
    link: "/low-libido",
    highlights: ["Adrenal & cortisol testing", "Restful sleep strategies", "Targeted nutritional support"]
  },
  {
    title: "Primary Medical Consultation",
    subtitle: "Comprehensive Clinical Support",
    description: "Direct medical assessments for acute conditions, preventative health screenings, and coordinated continuity of care for our active patients.",
    icon: Stethoscope,
    badge: "Clinical Care",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    color: "bg-emerald-600 text-white",
    cardBg: "bg-white text-slate-900 border-slate-200 shadow-sm",
    isFeatured: false,
    link: "/#contact",
    highlights: ["Direct phone scheduling", "Personalized practitioner care", "Prescription management"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck size={14} />
            <span>Targeted Clinical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-4 tracking-tight">
            DOT Physicals & Specialized Men's Health Care
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From official commercial driver certifications to confidential erectile dysfunction and testosterone therapy, we provide dedicated healthcare focused on your vitality and career.
          </p>
        </div>

        {/* Featured dual hero banner for the two pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: ED & Men's Health */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-slate-700">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[11px] font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Specialized Care</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-3 text-white">
                Erectile Dysfunction Treatment
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                ED is often a treatable vascular or hormonal condition. We provide a respectful, private setting with personalized prescriptions, injection therapy (Trimix), and hormone rebalancing.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>100% confidential, respectful consultations</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Oral therapy & penile injection treatments</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Testosterone & cardiovascular root-cause analysis</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <Link 
                to="/erectile-dysfunction"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                Learn About ED Treatment <ArrowRight size={16} />
              </Link>
              <a 
                href="tel:423-543-7000"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl transition-colors border border-white/10"
              >
                Call Office: (423) 543-7000
              </a>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Pillar 2: DOT Physicals */}
          <div className="bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-teal-800/50">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[11px] font-bold uppercase tracking-wider mb-4">
                <Truck size={13} />
                <span>FMCSA Certified</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-3 text-white">
                Fast & Certified DOT Physicals
              </h3>
              <p className="text-teal-100/90 text-base leading-relaxed mb-6">
                Designed for busy commercial drivers and fleet workers. We know your time on the road is your paycheck—we ensure quick, accurate exams that keep you compliant.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-teal-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                  <span>Comprehensive review of medical history</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-teal-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                  <span>On-site urinalysis & thorough exam</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-teal-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                  <span>Immediate DOT certificate & wallet card upon passing</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <Link 
                to="/dot-physicals"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-teal-500/25"
              >
                DOT Exam Details <ArrowRight size={16} />
              </Link>
              <a 
                href="tel:423-543-7000"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3.5 rounded-xl transition-colors border border-white/10"
              >
                Book Driver Physical
              </a>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* 6 Specialized Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpecialties.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`p-7 rounded-2xl border transition-all flex flex-col justify-between group ${service.cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md`}>
                    <service.icon size={22} />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className={`text-xs font-semibold mb-3 ${service.isFeatured ? 'text-primary' : 'text-slate-500'}`}>
                  {service.subtitle}
                </p>
                <p className={`text-sm leading-relaxed mb-5 ${service.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-6 border-t pt-4 border-slate-100/20">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs opacity-90">
                      <div className={`w-1 h-1 rounded-full ${service.isFeatured ? 'bg-primary' : 'bg-primary'}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={service.link}
                className={`inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl transition-all ${
                  service.isFeatured
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-slate-100 text-slate-800 hover:bg-primary hover:text-white'
                }`}
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Conditions & Treatments Reference Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Comprehensive Clinical Scope</span>
            <h3 className="text-3xl font-display font-bold text-slate-900 mt-2 mb-2">Conditions Evaluated & Managed</h3>
            <p className="text-slate-600">Specialized attention to hormonal, cardiovascular, occupational, and full-body wellness.</p>
          </div>
          
          <div className="bg-primary rounded-[36px] p-8 md:p-14 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-semibold">Erectile Dysfunction</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-semibold">Testosterone Therapy (TRT)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-semibold">DOT Physicals (CDL)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Low Libido in Men</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Adrenal Fatigue & Stress</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">High Blood Pressure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Cholesterol Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Poor Sleep & Fatigue</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Diabetes & Glucose Care</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Diabetic Neuropathy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Commercial Driver Exams</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Drug Screen Referrals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Metabolic Weight Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Anxiety & Chronic Stress</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Thyroid Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Anemia & Iron Panels</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Back Pain & Sciatica</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Muscle Spasms & Sprains</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Fibromyalgia Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Arthritis & Joint Soreness</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Headaches & Migraines</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Lyme Disease Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">GERD & Acid Reflux</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Asthma & Allergies</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Trigger Point Injections</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Restless Leg Syndrome</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Natural Supplement Reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Sexual Dysfunction (Women)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Coughs, Colds & Acute Illness</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Preventative Wellness Labs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Driver Health Evaluations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  <span className="text-sm md:text-base font-medium">Prescription Refill Oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
