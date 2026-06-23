import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-10">We'd love to hear from you. Call or visit us today.</p>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
          <div className="space-y-6 text-lg">
            <div>
              <div className="font-semibold text-sm tracking-widest text-gray-500 mb-1">PHONE</div>
              <a href="tel:2083228439" className="text-3xl font-semibold text-blue-900 hover:underline">(208) 322-8439</a>
            </div>
            <div>
              <div className="font-semibold text-sm tracking-widest text-gray-500 mb-1">ADDRESS</div>
              <div>7337 W. Northview St.<br />Boise, ID 83704</div>
            </div>
            <div>
              <div className="font-semibold text-sm tracking-widest text-gray-500 mb-1">HOURS</div>
              <div>Monday – Friday, 8:30am – 5:00pm (closed 12–1pm for lunch)</div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/" className="text-blue-700 font-medium hover:underline">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
