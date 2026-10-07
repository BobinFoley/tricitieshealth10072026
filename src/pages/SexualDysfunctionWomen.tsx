import { motion } from "motion/react";
import { Heart, Brain, Activity, UserCircle } from "lucide-react";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";

export default function SexualDysfunctionWomen() {
  const sections = [
    {
      title: "Common Struggle",
      icon: <Activity className="text-primary" size={24} />,
      content: "Approximately 40 million women in the United States experience some form of sexual dysfunction. It is a common health concern that impacts millions of women across various life stages."
    },
    {
      title: "Types of Dysfunction",
      icon: <Heart className="text-primary" size={24} />,
      content: "Symptoms can range from low sexual desire to the inability to achieve orgasm, or even physical pain during intercourse. Each individual case requires a specific, personalized approach."
    },
    {
      title: "Holistic Impact",
      icon: <Brain className="text-primary" size={24} />,
      content: "Sexual health affects multiple aspects of a woman's life, including psychological well-being, self-confidence, and the overall quality of the relationship with their partner."
    }
  ];

  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Sexual Dysfunction Treatment" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Women's Health</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-6 leading-tight">
            Sexual Dysfunction in Women
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Sexual health is a fundamental part of overall well-being. We provide a supportive, judgment-free environment to address intimate health concerns and help you find solutions that restore balance to your life.
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
              <UserCircle className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6">Professional, Discreet Care</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              If you are one of the millions of women looking for answers to sexual health concerns, we are here for you. Schedule a consultation to discuss your symptoms and explore effective treatment options tailored to your body.
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
