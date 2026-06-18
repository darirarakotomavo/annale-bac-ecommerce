import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import ProductCard from '@/app/components/ProductCard';
import OrderSteps from '@/app/components/OrderSteps';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import { products } from '@/app/data/products';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />

                {/* Section Produits */}
                <section id="products" className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
                            📚 Nos produits
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Commander */}
                <section id="order" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
                            📥 Comment commander
                        </h2>
                        <OrderSteps />
                        <div className="mt-8 bg-emerald-50 rounded-xl p-6 text-center max-w-2xl mx-auto">
                            <p className="text-2xl font-bold text-orange-500">📱 +261 32 14 123 456</p>
                            <p className="text-sm text-slate-500">Paiement Orange Money</p>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}