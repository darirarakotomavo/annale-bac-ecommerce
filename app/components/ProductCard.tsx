import { Product } from '@/app/types';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">
            <div className="text-4xl mb-3">{product.icon}</div>
            <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
            <p className="text-sm text-slate-500 mb-2">{product.description}</p>
            <p className="text-2xl font-bold text-emerald-600">{product.price} €</p>
        </div>
    );
}