import { motion } from "motion/react";
import { Phone, MapPin, Clock, Printer, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <p className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Professional Local Care</p>
            <p className="text-lg text-slate-600 mb-12">
              To protect your privacy and ensure HIPAA compliance, we handle all patient inquiries and scheduling via phone, fax, or in-person visits.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-600">Tri-Cities Primary Care Elizabethton TN</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <a href="tel:423-543-7000" className="text-slate-600 hover:text-primary transition-colors">(423) 543-7000</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Printer size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Fax</p>
                  <p className="text-slate-600">(423) 543-7002</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Hours</p>
                  <p className="text-slate-600">Tuesday: 8:30 AM – 5:00 PM</p>
                  <p className="text-slate-600">Thursday: 8:30 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0 bg-slate-900 p-8 lg:p-12 rounded-[40px] text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Secure Communication</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Your health information is protected by federal law (HIPAA). To maintain the highest level of security for your medical records and personal data, we do not accept patient information through online forms.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">New Patients</h4>
                  <p className="text-slate-400 text-sm">Please call our office to schedule your initial consultation. You can download our patient forms using the link in the navigation menu above.</p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Medical Records</h4>
                  <p className="text-slate-400 text-sm">Transferring records can be facilitated via our secure Fax line: (423) 543-7002.</p>
                </div>
              </div>

              <a 
                href="tel:423-543-7000" 
                className="mt-10 block w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Call (423) 543-7000 to Schedule
              </a>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 min-h-[450px] relative z-0 flex flex-col md:flex-row"
        >
          <div className="md:w-[65%] h-[400px] md:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.147285149495!2d-82.25143392419736!3d36.35711697237618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a7d494a388a4d%3A0x41c642ef208c0b5f!2sTri-Cities%20Health!5e0!3m2!1sen!2sus!4v1715871234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              allow="fullscreen"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tri-Cities Health Map"
            ></iframe>
          </div>
          <div className="md:w-[35%] bg-slate-900 p-8 lg:p-12 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-display font-bold mb-4">Tri-Cities Health Primary Care</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-slate-300">
                  2208 W. Elk Avenue<br />
                  Elizabethton, TN 37643
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:423-543-7000" className="text-slate-300 hover:text-white transition-colors">
                  423-543-7000
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
