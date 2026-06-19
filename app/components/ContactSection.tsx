export default function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">📞 Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <h4 className="font-semibold text-slate-800">📱 Orange Money</h4>
                        <p className="text-lg font-bold text-orange-500">+261 32 24 622 74</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <h4 className="font-semibold text-slate-800">📧 Email</h4>
                        <p>darirarakotomavo@gmail.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <h4 className="font-semibold text-slate-800">📘 Facebook</h4>
                        <a
                            href="https://www.facebook.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Autodidacte Ramose Richard physique
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <h4 className="font-semibold text-slate-800">🔒 GitHub</h4>
                        <p className="text-sm text-slate-500">Dépôt privé - Accès après achat</p>
                    </div>
                </div>
            </div>
        </section>
    );
}