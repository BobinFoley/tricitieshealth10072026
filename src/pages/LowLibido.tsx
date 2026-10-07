import { motion } from "motion/react";
import { Heart, Brain, Activity, UserCheck } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function LowLibido() {
  const sections = [
    {
      title: "Understanding Low Libido",
      icon: <Activity className="text-primary" size={24} />,
      content: "Low Libido is a very common complaint among women. Simply defined as low sexual desire, it can be triggered by hormonal changes, family obligations, work pressure, and chronic stress."
    },
    {
      title: "Emotional & Social Impact",
      icon: <Heart className="text-primary" size={24} />,
      content: "Over time, decreased desire can lead to emotional distress, depression, and strain in relationships. Seeking answers is an important step in regaining your sexual health and confidence."
    },
    {
      title: "Personalized Evaluation",
      icon: <UserCheck className="text-primary" size={24} />,
      content: "Dr. McMurtrey, FNP-C, provides a thorough review of your medical history and a complete evaluation to choose the best treatment for your specific situation."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Low Libido Treatment" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Women's Health</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Low Libido & Sexual Health
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Reclaiming your sexual vitality is a vital part of your overall wellbeing. We offer a safe, professional environment to discuss your concerns and find effective solutions.
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
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Brain className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6">Expert Care for Women</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Dr. McMurtrey specializes in helping women obtain the drive and health they deserve. Schedule a private consultation to discuss your symptoms and start your journey toward balance.
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
