import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                        📞 Contact
                    </h1>
                    <p className="text-center text-slate-500 mb-8">
                        Pour toute question ou commande, contactez-moi
                    </p>

                    <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-slate-800 mb-2">
                                📱 Orange Money
                            </h2>
                            <p className="text-2xl font-bold text-orange-500">
                                +261 32 14 123 456
                            </p>
                        </div>

                        <div className="text-center border-t border-slate-100 pt-6">
                            <h2 className="text-xl font-semibold text-slate-800 mb-2">
                                📧 Email
                            </h2>
                            <p className="text-lg text-slate-600">
                                richard.rakotomavo@example.com
                            </p>
                        </div>

                        <div className="text-center border-t border-slate-100 pt-6">
                            <h2 className="text-xl font-semibold text-slate-800 mb-2">
                                🔒 GitHub
                            </h2>
                            <p className="text-sm text-slate-500">
                                Dépôt privé - Accès après achat
                            </p>
                            <Link
                                href="https://github.com/darirarakotomavo/annales-bac-S-madagsikara-2025"
                                target="_blank"
                                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                            >
                                Voir le dépôt →
                            </Link>
                        </div>

                        <div className="border-t border-slate-100 pt-6 mt-4">
                            <p className="text-sm text-slate-400 text-center">
                                Réponse dans les 24h
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}