import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Healthyzway logo"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
                priority
              />
              <span className="text-2xl font-bold">Healthyzway</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Proudly Guyanese-Owned 🇬🇾 Premium SeaMoss Gel - Nature's 92 minerals for your complete wellness
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#benefits" className="block text-gray-400 hover:text-emerald-400 transition">Benefits</a>
              <a href="#products" className="block text-gray-400 hover:text-emerald-400 transition">Products</a>
              <a href="#reviews" className="block text-gray-400 hover:text-emerald-400 transition">Reviews</a>
              <a href="#contact" className="block text-gray-400 hover:text-emerald-400 transition">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>+(592) 625-7160</p>
              <p>Healthyzway@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/healthyzway.gy?igsh=NmdqZmRlODBiYTB4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Healthyzway on Instagram"
                className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://tiktok.com/@Healthyzway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
              >
                <div className="text-xl">📱</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2024 Healthyzway. All rights reserved.</p>
          <p className="text-sm mt-2">🇬🇾 Proudly Guyanese-Owned • Made with 🌊 for your health & wellness</p>
        </div>
      </div>
    </footer>
  );
}
