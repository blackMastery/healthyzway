import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Menu } from 'lucide-react';

interface NavigationProps {
  cartCount: number;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsCartOpen: (open: boolean) => void;
}

export default function Navigation({
  cartCount,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsCartOpen
}: NavigationProps) {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Healthyzway logo"
              width={48}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Healthyzway
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition font-medium">Benefits</a>
            <a href="#products" className="text-gray-700 hover:text-emerald-600 transition font-medium">Products</a>
            <a href="#reviews" className="text-gray-700 hover:text-emerald-600 transition font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition font-medium">Contact</a>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-emerald-50 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6 text-emerald-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <a href="#benefits" className="block py-2 text-gray-700 hover:text-emerald-600">Benefits</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-emerald-600">Products</a>
            <a href="#reviews" className="block py-2 text-gray-700 hover:text-emerald-600">Reviews</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-emerald-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
