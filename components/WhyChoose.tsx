import React from 'react';
import { Award, Shield, Lock, Heart } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Healthyzway?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Proudly Guyanese-Owned Business Bringing Premium SeaMoss to Your Home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl">
            <div className="inline-flex p-6 bg-white rounded-2xl shadow-lg mb-6">
              <div className="text-5xl">😋</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Delicious Flavor Options</h3>
            <p className="text-gray-700 leading-relaxed">
              Unique, carefully crafted flavors make it easier to enjoy daily health benefits
              without the strong ocean taste
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl">
            <div className="inline-flex p-6 bg-white rounded-2xl shadow-lg mb-6">
              <div className="text-5xl">🔬</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pure & Potent Formula</h3>
            <p className="text-gray-700 leading-relaxed">
              Carefully crafted to maintain maximum nutritional value - you can trust the
              quality of what you're getting
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl">
            <div className="inline-flex p-6 bg-white rounded-2xl shadow-lg mb-6">
              <div className="text-5xl">💳</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Upon Delivery</h3>
            <p className="text-gray-700 leading-relaxed">
              Pay securely with MMG when your order arrives. No upfront payment required - 
              order now and pay upon delivery
            </p>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Award className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <div className="font-bold text-gray-900">Premium Quality</div>
            <div className="text-sm text-gray-600">Carefully sourced</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <div className="font-bold text-gray-900">100% Natural</div>
            <div className="text-sm text-gray-600">No artificial additives</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Lock className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <div className="font-bold text-gray-900">Secure Orders</div>
            <div className="text-sm text-gray-600">Safe payment processing</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <div className="font-bold text-gray-900">Customer Care</div>
            <div className="text-sm text-gray-600">Dedicated support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
