import { motion } from "motion/react";
import { Activity, Beaker, Leaf, ShieldAlert } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function Fibromyalgia() {
  const sections = [
    {
      title: "Symptoms & Impact",
      icon: <ShieldAlert className="text-primary" size={24} />,
      content: "Fibromyalgia affects the muscles and soft tissue. Common symptoms include chronic muscle pain, fatigue, sleep problems, and painful tender joints commonly known as trigger points."
    },
    {
      title: "Relief & Management",
      icon: <Beaker className="text-primary" size={24} />,
      content: "While challenging, fibromyalgia symptoms can be relieved through targeted medications, tailored lifestyle changes, and professional stress management techniques."
    },
    {
      title: "Holistic Care",
      icon: <Leaf className="text-primary" size={24} />,
      content: "Our approach focuses on improving your quality of life by addressing both the physical pain and the systemic factors that contribute to fibromyalgia flare-ups."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Fibromyalgia Treatment" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Chronic Pain Management</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Fibromyalgia Care
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Living with chronic pain and fatigue requires a compassionate, multidimensional treatment plan. We help you identify trigger points and implement strategies to reclaim your comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-50 rounded-[32px] border border-slate-100"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary rounded-[40px] text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">Find Relief Today</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Don't let chronic pain define your daily life. Schedule a comprehensive evaluation to discuss your symptoms and develop a management plan that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:423-543-7000" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-center hover:bg-slate-100 transition-colors">
                Call to Schedule: (423) 543-7000
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 -skew-x-12 translate-x-1/2" />
        </motion.div>
      </div>
      <RegionalSEO />
    </div>
  );
}
