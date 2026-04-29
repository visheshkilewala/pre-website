import { Product, formatPrice } from '@/data/products';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const isPlantCare = product.category === 'plant-care';
  const isPsychoactive = product.vijayaType === 'Decarbed';
  const isExternal = ['Intimate Wash', 'Shampoo', 'Hair Mask', 'Hair Oil', 'Scalp Serum', 'Beard Oil'].includes(product.subcategory || '');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header activeCategory={product.category} />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span className="mx-2">→</span>
          <Link href={`/${product.category}`} className="hover:text-emerald-700 capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.name}
            </h1>
            {product.tags.map(tag => (
              <span key={tag} className="bg-emerald-800 text-white text-[10px] px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          {product.sanskritName && (
            <p className="text-sm text-gray-400 italic mb-3">{product.sanskritName}</p>
          )}
          <p className="text-lg text-gray-600">{product.description}</p>
        </div>

        {/* Key Info Grid — Plant Care vs Ayurvedic */}
        {isPlantCare ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-700">{formatPrice(product.price)}</p>
              <p className="text-xs text-gray-500 mt-1">+ 5% GST</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-gray-900">{product.size}</p>
              <p className="text-xs text-gray-500 mt-1">Pack Size</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-sm font-bold text-green-800">NPK 4-6:1.5-2.5:1-2</p>
              <p className="text-xs text-gray-500 mt-1">Nutrient Profile</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-sm font-bold text-green-800">75-85% Organic</p>
              <p className="text-xs text-gray-500 mt-1">Organic Matter</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-emerald-700">{formatPrice(product.price)}</p>
              <p className="text-xs text-gray-500 mt-1">+ 5% GST</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-gray-900">{product.size}</p>
              <p className="text-xs text-gray-500 mt-1">Pack Size</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-gray-900">{product.vijayaMg}mg</p>
              <p className="text-xs text-gray-500 mt-1">Vijaya Extract</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm font-bold text-gray-900">{product.vijayaType}</p>
              <p className="text-xs text-gray-500 mt-1">
                {isPsychoactive ? 'Psychoactive' : 'Non-Psychoactive'}
              </p>
            </div>
          </div>
        )}

        {/* NPK Analysis — Plant Care only */}
        {isPlantCare && product.npkAnalysis && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Typical Analysis
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="text-left p-3 border border-green-200 text-green-900">Component</th>
                    <th className="text-left p-3 border border-green-200 text-green-900">Content</th>
                    <th className="text-left p-3 border border-green-200 text-green-900">Significance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Nitrogen (N)</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.nitrogen}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Deep vegetative growth, chlorophyll boost</td>
                  </tr>
                  <tr className="bg-green-50/50">
                    <td className="p-3 border border-gray-200 font-medium">Phosphorus (P₂O₅)</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.phosphorus}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Strong root development, vigorous flowering</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Potassium (K₂O)</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.potassium}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Enzyme activation, enhanced disease resistance</td>
                  </tr>
                  <tr className="bg-green-50/50">
                    <td className="p-3 border border-gray-200 font-medium">Organic Matter</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.organicMatter}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Rebuilds soil structure, boosts microbial biodiversity</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Protein Content</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.protein}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Direct amino acid source for metabolism signaling</td>
                  </tr>
                  <tr className="bg-green-50/50">
                    <td className="p-3 border border-gray-200 font-medium">C:N Ratio</td>
                    <td className="p-3 border border-gray-200">{product.npkAnalysis.cnRatio}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">Optimal for balanced microbial decomposition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Ingredients
          </h2>
          <div className="flex flex-wrap gap-2">
            {product.keyIngredients.map(ingredient => (
              <span key={ingredient} className={`text-xs px-3 py-1.5 rounded-full border ${
                isPlantCare
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.benefits.map(benefit => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`mt-0.5 ${isPlantCare ? 'text-green-600' : 'text-emerald-600'}`}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Application Guide — Plant Care only */}
        {isPlantCare && product.applicationGuide && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Application & Usage Guide
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              For optimal nutrient uptake and vigorous growth, water the soil thoroughly immediately after dry application.
            </p>
            <div className="space-y-3">
              {product.applicationGuide.map(guide => (
                <div key={guide.type} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{guide.type}</h4>
                  <p className="text-sm text-gray-700 mb-1">{guide.dosage}</p>
                  <p className="text-xs text-gray-500">Frequency: {guide.frequency}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Liquid Activation — Plant Care only */}
        {isPlantCare && product.liquidActivation && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6 border-l-4 border-l-blue-500">
            <h2 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              💧 Advanced Spray Activation: Bio-Stimulant Liquid
            </h2>
            <p className="text-sm text-blue-800 mb-4">
              Unlock the full power of the phytoactive metabolites and peptides for rapid stress recovery.
            </p>
            <ul className="space-y-2">
              {product.liquidActivation.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                  <span className="font-bold text-blue-600">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Usage — Non-Plant Care */}
        {!isPlantCare && (
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              How to Use
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{product.usage}</p>
          </div>
        )}

        {/* Compliance Box */}
        {isPlantCare ? (
          <div className="rounded-lg p-5 mb-8 bg-green-50 border border-green-200">
            <h3 className="text-sm font-bold text-green-800 mb-2">🌱 Organic Product</h3>
            <ul className="text-xs space-y-1 text-green-700">
              <li>100% Organic — No synthetic chemicals or pesticides</li>
              <li>Safe for use around children and pets when used as directed</li>
              <li>Not a Schedule E(1) drug — No prescription required</li>
              <li>Manufactured by Phytoroot Extracts Private Limited</li>
              <li>Store in a cool, dry place away from direct sunlight</li>
            </ul>
          </div>
        ) : (
          <div className={`rounded-lg p-5 mb-8 border ${
            isPsychoactive
              ? 'bg-amber-50 border-amber-200'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <h3 className={`text-sm font-bold mb-2 ${isPsychoactive ? 'text-amber-800' : 'text-blue-800'}`}>
              {isPsychoactive ? '⚠️ Important Notice' : 'ℹ️ Product Information'}
            </h3>
            <ul className={`text-xs space-y-1 ${isPsychoactive ? 'text-amber-700' : 'text-blue-700'}`}>
              <li>Schedule E(1) Drug — Prescription from registered Ayurvedic physician required</li>
              <li>For adults 18+ only</li>
              {isPsychoactive && <li>This product contains Decarboxylated Vijaya (psychoactive)</li>}
              {!isPsychoactive && <li>Non-Decarboxylated Vijaya — Non-Psychoactive formula</li>}
              {isExternal && <li>For external use only</li>}
              <li>Do not drive or operate machinery after use (if psychoactive)</li>
              <li>Not for pregnant/lactating women</li>
            </ul>
            {product.complianceNote && (
              <p className="mt-2 text-xs font-medium">{product.complianceNote}</p>
            )}
          </div>
        )}

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/919244107423?text=Hi, I'm interested in ${product.name} (${product.size}) — ₹${product.price}+GST`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full sm:w-auto text-center font-semibold px-8 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg ${
            isPlantCare
              ? 'bg-green-700 hover:bg-green-600 text-white'
              : 'bg-emerald-700 hover:bg-emerald-600 text-white'
          }`}
        >
          💬 Order via WhatsApp — {formatPrice(product.price)} +GST
        </a>

        {/* Manufacturer Info */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 space-y-1">
          {isPlantCare ? (
            <>
              <p><strong>Manufactured by:</strong> Phytoroot Extracts Private Limited</p>
              <p><strong>Weight:</strong> {product.size}</p>
              <p><strong>MFG Date:</strong> __/__/____</p>
              <p><strong>Batch Number:</strong> _______</p>
            </>
          ) : (
            <>
              <p><strong>Manufactured by:</strong> Aagya Enterprises, Neemuch (M.P.)</p>
              <p><strong>Marketed by:</strong> Phytorootextracts Pvt Ltd</p>
              <p><strong>AYUSH License:</strong> Valid manufacturing license held</p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
