import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-white shadow-sm rounded-full text-sm font-semibold text-emerald-800 border-2 border-emerald-200">
              🇬🇾 Proudly Guyanese-Owned • 92 Essential Minerals
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Nature's
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                92 Minerals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Boost immunity, revitalize energy, and achieve glowing skin with our potent, flavor-infused sea moss gels
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#products"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                Shop SeaMoss Gel
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#benefits"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition border-2 border-emerald-600 flex items-center justify-center"
              >
                Learn About Benefits
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl mb-2">🍃</div>
                <div className="text-sm font-semibold text-gray-900">100% Pure</div>
                <div className="text-xs text-gray-600">& Potent</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl mb-2">🏺</div>
                <div className="text-sm font-semibold text-gray-900">Glass Jar</div>
                <div className="text-xs text-gray-600">Packaging</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl mb-2">❄️</div>
                <div className="text-sm font-semibold text-gray-900">Refrigerated</div>
                <div className="text-xs text-gray-600">Fresh</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-9xl">🌊</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">Premium SeaMoss Gel</div>
                <div className="text-gray-600 mb-4">Available in 5 Delicious Flavors</div>
                <div className="flex justify-center gap-2">
                  {['⭐', '⭐', '⭐', '⭐', '⭐'].map((star, i) => (
                    <span key={i} className="text-yellow-400 text-xl">{star}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg rotate-12 z-20">
              Fresh Batch! 🔥
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg -rotate-12 z-20">
              Limited Stock ⚡
            </div>
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
