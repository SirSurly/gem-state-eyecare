'use client';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12">We provide comprehensive eye care for patients of all ages.</p>

        <div className="prose max-w-none text-lg text-gray-700">
          <p>At Gem State Eyecare, we offer a full range of services including comprehensive eye exams, treatment of eye injuries and infections, diagnosis and management of eye diseases, contact lens fittings, and co-management for laser vision correction.</p>
          <p className="mt-6">Our experienced team is dedicated to providing personalized, high-quality care in a comfortable environment.</p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary inline-block">Schedule an Appointment</Link>
        </div>
      </div>
    </div>
  );
}
