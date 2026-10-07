import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Truck, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  ShieldAlert, 
  Calendar, 
  Phone, 
  Stethoscope, 
  FileCheck2,
  AlertCircle
} from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

export default function DotPhysicals() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("all");

  const faqs = [
    {
      q: "Does health insurance cover a DOT physical exam?",
      category: "insurance",
      tag: "Insurance Coverage",
      a: "No. Standard health insurance plans—including private commercial coverage, Medicare, and Medicaid—do not cover DOT medical exams. The Federal Motor Carrier Safety Administration (FMCSA) classifies a DOT physical as an employment/regulatory certification rather than medically necessary care for an illness or injury. However, many motor carriers and commercial employers pay for or reimburse the cost of the exam for their drivers. We accept all major credit/debit cards, HSA/FSA cards, and provide you with an itemized receipt for employer reimbursement or tax deductions."
    },
    {
      q: "What do I need to bring with me to my DOT physical?",
      category: "what-to-bring",
      tag: "What to Bring",
      a: "To ensure a smooth, same-day certification with no delays, please bring the following items: (1) Valid government-issued driver’s license or commercial driver photo ID; (2) Corrective glasses, contact lenses, or hearing aids if you use them while driving (vision will be tested with and without corrective lenses); (3) Complete list of all current prescription medications, dosages, and prescribing physician details; (4) If you have Sleep Apnea: A 30 to 90-day CPAP compliance report from your machine showing average usage of at least 4 hours/night on 70% of days; (5) If you take medication for diabetes, high blood pressure, or heart conditions: Recent A1C lab results or a medical clearance note from your primary doctor or cardiologist; (6) Come with a full bladder as an in-office dipstick urinalysis is mandatory for all drivers."
    },
    {
      q: "What should I expect during my first DOT physical visit?",
      category: "expectations",
      tag: "First Visit Expectations",
      a: "Our certified FMCSA medical examiners make the entire process fast and stress-free (usually 30 to 45 minutes total). Here is what happens step-by-step: (1) Paperwork: Arrive 5 to 10 minutes early to complete Driver Section 1 of the official FMCSA Medical Examination Report Form (MCSA-5875); (2) In-Office Urinalysis: We check for protein, sugar (glucose), blood, and specific gravity to assess kidney function and underlying health (this is a medical health screening, not a drug test); (3) Vital Signs & Screening: We test your blood pressure, pulse rate, visual acuity (must be at least 20/40 in each eye and combined, with or without glasses), color perception (red/green/amber), and hearing; (4) Clinical Physical Exam: The examiner evaluates your heart, lungs, neurological responses, musculoskeletal movement, and general health; (5) Immediate Certificate: Upon passing, you receive your official DOT Medical Examiner's Certificate (MCSA-5876 wallet card) in hand before you leave, and we transmit your results directly to the FMCSA National Registry."
    },
    {
      q: "What are the blood pressure requirements to pass a DOT physical?",
      category: "medical",
      tag: "Medical Standards",
      a: "Under FMCSA regulations: (1) Under 140/90 mmHg qualifies you for a standard 2-year certification (if no other limiting medical conditions exist); (2) Stage 1 (140-159 / 90-99 mmHg) qualifies you for a 1-year certification; (3) Stage 2 (160-179 / 100-109 mmHg) qualifies you for a one-time, 3-month temporary certification to allow you to start treatment with your doctor; (4) Stage 3 (180/110 mmHg or higher) is disqualifying until your blood pressure is brought down below 140/90. Pro Tip: Avoid caffeine, energy drinks, tobacco/nicotine, and high-sodium foods the morning of your visit to prevent artificially high blood pressure readings."
    },
    {
      q: "Can I get certified if I have diabetes or take insulin?",
      category: "medical",
      tag: "Medical Standards",
      a: "Yes. Drivers with diabetes controlled by diet or oral medications (such as Metformin) can be certified for up to 1 year, provided blood sugar is well-controlled. For drivers treated with insulin, the FMCSA now has a streamlined process: you will need to have your treating physician complete the Insulin-Treated Diabetes Mellitus (ITDM) Assessment Form (Form MCSA-5870) within 45 days prior to your DOT exam, showing safe blood glucose management."
    },
    {
      q: "Do you accept walk-ins, or do I need an appointment?",
      category: "expectations",
      tag: "First Visit Expectations",
      a: "We welcome both same-day appointments and walk-ins during clinic hours. However, calling ahead at (423) 543-7000 or booking a time helps us ensure that your paperwork is ready the moment you walk through the door so there is zero wait time and you get back on the road fast."
    },
    {
      q: "How long is my DOT medical certificate valid for?",
      category: "expectations",
      tag: "Certification",
      a: "If you have no medical conditions that require ongoing monitoring, your DOT Medical Card is issued for the maximum duration of 2 years (24 months). If you have conditions such as hypertension, diabetes, or sleep apnea, the FMCSA mandates periodic monitoring, and your card will typically be issued for 1 year or, in transitional situations, 3 months."
    }
  ];

  const filteredFaqs = faqCategory === "all" 
    ? faqs 
    : faqs.filter(f => f.category === faqCategory);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-[120px] pb-20">
      <PageTitle title="DOT Physicals" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              <Truck size={18} />
              DOT Certified National Registry
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Fast, Certified DOT Physicals in Elizabethton, TN
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              You're always on the go, traveling countless miles and keeping our country moving. When you need your commercial driver medical exam, you shouldn't have to deal with long hospital delays or complicated red tape. Tri-Cities Health provides fast, compliant, and driver-friendly DOT physicals so you can stay certified and on schedule.
            </p>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Fast, In-and-Out Service</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Time is money for commercial drivers. We respect your schedule with minimal wait times, immediate digital submission to the FMCSA registry, and laminated wallet cards in hand.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">What our certified exam covers:</h3>
              <ul className="grid gap-3">
                {[
                  "Complete driver medical history review",
                  "In-office dipstick urinalysis (kidney & glucose screening)",
                  "Vision (acuity & color) and whispered hearing test",
                  "Blood pressure & pulse rate assessment",
                  "Full physical examination by FMCSA Certified Medical Examiner",
                  "Official DOT Certificate (Form MCSA-5876) issued on the spot",
                  "Same-day submission to the National Registry of Certified Medical Examiners"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-slate-700 text-sm">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-primary rounded-[40px] p-8 md:p-12 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Driver Checklist & Hours</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Arrive 5–10 Minutes Early</h4>
                    <p className="text-blue-100 text-xs mt-0.5">
                      Speed up your appointment by filling out the driver’s section of the Medical Examination Report prior to your examination.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Insurance & Payment Notice</h4>
                    <p className="text-blue-100 text-xs mt-0.5">
                      <strong>Health insurance does not cover DOT physicals</strong>. Employer accounts, credit, debit, and HSA/FSA cards are accepted. Itemized receipts provided.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">What To Bring</h4>
                    <p className="text-blue-100 text-xs mt-0.5">
                      Bring your driver's license, eyewear/hearing aids, medication list, and CPAP compliance logs if diagnosed with sleep apnea.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <p className="text-xs uppercase tracking-widest font-bold mb-1 text-blue-200">Clinic Address</p>
                <p className="text-lg font-medium">1503 West Elk Avenue, Elizabethton, TN 37643</p>
                <p className="text-xs text-blue-100 mt-1">Convenient truck and trailer parking accessible nearby.</p>
                <a 
                  href="tel:423-543-7000" 
                  className="mt-4 block w-full py-3.5 bg-white text-primary rounded-xl font-bold text-center hover:bg-blue-50 transition-colors shadow-md text-sm"
                >
                  Call to Schedule: (423) 543-7000
                </a>
              </div>
            </div>

            <div className="aspect-video rounded-[40px] overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/tri-cities-health/DOT-Physicals.jpeg"
                alt="DOT Physicals for commercial drivers in Elizabethton TN"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs font-semibold">
                  Serving CDL, Box Truck, Bus, and Commercial Fleet Drivers across Northeast Tennessee
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pillars Grid: Insurance, What To Bring, Expectations */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Insurance & Fees</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              DOT physicals are non-covered occupational tests under commercial health insurance. We offer flat, transparent rates, accept employer vouchers, and provide receipts for tax or reimbursement use.
            </p>
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              Flat, Affordable Self-Pay Rates →
            </span>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">What To Bring Checklist</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Bring your driver's license, prescription glasses/contacts, current prescription list, and CPAP compliance logs or specialist clearance notes for chronic conditions to avoid delays.
            </p>
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              Fast Same-Day Clearance →
            </span>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">First Visit Expectations</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Expect a swift 30–45 minute comprehensive examination covering blood pressure, vision, hearing, urinalysis, and physical health, walking out with your official card in hand.
            </p>
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              Laminated Wallet Card Issued Same Day →
            </span>
          </div>
        </div>

        {/* Detailed FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto" id="faq">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={14} />
              Driver Questions Answered
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
              Frequently Asked Questions About DOT Physicals
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Clear answers regarding insurance coverage, what documentation to bring, medical standards, and what to expect during your certification visit.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { id: "all", label: "All Questions" },
                { id: "insurance", label: "Insurance Coverage" },
                { id: "what-to-bring", label: "What to Bring" },
                { id: "expectations", label: "First Visit Expectations" },
                { id: "medical", label: "Medical Standards" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    faqCategory === cat.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen 
                      ? "bg-white border-primary/40 shadow-md shadow-primary/5 ring-1 ring-primary/20" 
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
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {faq.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-slate-200 text-slate-600"
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

          {/* Prompt banner for drivers */}
          <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-lg text-white">Have a specific medical condition or question?</h4>
              <p className="text-xs text-slate-300">
                Give us a call prior to your appointment so we can advise you exactly what documentation to bring.
              </p>
            </div>
            <a 
              href="tel:423-543-7000"
              className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors shadow-lg shadow-primary/20"
            >
              <Phone size={15} />
              Call (423) 543-7000
            </a>
          </div>
        </div>
      </div>
      <RegionalSEO />
    </div>
  );
}
