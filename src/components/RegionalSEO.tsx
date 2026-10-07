import { MapPin } from "lucide-react";

export default function RegionalSEO() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
            Tri-Cities DOT Physicals & Men's Health: Serving Elizabethton, Johnson City, Kingsport & Bristol
          </h2>
          
          <p>
            At Tri-Cities Health, we provide specialized care as a trusted destination for <strong>DOT Physicals, Erectile Dysfunction (ED) treatment, and Testosterone Replacement Therapy (TRT) throughout Johnson City, Tennessee; Kingsport, Tennessee; and Bristol, Tennessee/Virginia.</strong> Centrally located in Elizabethton, our clinic offers prompt appointments, discrete men's medical care, and certified exams for commercial drivers across Northeast Tennessee and Southwest Virginia.
          </p>
          
          <p>
            Whether you are a commercial truck driver on I-81 or I-26 needing a fast, certified DOT physical before your certificate expires, or a man experiencing low energy, libido decline, or erectile difficulties, our team provides an individualized, private medical approach.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-8 border-l-4 border-primary pl-4">
            Specialized Care for Drivers & Men's Vitality
          </h2>
          
          <p>
            Our medical practice is tailored to active adults and hard-working professionals. For long-haul truckers, local route operators, and bus drivers, our certified medical examiners perform complete physicals, urinalysis, vision tests, and issue official wallet cards so you avoid downtime. For men struggling with erectile dysfunction, we conduct comprehensive hormone and cardiovascular evaluations, prescribing targeted therapies including PDE5 inhibitors and custom penile injection protocols (Trimix).
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                Regional Accessibility
              </h3>
              <p className="text-sm text-slate-600">
                Centrally located to serve <strong>Elizabethton</strong>, <strong>Johnson City</strong>, <strong>Kingsport</strong>, and <strong>Bristol</strong> with ease.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                Community Driven
              </h3>
              <p className="text-sm text-slate-600">
                A local partner for families and professionals throughout the <strong>Tri-Cities, Tennessee/Virginia</strong> area.
              </p>
            </div>
          </div>

          <p>
            For those traveling from <strong>Kingsport, Tennessee</strong>, our Elizabethton location offers a professional alternative for primary care that prioritizes personal attention over bureaucratic hurdles. We also see many patients from <strong>Bristol, Tennessee/Virginia</strong> who value our expertise in DOT physicals and men's health, finding the short drive well worth the quality of care received.
          </p>
          
          <p>
            <strong>Tri-Cities Primary Care</strong> isn't just about treating symptoms; it's about fostering wellness in <strong>Johnson City</strong>, <strong>Kingsport</strong>, <strong>Bristol</strong>, and our home base in <strong>Elizabethton</strong>. We invite you to experience the difference that dedicated, local healthcare can make. From routine screenings and chronic disease management to specialized hormone replacement therapy and DOT certifications, we provide the full spectrum of care that the Tri-Cities deserves.
          </p>
          
          <p>
            If you are searching for a medical partner who understands the specific needs of residents in <strong>Johnson City, Tennessee</strong>, or the industrial heart of <strong>Kingsport, Tennessee</strong>, look no further. We are proud to be your neighborhood clinic, serving the entire region with the professionalism and compassion that has made Tri-Cities Health a leader in local primary care.
          </p>
          
          <p>
            Our clinic emphasizes the importance of community-based health. Whether you live in <strong>Bristol</strong>, commute through <strong>Kingsport</strong>, or work in <strong>Johnson City</strong>, our <strong>Elizabethton</strong> office is designed to be your primary healthcare destination. We offer flexible scheduling and a comprehensive suite of services, from family medicine to specialized wellness programs, all tailored to the Tri-Cities lifestyle. Join the many families across <strong>Tennessee and Virginia</strong> who trust Tri-Cities Primary Care for their medical needs. Our team is ready to help you achieve your health goals through personalized attention and evidence-based medical practices that have stood the test of time in our local area.
          </p>
        </div>
      </div>
    </section>
  );
}
