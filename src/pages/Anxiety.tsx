import { motion } from "motion/react";
import { Brain, Heart, Sun, Sparkles } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function Anxiety() {
  const sections = [
    {
      title: "Understanding Anxiety",
      icon: <Brain className="text-primary" size={24} />,
      content: "Most people feel anxious or depressed at times. Losing someone close, getting fired from a job, going through a divorce, and other difficult situations can lead a person to feel sad, lonely, scared, nervous, or anxious. These feelings are normal reactions to life's stressors."
    },
    {
      title: "When it Becomes Chronic",
      icon: <Heart className="text-primary" size={24} />,
      content: "Some people experience these feelings daily or nearly daily for no apparent reason, making it difficult to carry on with normal everyday functioning. This may indicate an anxiety disorder, depression, or both."
    },
    {
      title: "Treatable & Managed",
      icon: <Sun className="text-primary" size={24} />,
      content: "The good news is that these disorders are both treatable, separately and together. We offer comprehensive support to help you find balance and reclaim your daily functioning."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Anxiety Treatment" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Condition Library</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Anxiety & Depression
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            While stressors are a natural part of life, persistent feelings of worry or sadness shouldn't hold you back. We specialize in identifying the root causes and providing effective treatment plans.
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
          className="mt-20 p-12 bg-slate-900 rounded-[40px] text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6">Support for Your Mental Wellbeing</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              If you find that anxiety or low mood is impacting your daily life, you don't have to face it alone. Schedule a consultation to discuss personalized treatment options in a supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:423-543-7000" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-center hover:bg-primary/90 transition-colors">
                Call to Schedule: (423) 543-7000
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/10 -skew-x-12 translate-x-1/2" />
        </motion.div>
      </div>
      <RegionalSEO />
    </div>
  );
}
