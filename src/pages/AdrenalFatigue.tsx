import { motion } from "motion/react";
import { Activity, Thermometer, Battery, Brain } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function AdrenalFatigue() {
  const sections = [
    {
      title: "Understanding Adrenal Function",
      icon: <Activity className="text-primary" size={24} />,
      content: "The adrenal glands, two triangle-shaped glands that sit over the kidneys, are responsible for regulating the body's response to stress by controlling the hormones released during stress. When stress becomes chronic or is not well managed, the adrenal glands are unable to function optimally."
    },
    {
      title: "The Role of Cortisol",
      icon: <Thermometer className="text-primary" size={24} />,
      content: "Cortisol is the main adrenal hormone and it is used to manage stress. The highest amount of cortisol is secreted by the adrenals in the morning to get us going, with levels decreasing throughout the day."
    },
    {
      title: "Hormonal Triggers",
      icon: <Battery className="text-primary" size={24} />,
      content: "The adrenals secrete cortisol in response to low blood sugar, stress, exercise, and excitement."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Adrenal Fatigue" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Condition Library</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Adrenal / Thyroid Fatigue
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Post Menopause Stress and adrenal fatigue frequently occur at the same time. We help you understand and manage the complex relationship between your hormones and stress levels.
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
            <h2 className="text-3xl font-display font-bold mb-6">Take Control of Your Vitality</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              If you're feeling chronically exhausted, stressed, or unable to focus, your adrenal health may play a major role. Schedule a consultation to discuss comprehensive hormone testing and wellness planning.
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
