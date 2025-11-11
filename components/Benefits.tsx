import React from 'react';
import { Sparkles, Zap, TrendingUp, Droplet, Heart, Shield, Check, Star } from 'lucide-react';

interface BenefitsProps {
  activeBenefitTab: string;
  onSetActiveBenefitTab: (tab: string) => void;
}

export default function Benefits({ activeBenefitTab, onSetActiveBenefitTab }: BenefitsProps) {
  const benefits = [
    { icon: <Sparkles className="w-6 h-6" />, title: 'Glowing Skin & Hair', color: 'pink' },
    { icon: <Zap className="w-6 h-6" />, title: 'Energy & Immune Boost', color: 'yellow' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Metabolism & Weight', color: 'orange' },
    { icon: <Droplet className="w-6 h-6" />, title: 'Lung & Respiratory', color: 'blue' },
    { icon: <Heart className="w-6 h-6" />, title: 'Heart & Prostate', color: 'red' },
    { icon: <Shield className="w-6 h-6" />, title: 'Joint & Inflammation', color: 'emerald' }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Health Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Transform your wellness from the inside out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-${benefit.color}-100 text-${benefit.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">Clinically studied benefits for optimal health</p>
            </div>
          ))}
        </div>

        {/* Detailed Benefits Tabs */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {['hair', 'skin', 'internal', 'specialized'].map((tab) => (
              <button
                key={tab}
                onClick={() => onSetActiveBenefitTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeBenefitTab === tab
                    ? 'bg-white text-emerald-600 shadow-lg'
                    : 'bg-white/50 text-gray-700 hover:bg-white/80'
                }`}
              >
                {tab === 'hair' && '💇♀️ Hair & Scalp'}
                {tab === 'skin' && '✨ Skin Transformation'}
                {tab === 'internal' && '❤️ Internal Health'}
                {tab === 'specialized' && '🎯 Specialized Uses'}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8">
            {activeBenefitTab === 'hair' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Hair & Scalp Health Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Improves Hair Growth', detail: 'Rich in Vitamin E for follicle stimulation' },
                    { title: 'Prevents Hair Loss', detail: 'High iron content strengthens hair from roots' },
                    { title: 'Moisturizes Scalp', detail: 'Vitamin A improves sebum production naturally' },
                    { title: 'Balances Scalp pH', detail: 'Creates optimal environment for healthy hair' },
                    { title: 'Improves Elasticity', detail: 'Mucilaginous properties reduce breakage' },
                    { title: 'Reduces Irritation', detail: 'Anti-inflammatory for dandruff, eczema & psoriasis' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-emerald-50 rounded-xl">
                      <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeBenefitTab === 'skin' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Skin Transformation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-6 bg-pink-50 rounded-xl">
                    <Sparkles className="w-8 h-8 text-pink-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 text-xl mb-2">Clears Clogged Pores</div>
                      <p className="text-gray-700">Natural minerals help detoxify and cleanse pores from the inside out, reducing acne and blackheads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                    <Droplet className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 text-xl mb-2">Deeply Hydrates Skin</div>
                      <p className="text-gray-700">Rich in vitamins and minerals that lock in moisture, leaving skin supple and youthful.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                    <Star className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-gray-900 text-xl mb-2">Reduces Dark Spots</div>
                      <p className="text-gray-700">With consistent use 2-3 times per week, skin appears radiant, even-toned, and flawless.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeBenefitTab === 'internal' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">General Health Benefits</h3>

                {/* Highlight box for 92 minerals */}
                <div className="mb-8 p-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border-2 border-emerald-300">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🌿</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">92 Essential Minerals</h4>
                    <p className="text-gray-700 font-medium">
                      Contains <span className="text-emerald-700 font-bold">92 of the 102 minerals</span> the human body is made of
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Rich in Iron, Zinc, B Vitamins, and Magnesium
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <h4 className="font-bold text-xl text-emerald-600 mb-2">Versatile Beauty Aid</h4>
                      <p className="text-gray-700">Enhances skin, hair, and overall appearance naturally.</p>
                    </div>

                    <div className="p-4 bg-teal-50 rounded-xl">
                      <h4 className="font-bold text-xl text-teal-600 mb-2">Thyroid Support</h4>
                      <p className="text-gray-700">Natural source of iodine for healthy thyroid function.</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <h4 className="font-bold text-xl text-emerald-600 mb-2">Digestive Harmony</h4>
                      <p className="text-gray-700">Promotes healthy gut bacteria and improves digestion naturally.</p>
                    </div>

                    <div className="p-4 bg-teal-50 rounded-xl">
                      <h4 className="font-bold text-xl text-teal-600 mb-2">Immune System Boost</h4>
                      <p className="text-gray-700">Rich in antioxidants and minerals that strengthen your body's natural defenses.</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <h4 className="font-bold text-xl text-emerald-600 mb-2">Heart Wellness</h4>
                      <p className="text-gray-700">Supports cardiovascular health with omega-3 fatty acids and potassium.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-xl">
                      <h4 className="font-bold text-xl text-orange-600 mb-2">Weight Management</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Boosts metabolism naturally</li>
                        <li>• Reduces fat cell production</li>
                        <li>• Boosts breakdown of stored fat</li>
                        <li>• Enhances fat-burning process</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl">
                      <h4 className="font-bold text-xl text-red-600 mb-2">Anti-Inflammatory</h4>
                      <p className="text-gray-700">Reduces inflammation throughout the body, supporting overall wellness.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-xl">
                      <h4 className="font-bold text-xl text-orange-600 mb-2">Joint & Bone Health</h4>
                      <p className="text-gray-700">Supports healthy joints and strong bones with essential minerals.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-xl">
                      <h4 className="font-bold text-xl text-red-600 mb-2">Energy Revitalization</h4>
                      <p className="text-gray-700">B vitamins and iron work together to combat fatigue and boost natural energy levels.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeBenefitTab === 'specialized' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Specialized Health Applications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                    <div className="text-4xl mb-4">👨</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Prostate Health</h4>
                    <p className="text-gray-700 mb-4">
                      Contains anti-inflammatory compounds that reduce prostate inflammation and enhance
                      overall prostate health and function.
                    </p>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                      May lower risk of prostate cancer
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
                    <div className="text-4xl mb-4">🚬</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Respiratory Support for Smokers</h4>
                    <p className="text-gray-700 mb-4">
                      Rich in Potassium Chloride which helps dissolve phlegm and soothes inflamed
                      mucous membranes in the respiratory system.
                    </p>
                    <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                      Clears lung buildup from smoking & vaping
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                    <div className="text-4xl mb-4">🦴</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Thyroid Support</h4>
                    <p className="text-gray-700">
                      Natural source of iodine that supports healthy thyroid function and hormone regulation.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
                    <div className="text-4xl mb-4">⚡</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Energy Revitalization</h4>
                    <p className="text-gray-700">
                      B vitamins and iron work together to combat fatigue and boost natural energy levels.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
