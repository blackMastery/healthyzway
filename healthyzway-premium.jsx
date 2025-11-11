import React, { useState, useEffect } from 'react';
import { 
  Heart, Leaf, Droplet, Zap, Shield, Sparkles, Phone, Mail, Instagram, 
  ShoppingCart, Check, ChevronDown, Star, TrendingUp, Award, Lock,
  ArrowRight, Plus, Minus, X, Menu
} from 'lucide-react';

export default function HealthyzwayLanding() {
  const [selectedFlavor, setSelectedFlavor] = useState('original');
  const [selectedSize, setSelectedSize] = useState('8oz');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBenefitTab, setActiveBenefitTab] = useState('hair');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Sticky bar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { 
      id: 'original', 
      name: 'Original Gold SeaMoss', 
      price: { '8oz': 2000, '11oz': 2500 }, 
      description: 'Pure & Natural - No Additives',
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-500',
      emoji: '🌊'
    },
    { 
      id: 'apple', 
      name: 'Apple & Ginger', 
      price: { '8oz': 2500, '11oz': 3000 }, 
      description: 'Refreshing & Energizing',
      color: 'green',
      gradient: 'from-green-400 to-lime-500',
      emoji: '🍏'
    },
    { 
      id: 'watermelon', 
      name: 'Watermelon', 
      price: { '8oz': 2500, '11oz': 3000 }, 
      description: 'Sweet & Hydrating',
      color: 'pink',
      gradient: 'from-pink-400 to-red-500',
      emoji: '🍉'
    },
    { 
      id: 'dragon', 
      name: 'Dragonfruit', 
      price: { '8oz': 3100, '11oz': 3600 }, 
      description: 'Exotic & Delicious',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500',
      emoji: '🐉'
    },
    { 
      id: 'strawberry', 
      name: 'Strawberry', 
      price: { '8oz': 3500, '11oz': 4000 }, 
      description: 'Rich & Flavorful',
      color: 'red',
      gradient: 'from-red-400 to-rose-500',
      emoji: '🍓'
    }
  ];

  const benefits = [
    { icon: <Sparkles className="w-6 h-6" />, title: 'Glowing Skin & Hair', color: 'pink' },
    { icon: <Zap className="w-6 h-6" />, title: 'Energy & Immune Boost', color: 'yellow' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Metabolism & Weight', color: 'orange' },
    { icon: <Droplet className="w-6 h-6" />, title: 'Lung & Respiratory', color: 'blue' },
    { icon: <Heart className="w-6 h-6" />, title: 'Heart & Prostate', color: 'red' },
    { icon: <Shield className="w-6 h-6" />, title: 'Joint & Inflammation', color: 'emerald' }
  ];

  const testimonials = [
    {
      text: "I just want to give my review on the strawberry seamoss. First of all it doesn't taste bad and generally my entire body feels better and healthy. I am enjoying my clear skin plus my hair is more healthy. I used to suffer from tremendous hair loss but now just like about a few strands would fall.",
      author: "Verified Customer",
      flavor: "Strawberry Flavor",
      rating: 5
    },
    {
      text: "Amazing product! My energy levels have increased significantly and my skin has never looked better. The watermelon flavor makes it so easy to take daily.",
      author: "Happy Customer",
      flavor: "Watermelon Flavor",
      rating: 5
    },
    {
      text: "I've been using the Original Gold for 3 months now. My digestion has improved and I feel more energized throughout the day. Highly recommend!",
      author: "Regular User",
      flavor: "Original Gold",
      rating: 5
    }
  ];

  const faqs = [
    { q: "How often should I take SeaMoss?", a: "We recommend 1-2 tablespoons per day for optimal benefits. You can take it in the morning for an energy boost or mix it into smoothies, teas, or other beverages." },
    { q: "How long does the gel last?", a: "When properly refrigerated, our SeaMoss gel stays fresh for up to 4 weeks. Always use a clean spoon when scooping to maintain freshness." },
    { q: "What sizes are available?", a: "We offer our SeaMoss gel in two sizes: 8oz (240ml) and 11oz glass jars. Both sizes come in all our delicious flavors." },
    { q: "How do I store the SeaMoss gel?", a: "KEEP REFRIGERATED at all times. Store in a cool, dry place and always use a clean utensil to prevent contamination." },
    { q: "Are there any side effects?", a: "SeaMoss is a natural food product and is generally safe. However, if you have thyroid conditions or are on medication, consult your healthcare provider before use." },
    { q: "Can I take SeaMoss with other supplements?", a: "Yes! SeaMoss is a whole food and can be taken alongside most supplements. However, consult with your healthcare provider if you have specific concerns." }
  ];

  const addToCart = (product) => {
    const price = product.price[selectedSize];
    const cartItem = {
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      size: selectedSize,
      price: price,
      emoji: product.emoji
    };
    
    const existing = cart.find(item => item.id === cartItem.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === cartItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...cartItem, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-2 px-4 text-sm font-medium">
        🌊 FREE Delivery on Orders Over $5000 • Fresh Batch Available Now
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🌿</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Healthyzway
              </div>
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

      {/* Sticky Add to Cart Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-emerald-200 shadow-2xl z-40 py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{products.find(p => p.id === selectedFlavor)?.emoji}</div>
              <div>
                <div className="font-bold text-gray-900">{products.find(p => p.id === selectedFlavor)?.name}</div>
                <div className="text-sm text-gray-600">{selectedSize} - ${(products.find(p => p.id === selectedFlavor)?.price[selectedSize] / 100).toFixed(2)}</div>
              </div>
            </div>
            <button
              onClick={() => addToCart(products.find(p => p.id === selectedFlavor))}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:shadow-lg transition flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsCartOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Cart ({cartCount})</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="text-3xl">{item.emoji}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.size}</div>
                          <div className="text-emerald-600 font-bold">${(item.price / 100).toFixed(2)}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-emerald-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold mb-4">
                      <span>Total:</span>
                      <span className="text-emerald-600">${(cartTotal / 100).toFixed(2)}</span>
                    </div>
                    <a 
                      href="tel:+5926257160"
                      className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition"
                    >
                      Complete Order - Call Now
                    </a>
                    <p className="text-center text-sm text-gray-600 mt-3">
                      📞 Call us to complete your order: +(592) 625-7160
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-emerald-800 font-medium mb-2">
                      <Lock className="w-5 h-5" />
                      Secure Payment with MMG
                    </div>
                    <p className="text-sm text-emerald-700">Your order is secure and will be freshly prepared</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white shadow-sm rounded-full text-sm font-semibold text-emerald-800 border-2 border-emerald-200">
                ✨ 92 Essential Minerals in Every Spoonful
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
      </section>

      {/* Benefits Showcase */}
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
                  onClick={() => setActiveBenefitTab(tab)}
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Internal Health & Detox</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl text-emerald-600">Digestive Harmony</h4>
                      <p className="text-gray-700">Promotes healthy gut bacteria and improves digestion naturally.</p>
                      
                      <h4 className="font-bold text-xl text-emerald-600 mt-6">Immune System Boost</h4>
                      <p className="text-gray-700">Rich in antioxidants and minerals that strengthen your body's natural defenses.</p>
                      
                      <h4 className="font-bold text-xl text-emerald-600 mt-6">Heart Wellness</h4>
                      <p className="text-gray-700">Supports cardiovascular health with omega-3 fatty acids and potassium.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl text-orange-600">Weight Management</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Boosts metabolism naturally</li>
                        <li>• Reduces fat cell production</li>
                        <li>• Enhances fat-burning process</li>
                        <li>• Supports healthy weight loss</li>
                      </ul>
                      
                      <h4 className="font-bold text-xl text-red-600 mt-6">Anti-Inflammatory</h4>
                      <p className="text-gray-700">Reduces inflammation throughout the body, supporting joint and bone health.</p>
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

      {/* Products Section */}
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
                onClick={() => setSelectedSize('8oz')}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  selectedSize === '8oz'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                8oz (240ml)
              </button>
              <button
                onClick={() => setSelectedSize('11oz')}
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
                onClick={() => setSelectedFlavor(product.id)}
              >
                <div className={`bg-gradient-to-br ${product.gradient} p-12 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="text-8xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform">
                    {product.emoji}
                  </div>
                  {selectedFlavor === product.id && (
                    <div className="absolute top-4 right-4 bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                      Selected ✓
                    </div>
                  )}
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
                      addToCart(product);
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
      </section>

      {/* Social Proof / Reviews */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results from Real People
            </h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex gap-1 text-yellow-400 text-3xl">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-xl text-gray-600">Based on verified customer reviews</p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-7xl text-emerald-600 mb-6">"</div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {testimonials[currentTestimonial].author[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].flavor}</div>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentTestimonial === index
                        ? 'bg-emerald-600 w-8'
                        : 'bg-emerald-200 hover:bg-emerald-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-emerald-50 transition"
            >
              <ChevronDown className="w-6 h-6 rotate-90 text-emerald-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-emerald-50 transition"
            >
              <ChevronDown className="w-6 h-6 -rotate-90 text-emerald-600" />
            </button>
          </div>

          {/* Social Media Proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">As seen on:</p>
            <div className="flex justify-center items-center gap-12">
              <div className="flex items-center gap-3">
                <Instagram className="w-8 h-8 text-pink-600" />
                <span className="font-bold text-gray-900">@healthyway.gy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">📱</div>
                <span className="font-bold text-gray-900">@Healthyzway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about SeaMoss</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-emerald-200 transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Healthyzway?
            </h2>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Convenient Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Simplify your ordering process with our secure MMG payment option for 
                seamless transactions
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

      {/* Final CTA Section */}
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
                  onClick={() => setSelectedFlavor(product.id)}
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
              onClick={() => {
                addToCart(products.find(p => p.id === selectedFlavor));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
              MMG Payment Available
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to answer any questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="tel:+5926257160"
              className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-emerald-200 hover:border-emerald-400"
            >
              <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-emerald-700 font-semibold">+(592) 625-7160</p>
              <p className="text-emerald-700 font-semibold">+(592) 710-7160</p>
            </a>

            <a 
              href="mailto:Healthyzway@gmail.com"
              className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-blue-200 hover:border-blue-400"
            >
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-blue-700 font-semibold text-sm break-all">Healthyzway@gmail.com</p>
            </a>

            <a 
              href="https://instagram.com/healthyway.gy"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-pink-200 hover:border-pink-400"
            >
              <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
              <p className="text-pink-700 font-semibold">@healthyway.gy</p>
              <p className="text-pink-700 font-semibold">@Healthyzway</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🌿</div>
                <div className="text-2xl font-bold">Healthyzway</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium SeaMoss Gel - Nature's 92 minerals for your complete wellness
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
                <p>+(592) 710-7160</p>
                <p>Healthyzway@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/healthyway.gy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://tiktok.com/@Healthyzway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                >
                  <div className="text-xl">📱</div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 Healthyzway. All rights reserved.</p>
            <p className="text-sm mt-2">Made with 🌊 for your health & wellness</p>
          </div>
        </div>
      </footer>

      {/* CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}