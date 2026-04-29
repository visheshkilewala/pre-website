import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { smokableBlends, formatPrice } from '@/data/products';
import Link from 'next/link';

export default function SmokablePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory="smokable" />

      <section className="bg-gradient-to-br from-stone-950 to-stone-800 text-white py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          🌿 Dhum Vijaya
        </h1>
        <p className="text-sm text-stone-400">Smokable Cannabis Range | Shodhit (Purified) Leaf Blends</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link href="/" className="text-sm text-emerald-700 font-medium hover:underline mb-6 inline-block">
          ← Back to All Products
        </Link>

        {/* What is Shodhit? */}
        <div className="bg-emerald-50 border-l-4 border-emerald-700 rounded-lg p-5 mb-8">
          <h4 className="font-bold text-gray-900 mb-2">🌿 What is Shodhit Cannabis Leaf?</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Traditional Ayurvedic purification process — cleaned with cow milk, washed, sun-dried.
            Whole dried leaf material (NOT extract). Natural cannabinoid content: 0.5-1%.
            Milder than extracts. For traditional smoking preparations.
          </p>
        </div>

        {/* Blends Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {smokableBlends.map(blend => (
            <div key={blend.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {blend.name}
              </h3>
              <p className="text-xs text-gray-400 italic mb-3">{blend.sanskritName}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{blend.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {blend.ingredients.map(ing => (
                  <span key={ing} className="bg-stone-100 text-stone-700 text-[11px] px-2.5 py-1 rounded-full border border-stone-200">
                    {ing}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-emerald-700">{formatPrice(blend.price)}</span>
                  <span className="text-xs text-gray-400 ml-1">+GST</span>
                </div>
                <span className="text-xs text-gray-500">{blend.size} • {blend.cannabinoidContent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="text-red-700 font-bold mb-2">⚠️ Important Warnings</h4>
          <ul className="text-xs text-red-600 space-y-1 columns-1 sm:columns-2">
            <li>Schedule E(1) Drug — Prescription required</li>
            <li>Smoking carries health risks</li>
            <li>Not for pregnant/lactating women</li>
            <li>Not for children under 18</li>
            <li>Do not drive after use</li>
            <li>Not for recreational use</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
