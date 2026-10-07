import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileText, ChevronRight } from "lucide-react";
import PageTitle from "../components/PageTitle";

const pages = [
  { name: "Home", path: "/" },
  { name: "DOT Physicals", path: "/dot-physicals" },
  { name: "Adrenal Fatigue", path: "/adrenal-fatigue" },
  { name: "Anxiety", path: "/anxiety" },
  { name: "Cholesterol", path: "/cholesterol" },
  { name: "Erectile Dysfunction", path: "/erectile-dysfunction" },
  { name: "Fibromyalgia", path: "/fibromyalgia" },
  { name: "Low Libido", path: "/low-libido" },
  { name: "Lyme Disease", path: "/lyme-disease" },
  { name: "Sexual Dysfunction (Women)", path: "/sexual-dysfunction-women" },
  { name: "Testosterone Therapy", path: "/testosterone-therapy" },
];

export default function Sitemap() {
  return (
    <div className="pt-[120px] pb-20 bg-white">
      <PageTitle title="Sitemap" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sitemap</h1>
          <p className="text-lg text-slate-600">
            A comprehensive list of all pages available on Tri-Cities Health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
              <FileText className="text-primary" size={24} />
              Main Pages
            </h2>
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">
                      {page.name}
                    </span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-all translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl h-fit border border-slate-100">
            <h2 className="text-xl font-bold mb-4 text-slate-900">Need Help?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you can&apos;t find what you&apos;re looking for, please don&apos;t hesitate to contact us directly.
            </p>
            <a
              href="tel:423-543-7000"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Call (423) 543-7000
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
