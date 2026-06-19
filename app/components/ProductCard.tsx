import { Product } from '@/app/types';
//import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const isPopular = product.isPopular;
    const isEnseignant = product.isEnseignant;

    // Construire le lien WhatsApp avec un message pré-rempli
    const phoneNumber = '261322462274'; // Numéro sans le '+'
    const message = `Bonjour, je souhaite commander : ${product.name} (${product.price} €). Je suis intéressé par ce produit. Pouvez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className={`
            bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
            ${isPopular ? 'border-2 border-emerald-500 relative' : ''}
            ${isEnseignant ? 'border-2 border-purple-500 relative' : ''}
        `}>
            {isPopular && (
                <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    ⭐ Populaire
                </span>
            )}
            {isEnseignant && (
                <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    👨‍🏫 Enseignant
                </span>
            )}

            <div className="p-6">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{product.description}</p>

                <ul className="space-y-2 mb-6">
                    {product.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-emerald-500">✅</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex items-end justify-between">
                    <div>
                        <span className="text-2xl font-bold text-emerald-600">
                            {product.price} €
                        </span>
                        {product.pages > 0 && (
                            <p className="text-xs text-slate-400">{product.pages} pages</p>
                        )}
                        {/* Mention de négociation possible */}
                        <p className="text-xs text-orange-500 font-medium mt-1">
                            💬 Prix négociable
                        </p>
                    </div>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow hover:shadow-lg flex items-center gap-2"
                    >
                        💬 Commander
                    </a>
                </div>
            </div>
        </div>
    );
}