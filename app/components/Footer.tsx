import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">
                            📚 Annales Bac S 2025
                        </h3>
                        <p className="text-sm">© 2025 Richard RAKOTOMAVO</p>
                        <p className="text-sm">Tous droits réservés</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Suivez-moi</h4>
                        <ul className="space-y-1 text-sm">
                            <li>
                                <a
                                    href="https://www.facebook.com/votre-profil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition"
                                >
                                    📘 Facebook : Autodidacte Ramose Richard physique
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    📞 Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-2">Contact</h4>
                        <p className="text-sm">📞 +261 32 24 622 74</p>
<p className="text-sm">📧 darirarakotomavo@gmail.com</p>
<p className="text-sm">💬 WhatsApp : +261 32 24 622 74</p>
                       
                    </div>
                </div>
                <div className="pt-8 text-center text-sm">
                    <p>Dernière mise à jour : 19 juin 2026</p>
                </div>
            </div>
        </footer>
    );
}