import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import ProductCard from '@/app/components/ProductCard';
import OrderSteps from '@/app/components/OrderSteps';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import { Product } from '@/app/types'; // ← Ajouter l'import du type

async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Erreur lors du chargement des produits');
    }
    return res.json();
}

export default async function Home() {
    const products: Product[] = await getProducts(); // ← Typer explicitement

    return (
        <>
            <Header />
            <main>
                <Hero />
                <section id="products" className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
                            📚 Nos produits
                        </h2>
                        <p className="text-center text-slate-500 mb-10">
                            Cliquez sur un produit pour le commander directement sur WhatsApp
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => ( // ← plus de `any`
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
                <section id="order" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">
                            📥 Comment commander
                        </h2>
                        <p className="text-center text-slate-500 mb-10">
                            Simple, rapide et sans carte bancaire
                        </p>
                        <OrderSteps />
                        <div className="mt-12 bg-emerald-50 rounded-xl p-6 text-center max-w-2xl mx-auto">
                            <h3 className="font-bold text-slate-800 mb-2">📱 Paiement Orange Money</h3>
                            <p className="text-2xl font-bold text-orange-500">+261 32 24 622 74</p>
<p className="text-sm text-slate-500 mt-2">📧 darirarakotomavo@gmail.com</p>
<p className="text-sm text-slate-500 mt-2">
    💬 Ou contactez-nous sur <span className="font-semibold text-green-600">WhatsApp</span> : +261 32 24 622 74
</p>
                        </div>
                    </div>
                </section>
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}