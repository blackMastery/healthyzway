import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  emoji: string;
  price: { '8oz': number; '11oz': number };
}

interface StickyBarProps {
  show: boolean;
  product: Product | undefined;
  selectedSize: '8oz' | '11oz';
  onAddToCart: () => void;
}

export default function StickyBar({ show, product, selectedSize, onAddToCart }: StickyBarProps) {
  if (!show || !product) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-emerald-200 shadow-2xl z-40 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-3xl">{product.emoji}</div>
          <div>
            <div className="font-bold text-gray-900">{product.name}</div>
            <div className="text-sm text-gray-600">
              {selectedSize} - ${(product.price[selectedSize] / 100).toFixed(2)}
            </div>
          </div>
        </div>
        <button
          onClick={onAddToCart}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:shadow-lg transition flex items-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
