import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function HairCarePage() {
  const products = getProductsByCategory('hair-care');
  const hairProducts = products.filter(p => p.subcategory !== 'Intimate Wash');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory="hair-care" />

      {/* Hero */}
      <section className="bg-gray-950 text-white py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          🧴 Hair & Body Care
        </h1>
        <p className="text-sm text-gray-400">{products.length} Products | Vijaya-Infused Ayurvedic Formulations</p>
      </section>

      {/* Products */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link href="/" className="text-sm text-emerald-700 font-medium hover:underline mb-6 inline-block">
          ← Back to All Products
        </Link>

        <div className="space-y-4">
          {hairProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
