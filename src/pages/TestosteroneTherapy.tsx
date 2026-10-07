import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  Activity, 
  Dumbbell, 
  Bone, 
  HelpCircle, 
  ChevronDown, 
  CreditCard, 
  FileText, 
  Stethoscope, 
  CheckCircle2, 
  Phone,
  Clock,
  Sparkles,
  AlertCircle
} from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

export default function TestosteroneTherapy() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("all");

  const effects = [
    {
      title: "Brain & Wellbeing",
      icon: <Brain className="text-secondary" size={24} />,
      content: "Testosterone affects thinking abilities, mood, energy levels, and sexual drive. It's essential for a general sense of vitality."
    },
    {
      title: "Muscle & Strength",
      icon: <Dumbbell className="text-secondary" size={24} />,
      content: "Testosterone creates muscle cells and causes them to grow in size and strength, improving overall lean body mass."
    },
    {
      title: "Heart & Cardiovascular",
      icon: <Heart className="text-secondary" size={24} />,
      content: "Evidence suggests benefits for the heart directly, helping open coronary arteries and improving cardiac function."
    },
    {
      title: "Bone Density",
      icon: <Bone className="text-secondary" size={24} />,
      content: "Testosterone helps prevent bone destruction of aging and improves bone density, reducing osteoporosis risk."
    },
    {
      title: "Metabolic Health",
      icon: <Activity className="text-secondary" size={24} />,
      content: "Proven to reduce body fat, particularly in the midsection, leading to improved metabolic profiles."
    },
    {
      title: "Sexual Function",
      icon: <Zap className="text-secondary" size={24} />,
      content: "Important for proper erectile function and the quality of erections, separate from its effects on libido."
    }
  ];

  const firstVisitSteps = [
    {
      step: "01",
      title: "Confidential Provider Consultation",
      description: "We review your medical history, current symptoms (fatigue, libido, focus, sleep), lifestyle, and health goals in an unhurried, one-on-one setting."
    },
    {
      step: "02",
      title: "Comprehensive Morning Hormone Lab Draw",
      description: "We draw a complete men's health panel—ideally before 10:00 AM when testosterone naturally peaks—testing Total & Free Testosterone, PSA, Estradiol, CBC/Hematocrit, and metabolic health."
    },
    {
      step: "03",
      title: "Personalized Protocol Design",
      description: "Once your lab results arrive (typically 24–48 hours), we review your numbers together and tailor your exact therapy—whether weekly injections, topicals, or fertility-preserving protocols."
    },
    {
      step: "04",
      title: "Ongoing Monitoring & Dose Optimization",
      description: "Follow-up lab checks at 6 to 8 weeks and every 3 to 6 months ensure your testosterone remains in the optimal peak zone while rigorously protecting your red blood cell count, prostate, and cardiovascular wellness."
    }
  ];

  const faqs = [
    {
      q: "Does health insurance cover Testosterone Replacement Therapy (TRT)?",
      category: "insurance",
      tag: "Insurance Coverage",
      a: "Coverage depends on your specific insurance provider and plan benefits: (1) Diagnostic Lab Work: Many commercial insurance carriers (and Medicare) cover baseline and routine monitoring blood work, provided diagnostic billing criteria are met; (2) Medication & Therapy: Insurance plans typically require strict prior authorizations, step therapy, and at least two consecutive morning fasting blood draws showing total testosterone below clinical thresholds (usually under 250–300 ng/dL) accompanied by clinical symptoms; (3) Transparent Self-Pay Options: Because insurance prior-authorizations frequently cause weeks of delays or restrict dosing to sub-optimal levels, many of our patients choose our straightforward, affordable self-pay plans. HSA (Health Savings Account) and FSA (Flexible Spending Account) cards are also accepted for both visits and medications."
    },
    {
      q: "What should I bring to my first Low T evaluation?",
      category: "what-to-bring",
      tag: "What to Bring",
      a: "To help our medical team get a full clinical picture and expedite your care, please bring: (1) A valid government photo ID and health insurance card (if you wish to use insurance for diagnostic laboratory panels); (2) A complete list of all current prescription medications, over-the-counter medications, vitamins, and fitness supplements with dosages; (3) Copies of any previous blood work, hormone panels, or PSA (prostate-specific antigen) screenings completed in the past 12 months; (4) Notes or a list of specific symptoms you are experiencing, including fatigue patterns, mood changes, sleep quality, and libido changes; (5) Fasting preparation: We recommend arriving well-hydrated for morning blood work scheduled before 10:00 AM for the most accurate baseline readings."
    },
    {
      q: "What should I expect during my initial visit for testosterone therapy?",
      category: "expectations",
      tag: "First Visit Expectations",
      a: "Your initial visit is a comprehensive, discreet medical evaluation lasting approximately 30 to 45 minutes: (1) Intake & History: We discuss your primary symptoms, energy levels, sexual health, sleep apnea history, and cardiovascular wellness; (2) In-Depth Lab Draw: We collect blood samples for an advanced endocrine panel that includes Total Testosterone, Free Testosterone, Sensitive Estradiol (estrogen), Complete Blood Count (CBC/hematocrit), Comprehensive Metabolic Panel (CMP), and Prostate-Specific Antigen (PSA); (3) Physical Assessment: We check your blood pressure, heart rate, and vital signs; (4) Collaborative Review: Once lab results are returned from the clinical laboratory, our practitioner reviews each biomarker with you, explains what your numbers mean, and formulates a customized treatment protocol suited to your lifestyle."
    },
    {
      q: "How quickly will I start noticing results once beginning TRT?",
      category: "results",
      tag: "Results & Timeline",
      a: "While every man responds at his own pace, improvements typically unfold in predictable stages: • Weeks 1 to 3: Noticeable boost in daytime energy, improved mood, reduced brain fog, and better sleep quality; • Weeks 3 to 6: Restoration of morning erections, heightened sex drive (libido), improved erectile firmness, and greater workout stamina; • Weeks 6 to 12+: Enhanced fat loss (especially visceral belly fat), increased lean muscle mass, faster recovery from exercise, and improved insulin sensitivity. Long-term therapy supports improved bone density and cardiovascular health."
    },
    {
      q: "Is testosterone therapy safe, and how do you monitor for side effects?",
      category: "results",
      tag: "Safety & Monitoring",
      a: "When prescribed by a licensed medical provider and routinely monitored with laboratory blood draws, TRT has a strong safety profile. Our clinical protocol includes monitoring your Hematocrit (red blood cell count to prevent thick blood), PSA (prostate health), Estradiol (to prevent estrogen-related water retention or gynecomastia), and blood pressure at 6–8 weeks and every 3–6 months. If adjustments are ever needed, dosages are micro-calibrated or supportive therapies like an aromatase inhibitor or routine therapeutic phlebotomy are recommended."
    },
    {
      q: "Will testosterone therapy affect my fertility, and are there alternatives?",
      category: "expectations",
      tag: "Fertility & Alternatives",
      a: "Yes, standard exogenous testosterone signals your brain (pituitary gland) to pause its own luteinizing hormone (LH) and follicle-stimulating hormone (FSH) production, which can lower sperm count while on treatment. If you are planning to have children or wish to preserve natural fertility, please inform our provider! We offer fertility-preserving alternative protocols, including hCG (human chorionic gonadotropin) and Enclomiphene citrate, which stimulate your testicles to produce their own natural testosterone without compromising sperm production."
    },
    {
      q: "How often will I need follow-up appointments and blood work?",
      category: "expectations",
      tag: "First Visit Expectations",
      a: "After starting therapy, your first follow-up lab panel and consultation typically take place around 6 to 8 weeks to assess your body's hormone levels and evaluate symptom improvement. Once your ideal dosage is established and biomarkers are stabilized, follow-up evaluations and routine safety panels are scheduled every 3 to 6 months."
    }
  ];

  const filteredFaqs = faqCategory === "all" 
    ? faqs 
    : faqs.filter(f => f.category === faqCategory);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Testosterone Therapy" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Men's Health & Vitality</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Testosterone Replacement Therapy (TRT)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Testosterone is a vital molecular messenger that powers your brain, muscles, cardiovascular system, bones, and sexual performance. Understanding your levels and restoring hormonal balance is the single most effective step toward reclaiming your energy, strength, and confidence.
          </p>
        </motion.div>

        {/* The Influence Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {effects.map((effect, index) => (
            <motion.div
              key={effect.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-secondary/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {effect.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{effect.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {effect.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Low T Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Understanding "Low T"</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Natural testosterone levels begin to decline by approximately 1% each year starting around age 30. Stress, poor sleep, and weight gain accelerate this decline, creating a vicious cycle where low testosterone makes it harder to lose fat or maintain drive.
              </p>
              <p className="font-semibold text-slate-900">
                Common signs of declining testosterone include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Chronic Daytime Fatigue",
                  "Stubborn Abdominal Weight Gain",
                  "Loss of Libido & Erections",
                  "Mood Swings & Irritability",
                  "Decreased Mental Focus & Fog",
                  "Loss of Muscle Strength & Drive"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-sm font-semibold text-slate-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[40px] p-10 md:p-12 text-white relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Precision Medicine for Men</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              We don't believe in "one-size-fits-all" ranges. Our medical provider tests both Total and Free biologically active testosterone, fine-tuning your levels into the optimal physiological range for peak health, drive, and cardiovascular safety.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm italic text-slate-300">
                "Restoring testosterone to healthy physiological levels helps improve cardiovascular health, insulin sensitivity, bone density, and daily vitality."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars Overview: Insurance, What To Bring, First Visit */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-5">
              <CreditCard size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Insurance & Pricing</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Insurance can often cover diagnostic blood work. For ongoing therapy, we provide predictable, competitive self-pay pricing and HSA/FSA acceptance to eliminate prior-auth delays.
            </p>
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              Transparent, No Surprise Bills →
            </span>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-5">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">What To Bring Checklist</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Bring a valid photo ID, insurance card (for labs), current medication & supplement list, prior lab records from the past year, and arrive prepared for morning fasting blood work.
            </p>
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              Morning Blood Draw (Before 10 AM) →
            </span>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-secondary/30 transition-all">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-5">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">First Visit Expectations</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Expect a confidential 30-minute consultation, comprehensive morning hormone draw, customized treatment selection, and scheduled 6–8 week follow-ups to dial in peak results safely.
            </p>
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              Customized Dosing & Monitoring →
            </span>
          </div>
        </div>

        {/* Step-by-Step Patient Journey */}
        <div className="mt-20 bg-slate-50 rounded-[40px] p-8 md:p-14 border border-slate-100">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Step-by-Step Protocol</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-3">
              What To Expect On Your First Visit & Beyond
            </h2>
            <p className="text-slate-600 text-sm">
              Our clear, evidence-based process ensures you receive safe, medical-grade testosterone replacement therapy tailored precisely to your physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstVisitSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-secondary/40 font-mono mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto" id="faq">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={14} />
              Men's Health FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Frequently Asked Questions About Testosterone Therapy
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Answers regarding insurance coverage, what to bring, visit expectations, timeline for results, and safety monitoring.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: "all", label: "All Questions" },
                { id: "insurance", label: "Insurance Coverage" },
                { id: "what-to-bring", label: "What to Bring" },
                { id: "expectations", label: "First Visit Expectations" },
                { id: "results", label: "Results & Safety" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    faqCategory === cat.id
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Cards */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen 
                      ? "bg-white border-secondary/40 shadow-md shadow-secondary/5 ring-1 ring-secondary/20" 
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                          {faq.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "bg-secondary text-white rotate-180" : "bg-slate-200 text-slate-600"
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 md:p-14 bg-gradient-to-r from-secondary to-slate-900 rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-secondary/20"
        >
          <div className="relative z-10 max-w-2xl">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Take Control of Your Vitality & Health</h2>
            <p className="text-white/90 text-base mb-8 leading-relaxed">
              Testosterone levels can be evaluated through our quick, in-clinic morning blood test. Call our Elizabethton clinic today to schedule your comprehensive hormone evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:423-543-7000" 
                className="px-8 py-4 bg-white text-secondary rounded-xl font-bold text-center hover:bg-slate-100 transition-colors shadow-lg text-sm"
              >
                Call for Evaluation: (423) 543-7000
              </a>
              <Link 
                to="/erectile-dysfunction"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-center border border-white/20 transition-colors text-sm"
              >
                Explore ED Solutions
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        </motion.div>
      </div>
      <RegionalSEO />
    </div>
  );
}
