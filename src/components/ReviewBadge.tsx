import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function ReviewBadge() {
  const scrollToReviews = () => {
    const section = document.getElementById("reviews");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if not on home page
      window.location.href = "/#reviews";
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={scrollToReviews}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
      aria-label="View Google Reviews"
    >
      <div className="bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0">
        <Star size={20} fill="currentColor" />
      </div>
      <div className="flex flex-col items-start leading-none">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="font-bold text-slate-900 text-sm">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
          50+ Google Reviews
        </span>
      </div>
    </motion.button>
  );
}
