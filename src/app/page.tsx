import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories, products, formatPrice } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.filter(p => 
    ['kesh-vijaya', 'nidra-vijaya', 'pragya-vijaya', 'deep-tissue-recovery'].includes(p.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-900 text-white py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            World-Class Ayurvedic Cannabis Products
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 mb-8">
            From Bharat. Schedule E(1) compliant. Prescription required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919244107423?text=Hi,%20I'm%20interested%20in%20PRE%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 text-sm"
            >
              💬 WhatsApp Order
            </a>
            <Link
              href="/hair-care"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-full transition-all text-sm"
            >
              Browse Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Product Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {categories.map(cat => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{cat.description}</p>
                <span className="text-xs text-emerald-700 font-semibold uppercase tracking-wide group-hover:underline">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map(product => (
              <Link
                key={product.id}
                href={`/${product.category}/${product.id}`}
                className="group block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {product.tags[0] && (
                  <span className="inline-block bg-emerald-800 text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-semibold tracking-wide mb-3">
                    {product.tags[0]}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.shortDescription}</p>
                <span className="text-lg font-bold text-emerald-700">{formatPrice(product.price)}</span>
                <span className="text-xs text-gray-400 ml-1">+GST</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-emerald-700">
            <h4 className="font-bold text-gray-900 mb-2">🏥 Schedule E(1) Drug</h4>
            <p className="text-sm text-gray-600">
              All products are Ayurvedic medicines under the Drugs & Cosmetics Act, 1940. Prescription required.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-emerald-700">
            <h4 className="font-bold text-gray-900 mb-2">🔬 Cryogenic Extraction</h4>
            <p className="text-sm text-gray-600">
              Our Vijaya Extract is produced using cryogenic ethanol extraction for maximum purity and potency.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-emerald-700">
            <h4 className="font-bold text-gray-900 mb-2">📦 Made in Bharat</h4>
            <p className="text-sm text-gray-600">
              Manufactured by Aagya Enterprises, Neemuch (M.P.). World-class quality from India.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
