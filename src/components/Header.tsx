'use client';

import Link from 'next/link';

interface HeaderProps {
  activeCategory?: string;
}

export default function Header({ activeCategory }: HeaderProps) {
  const navItems = [
    { href: '/hair-care', label: 'Hair & Body', id: 'hair-care' },
    { href: '/internal-medicine', label: 'Internal Medicine', id: 'internal-medicine' },
    { href: '/smokable', label: 'Smokable', id: 'smokable' },
    { href: '/wellness', label: 'Wellness', id: 'wellness' },
    { href: '/plant-care', label: 'Plant Care', id: 'plant-care' },
  ];

  return (
    <header className="bg-gray-950 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col shrink-0">
            <span className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              Phytoroot Extracts
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-[2px]">
              Ayurvedic Cannabis Science
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-wide transition-colors ${
                  activeCategory === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919244107423?text=Hi,%20I'm%20interested%20in%20PRE%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
          >
            💬 Order
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden border-t border-gray-800">
        <div className="px-4 py-3 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.id}
              href={item.href}
              className={`block text-sm font-medium py-2 ${
                activeCategory === item.id ? 'text-white' : 'text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919244107423?text=Hi,%20I'm%20interested%20in%20PRE%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium py-2 text-amber-400"
          >
            💬 WhatsApp Order
          </a>
        </div>
      </div>
    </header>
  );
}
