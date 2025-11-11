import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: { '8oz': number; '11oz': number };
  description: string;
  color: string;
  gradient: string;
  emoji: string;
}

interface ProductsProps {
  products: Product[];
  selectedFlavor: string;
  selectedSize: '8oz' | '11oz';
  onSelectFlavor: (id: string) => void;
  onSelectSize: (size: '8oz' | '11oz') => void;
  onAddToCart: (product: Product) => void;
}

export default function Products({
  products,
  selectedFlavor,
  selectedSize,
  onSelectFlavor,
  onSelectSize,
  onAddToCart
}: ProductsProps) {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our SeaMoss Gel Collection
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose from 5 delicious flavors - each packed with 92 essential minerals
          </p>

          {/* Size Selector */}
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg border-2 border-emerald-200">
            <button
              onClick={() => onSelectSize('8oz')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedSize === '8oz'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              8oz (240ml)
            </button>
            <button
              onClick={() => onSelectSize('11oz')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedSize === '11oz'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              11oz
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-3 ${
                selectedFlavor === product.id ? 'border-emerald-500 scale-105' : 'border-gray-100'
              }`}
              onClick={() => onSelectFlavor(product.id)}
            >
              <div className={`bg-gradient-to-br ${product.gradient} p-12 text-center relative overflow-hidden min-h-[280px] flex items-center justify-center`}>
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-150"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-300"></div>
                </div>

                {/* Glass jar illustration */}
                <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {/* Jar container */}
                  <div className="relative">
                    {/* Jar body with glass effect */}
                    <div className="w-32 h-40 mx-auto bg-white/30 backdrop-blur-md rounded-t-lg rounded-b-3xl border-4 border-white/50 shadow-2xl relative overflow-hidden">
                      {/* SeaMoss gel inside */}
                      <div className={`absolute inset-2 bg-gradient-to-b ${product.gradient} opacity-60 rounded-t-md rounded-b-3xl`}>
                        {/* Gel texture effect */}
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full blur-lg"></div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>

                      {/* Product emoji reflection */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-90">
                        {product.emoji}
                      </div>
                    </div>

                    {/* Jar lid */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-lg border-2 border-amber-800 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
                    </div>

                    {/* Label on jar */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-md">
                      <span className="text-xs font-bold text-gray-700">{product.emoji}</span>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-white rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                </div>

                {selectedFlavor === product.id && (
                  <div className="absolute top-4 right-4 bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 animate-pulse">
                    Selected ✓
                  </div>
                )}

                {/* Corner decorative element */}
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                  <div className={`w-full h-full bg-gradient-to-tr ${product.gradient} rounded-tr-full`}></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-4xl font-bold text-emerald-600">
                      ${(product.price[selectedSize] / 100).toFixed(2)}
                    </span>
                    <span className="text-gray-600 ml-2">/ {selectedSize}</span>
                  </div>
                  <div className="text-sm text-gray-500">In Stock 🟢</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Glass jar packaging
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Fresh batch guarantee
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-600" />
                    4-week shelf life (refrigerated)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Instructions */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">How to Use Your SeaMoss Gel</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🥄</div>
              <h4 className="font-bold text-xl mb-3">Daily Dose</h4>
              <p className="text-emerald-50">
                Take 1-2 tablespoons per day for optimal benefits. Mix in smoothies, teas, or take directly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">❄️</div>
              <h4 className="font-bold text-xl mb-3">Storage</h4>
              <p className="text-emerald-50">
                KEEP REFRIGERATED. Stays fresh for up to 4 weeks when properly stored.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🧼</div>
              <h4 className="font-bold text-xl mb-3">Maintenance</h4>
              <p className="text-emerald-50">
                Always use a clean, dry spoon to maintain freshness and prevent contamination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
