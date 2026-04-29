import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function WellnessPage() {
  const products = getProductsByCategory('wellness');
  const painRelief = products.filter(p => ['Pain Relief', 'Roll-On'].includes(p.subcategory || ''));
  const skinCare = products.filter(p => p.subcategory === 'Skin Care');
  const womensHealth = products.filter(p => p.subcategory === "Women's Health");
  const intimate = products.filter(p => p.subcategory === 'Intimate Wash');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory="wellness" />

      <section className="bg-gray-950 text-white py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          ✨ Wellness Products
        </h1>
        <p className="text-sm text-gray-400">{products.length} Products | Targeted Relief Through Ayurvedic Wisdom</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link href="/" className="text-sm text-emerald-700 font-medium hover:underline mb-6 inline-block">
          ← Back to All Products
        </Link>

        {painRelief.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Pain Relief & Recovery</h3>
            <div className="space-y-4 mb-8">
              {painRelief.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {skinCare.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Skin & Beauty</h3>
            <div className="space-y-4 mb-8">
              {skinCare.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {womensHealth.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Women&apos;s Health</h3>
            <div className="space-y-4 mb-8">
              {womensHealth.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {intimate.length > 0 && (
          <>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mt-8 mb-4">Intimate Care</h3>
            <div className="space-y-4">
              {intimate.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
