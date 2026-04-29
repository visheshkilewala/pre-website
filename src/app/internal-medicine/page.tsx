import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function InternalMedicinePage() {
  const products = getProductsByCategory('internal-medicine');
  const gummies = products.filter(p => p.subcategory === 'Gummies');
  const tinctures = products.filter(p => p.subcategory === 'Tincture');
  const others = products.filter(p => !['Gummies', 'Tincture'].includes(p.subcategory || ''));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory="internal-medicine" />

      <section className="bg-gray-950 text-white py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          💊 Internal Medicine
        </h1>
        <p className="text-sm text-gray-400">{products.length} Products | Gummies, Tinctures, Shots & Honey Sticks</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link href="/" className="text-sm text-emerald-700 font-medium hover:underline mb-6 inline-block">
          ← Back to All Products
        </Link>

        {gummies.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Gummies</h3>
            <div className="space-y-4 mb-8">
              {gummies.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {tinctures.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Tinctures & Drops</h3>
            <div className="space-y-4 mb-8">
              {tinctures.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {others.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Other Formats</h3>
            <div className="space-y-4">
              {others.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
