import Link from 'next/link';
import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/${product.category}/${product.id}`}
      className="group block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.name}
            </h3>
            {product.tags[0] && (
              <span className="inline-block bg-emerald-800 text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-semibold tracking-wide">
                {product.tags[0]}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">{product.shortDescription}</p>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{product.size}</span>
            <span>•</span>
            <span>{product.vijayaMg}mg Vijaya ({product.vijayaType})</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-bold text-emerald-700">{formatPrice(product.price)}</span>
          <p className="text-[10px] text-gray-400">+GST</p>
        </div>
      </div>
    </Link>
  );
}
