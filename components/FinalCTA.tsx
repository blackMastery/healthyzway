import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  emoji: string;
}

interface FinalCTAProps {
  products: Product[];
  selectedFlavor: string;
  onSelectFlavor: (id: string) => void;
  onAddToCart: () => void;
}

export default function FinalCTA({
  products,
  selectedFlavor,
  onSelectFlavor,
  onAddToCart
}: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Health?
        </h2>
        <p className="text-xl md:text-2xl text-emerald-50 mb-8">
          Start your journey to better health, radiant skin, and stronger hair today
        </p>

        {/* Quick Product Selection */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => onSelectFlavor(product.id)}
                className={`p-4 rounded-2xl transition ${
                  selectedFlavor === product.id
                    ? 'bg-white text-emerald-600 shadow-lg scale-110'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <div className="text-3xl mb-2">{product.emoji}</div>
                <div className="text-xs font-semibold">{product.name.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          <button
            onClick={onAddToCart}
            className="w-full bg-white text-emerald-600 py-6 rounded-2xl text-xl font-bold hover:bg-emerald-50 transition shadow-2xl flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Add {products.find(p => p.id === selectedFlavor)?.name} to Cart
          </button>
        </div>

        <div className="text-emerald-50 mb-8">
          <p className="text-lg mb-2">Or call us directly to place your order:</p>
          <a href="tel:+5926257160" className="text-2xl font-bold hover:text-white transition">
            📞 +(592) 625-7160
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-50">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Fresh Batch Guarantee
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Glass Jar Packaging
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Pay Upon Delivery or MMG
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
