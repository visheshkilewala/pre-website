import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function PlantCarePage() {
  const products = getProductsByCategory('plant-care');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory="plant-care" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-900 text-white py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          🌱 Hempopulent Plant Care
        </h1>
        <p className="text-sm text-green-300">Organic Bio-Stimulants from Cold Pressed Hemp Seed Meal</p>
        <p className="text-xs text-green-400 mt-2 max-w-2xl mx-auto px-4">
          Suitable for Lawns, Kitchen Gardens, Terrace Gardens, Nurseries, Farmers & Hobbyists.
          Superior plant nutrition — an all-in-one booster complete in itself.
        </p>
      </section>

      {/* Why Hemp Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link href="/" className="text-sm text-emerald-700 font-medium hover:underline mb-6 inline-block">
          ← Back to All Products
        </Link>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Multi-Modal Advantage
          </h2>
          <p className="text-sm text-green-800 leading-relaxed mb-4">
            Your plants have latent energy; help them reach it. This bio-stimulant goes beyond typical organic fertilizers.
            While its balanced nutrient profile qualifies it as a powerful fertilizer, its true magic lies in its high organic
            composition, providing a unique blend that acts as a potent signaling molecule within plants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h4 className="font-bold text-green-900 text-sm mb-1">🧬 Amino Acids & Peptides</h4>
              <p className="text-xs text-green-700">Over 18 essential and non-essential amino acids + short-chain peptides. Directly reduces energy needed for nitrogen assimilation and enhances chlorophyll synthesis.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h4 className="font-bold text-green-900 text-sm mb-1">🧪 Humic & Fulvic Acid Formation</h4>
              <p className="text-xs text-green-700">Organic matter decomposes to form natural chelators that improve nutrient availability, enhance root architecture and rhizosphere activity.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h4 className="font-bold text-green-900 text-sm mb-1">🌿 Phytoactive Metabolites</h4>
              <p className="text-xs text-green-700">Leverages secondary metabolites and growth-promoting substances inherent to the plant for an unparalleled multi-modal bio-stimulant advantage.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h4 className="font-bold text-green-900 text-sm mb-1">🌍 Soil → Seed → Fruit</h4>
              <p className="text-xs text-green-700">Excellent for Soil, Seed, Root, Leaves, Flower, and Fruit. A complete plant nutrition system in every application.</p>
            </div>
          </div>
        </div>

        {/* NPK Quick Reference */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Typical NPK Analysis (Hemp Seed Meal)
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-700">4-6%</p>
              <p className="text-xs text-gray-500 mt-1">Nitrogen (N)</p>
              <p className="text-[10px] text-gray-400">Deep vegetative growth, chlorophyll boost</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-700">1.5-2.5%</p>
              <p className="text-xs text-gray-500 mt-1">Phosphorus (P₂O₅)</p>
              <p className="text-[10px] text-gray-400">Strong root development, vigorous flowering</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-700">1-2%</p>
              <p className="text-xs text-gray-500 mt-1">Potassium (K₂O)</p>
              <p className="text-[10px] text-gray-400">Enzyme activation, disease resistance</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm font-bold text-gray-700">75-85%</p>
              <p className="text-[10px] text-gray-400">Organic Matter</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">30-35%</p>
              <p className="text-[10px] text-gray-400">Protein Content</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">15:1-20:1</p>
              <p className="text-[10px] text-gray-400">C:N Ratio</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Products
        </h3>
        <div className="space-y-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
