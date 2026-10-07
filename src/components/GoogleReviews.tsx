import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  date: string;
  stars: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Jimini Cricket",
    date: "4 months ago",
    stars: 5,
    text: "",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKp0tN2bj7tvNI-SSk6hw41I0UqMWkeUp_o46MrIWqOzpxvPQ=s1920-c-rp-mo-br100"
  },
  {
    name: "Mike Ensor",
    date: "8 months ago",
    stars: 5,
    text: "Great service, quality healthcare",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUFZxC20Vx7VlRs0LkmpXCdn7ZvEJpgZVyMBXqOF8OJTdRpuFga=s1920-c-rp-mo-br100"
  },
  {
    name: "Devin Renshaw",
    date: "9 months ago",
    stars: 5,
    text: "Easy to make an appointment and fast. Definitely recommend this location if you're in Carter County.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLgZtPZXjmWXcmA0rlndOrV6Ru_JC6zWBQdfForuXzAu7mZvA=s1920-c-rp-mo-br100"
  },
  {
    name: "Alan Shepard",
    date: "10 months ago",
    stars: 5,
    text: "Great folks ! Always professional and friendly. Been getting my D.O.T. physical here for years, and I will keep on returning for any health needs in the future !!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKhx0ysyys-39cjVrACFLlAB_MpOFoXoCulSAt3ypyLFpMEFA=s1920-c-rp-mo-br100"
  },
  {
    name: "Bryce McKinney",
    date: "10 months ago",
    stars: 5,
    text: "Excellent service, very friendly and professional staff. I definitely recommend them for DOT physicals. They get you in and out. Thank you to all at Tri cities health",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL-1ggDasgRGLNJJdHzUtu0ycj6DPGjYfx-U6ANa-y_i3X53A=s1920-c-rp-mo-br100"
  },
  {
    name: "Jamie Combs",
    date: "a year ago",
    stars: 5,
    text: "Can't say enough positive things about these folks, from front desk to care givers",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ3THADHNcn5oWh5ekPjzJKBc7q8WXlzfVBBhEW0cMxtnh_Qg=s1920-c-rp-mo-ba12-br100"
  },
  {
    name: "Jeff",
    date: "2 years ago",
    stars: 5,
    text: "I highly recommend Kim and Rob. Here you are not treated like a number and they truly care about every person that walks through the door.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKGvsVolv2WmEWQdo1B5ed6v69bWiRZUeIOIcIaTrLie6UiyQ=s1920-c-rp-mo-br100"
  },
  {
    name: "Michael Hart",
    date: "2 years ago",
    stars: 5,
    text: "",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXaTEvOgnNskfgF-Do6gG_B6dI6CiFEGu0tglUTxqSUke8K20q5=s1920-c-rp-mo-br100"
  }
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <p className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Patient Experiences</p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-bold text-slate-900">4.9/5 Rating on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.visibility = 'hidden';
                  }}
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h4>
                  <p className="text-slate-400 text-xs mt-1">{review.date}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                {review.text ? `"${review.text}"` : "Patient left a 5-star rating without a comment."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
