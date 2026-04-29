import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductDetailPage from '@/components/ProductDetailPage';

export function generateStaticParams() {
  return products
    .filter(p => p.category === 'wellness')
    .map(p => ({ id: p.id }));
}

export default async function WellnessProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id && p.category === 'wellness');
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
