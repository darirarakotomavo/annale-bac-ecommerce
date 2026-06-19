'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <h1 className="text-xl md:text-2xl font-bold">
                            📚 Annales Bac S 2025
                        </h1>
                    </Link>

                    {/* Navigation desktop */}
                    <nav className="hidden md:flex gap-6">
                        <Link href="/#products" className="hover:text-emerald-400 transition">
                            📚 Produits
                        </Link>
                        <Link href="/#order" className="hover:text-emerald-400 transition">
                            📥 Commander
                        </Link>
                        <a
                            href="https://www.facebook.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            📘 Facebook
                        </a>
                        <Link href="/contact" className="hover:text-emerald-400 transition">
                            📞 Contact
                        </Link>
                    </nav>

                    {/* Menu mobile */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Menu mobile déroulant */}
                {isOpen && (
                    <nav className="md:hidden mt-4 flex flex-col gap-4 border-t border-slate-700 pt-4">
                        <Link href="/#products" className="hover:text-emerald-400 transition" onClick={() => setIsOpen(false)}>
                            📚 Produits
                        </Link>
                        <Link href="/#order" className="hover:text-emerald-400 transition" onClick={() => setIsOpen(false)}>
                            📥 Commander
                        </Link>
                        <a
                            href="https://www.facebook.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            📘 Facebook
                        </a>
                        <Link href="/contact" className="hover:text-emerald-400 transition" onClick={() => setIsOpen(false)}>
                            📞 Contact
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
