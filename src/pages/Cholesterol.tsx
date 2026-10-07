import { motion } from "motion/react";
import { Heart, Activity, Salad, Brain } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function Cholesterol() {
  const sections = [
    {
      title: "What is Cholesterol?",
      icon: <Activity className="text-primary" size={24} />,
      content: "Cholesterol is a waxy, fat-like substance that's found in all cells of the body. It comes from two sources: your body and food. Your body, and especially your liver, makes all the cholesterol you need and circulates it through the blood."
    },
    {
      title: "Risks of Excess",
      icon: <Heart className="text-primary" size={24} />,
      content: "Excess cholesterol can form plaque between layers of artery walls, making it harder for your heart to circulate blood. Plaque can break open and cause blood clots, potentially leading to a heart attack or stroke."
    },
    {
      title: "Managing Your Health",
      icon: <Salad className="text-primary" size={24} />,
      content: "Making healthy eating choices and increasing exercise are important first steps. For some people, cholesterol-lowering medication may also be needed to reduce the risk of heart attack and stroke."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Cholesterol Management" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Condition Library</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Cholesterol Management
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Understanding your cholesterol levels is a vital part of proactive heart health. We provide the testing and guidance needed to keep your cardiovascular system running optimally.
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
            <h2 className="text-3xl font-display font-bold mb-6">Protect Your Heart Health</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Managing cholesterol is a long-term commitment to your wellbeing. From nutrition counseling to medical management, we're here to help you reduce your risk profile.
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
