import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductDetailPage from '@/components/ProductDetailPage';

export function generateStaticParams() {
  return products
    .filter(p => p.category === 'hair-care')
    .map(p => ({ id: p.id }));
}

export default async function HairCareProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id && p.category === 'hair-care');
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
