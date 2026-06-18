'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-slate-900 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">📚 Annales Bac S 2025</h1>
                <nav className="hidden md:flex gap-6">
                    <Link href="/#products" className="hover:text-emerald-400">Produits</Link>
                    <Link href="/#order" className="hover:text-emerald-400">Commander</Link>
                    <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
                </nav>
            </div>
        </header>
    );
}