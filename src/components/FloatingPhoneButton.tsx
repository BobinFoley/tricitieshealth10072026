import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function FloatingPhoneButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <a
        href="tel:423-543-7000"
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors relative"
        aria-label="Call Tri-Cities Health"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-primary rounded-full -z-10"
        />
        <Phone size={24} fill="currentColor" />
      </a>
    </motion.div>
  );
}
