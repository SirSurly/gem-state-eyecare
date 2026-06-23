'use client';

import Link from 'next/link';

export default function GemStateEyecare() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl">
              👁️
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tight">Gem State Eyecare</div>
              <div className="text-xs text-gray-500 -mt-1">Your Eyes | Our Focus</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
            <Link href="/our-team" className="hover:text-blue-700 transition">Our Team</Link>
            <Link href="/locations" className="hover:text-blue-700 transition">Locations</Link>
            <Link href="/blog" className="hover:text-blue-700 transition">Blog</Link>
            <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:2083228439" 
              className="hidden sm:block font-semibold text-blue-900 hover:text-blue-700 transition"
            >
              (208) 322-8439
            </a>
            <Link 
              href="/contact" 
              className="btn-primary text-sm px-6 py-3"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6 tracking-widest">
            EST. 1971 • BOISE, IDAHO
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            Boise's Best Eyecare
          </h1>
          <p className="text-4xl md:text-5xl font-light tracking-tight text-blue-200 mb-8">
            Your Eyes | Our Focus
          </p>
          <p className="max-w-xl mx-auto text-xl text-blue-100 mb-10">
            Comprehensive eye exams, advanced treatments, and personalized care for the whole family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="btn-primary px-10 py-4 text-lg"
            >
              Explore Our Services
            </Link>
            <a 
              href="tel:2083228439" 
              className="border border-white/70 hover:bg-white/10 px-10 py-4 rounded-full text-lg font-semibold transition"
            >
              Call (208) 322-8439
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold tracking-tight mb-3">Complete Eye Care Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine exams to specialized treatments, we provide everything your eyes need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Comprehensive Eye Exams", desc: "Thorough vision and eye health evaluations using advanced diagnostic technology." },
            { title: "Injury & Infection Treatment", desc: "Prompt, expert care for eye injuries, infections, and urgent conditions." },
            { title: "Disease Diagnosis & Treatment", desc: "Management of glaucoma, macular degeneration, cataracts, and other conditions." },
            { title: "Laser Vision Correction", desc: "Co-management for LASIK and other refractive surgery procedures." },
            { title: "Contact Lens Fitting", desc: "Custom fittings for soft, rigid, and specialty contact lenses." },
            { title: "Ocular Aesthetics", desc: "Specialized treatments to improve the appearance and health of your eyes." },
          ].map((service, index) => (
            <div key={index} className="group border border-gray-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-sm transition-all bg-white">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                👁️
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              <Link href="/services" className="inline-block mt-6 text-blue-700 font-medium group-hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / CTA Banner */}
      <section className="bg-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to protect and improve your vision?</h2>
          <p className="text-xl text-blue-200 mb-8">Call today to schedule your appointment.</p>
          <a href="tel:2083228439" className="inline-block bg-white text-blue-950 font-semibold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition">
            Call (208) 322-8439
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-10">
          <div>
            <div className="text-white font-bold text-xl mb-2">Gem State Eyecare</div>
            <div className="text-sm">Serving Boise since 1971</div>
          </div>
          <div>
            <div className="font-medium text-white mb-3 text-sm tracking-widest">ADDRESS</div>
            <div className="text-sm leading-relaxed">
              7337 W. Northview St.<br />
              Boise, ID 83704
            </div>
          </div>
          <div>
            <div className="font-medium text-white mb-3 text-sm tracking-widest">HOURS</div>
            <div className="text-sm leading-relaxed">
              Monday – Friday<br />
              8:30am – 5:00pm<br />
              Closed 12:00pm – 1:00pm for lunch<br />
              Saturday &amp; Sunday: Closed
            </div>
          </div>
          <div>
            <div className="font-medium text-white mb-3 text-sm tracking-widest">CONTACT</div>
            <a href="tel:2083228439" className="block text-white hover:text-blue-400 text-lg font-semibold mb-1">
              (208) 322-8439
            </a>
            <div className="text-sm">Boise, Idaho</div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-14 pt-8 border-t border-gray-800">
          © {new Date().getFullYear()} Gem State Eyecare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
