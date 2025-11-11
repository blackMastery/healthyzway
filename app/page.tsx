'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import WhyChoose from '@/components/WhyChoose';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import StickyBar from '@/components/StickyBar';

export default function HealthyzwayLanding() {
  const [selectedFlavor, setSelectedFlavor] = useState('original');
  const [selectedSize, setSelectedSize] = useState<'8oz' | '11oz'>('8oz');
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBenefitTab, setActiveBenefitTab] = useState('hair');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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
      price: { '8oz': 200000, '11oz': 250000 },
      description: 'Pure & Natural - No Additives',
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-500',
      emoji: '🌊'
    },
    {
      id: 'apple',
      name: 'Apple & Ginger',
      price: { '8oz': 250000, '11oz': 300000 },
      description: 'Refreshing & Energizing',
      color: 'green',
      gradient: 'from-green-400 to-lime-500',
      emoji: '🍏'
    },
    {
      id: 'watermelon',
      name: 'Watermelon',
      price: { '8oz': 250000, '11oz': 300000 },
      description: 'Sweet & Hydrating',
      color: 'pink',
      gradient: 'from-pink-400 to-red-500',
      emoji: '🍉'
    },
    {
      id: 'dragon',
      name: 'Dragonfruit',
      price: { '8oz': 310000, '11oz': 360000 },
      description: 'Exotic & Delicious',
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500',
      emoji: '🐉'
    },
    {
      id: 'strawberry',
      name: 'Strawberry',
      price: { '8oz': 350000, '11oz': 400000 },
      description: 'Rich & Flavorful',
      color: 'red',
      gradient: 'from-red-400 to-rose-500',
      emoji: '🍓'
    }
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

  const addToCart = (product: typeof products[0]) => {
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

  const updateQuantity = (id: string, delta: number) => {
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
      <AnnouncementBar />

      <Navigation
        cartCount={cartCount}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <StickyBar
        show={showStickyBar}
        product={products.find(p => p.id === selectedFlavor)}
        selectedSize={selectedSize}
        onAddToCart={() => addToCart(products.find(p => p.id === selectedFlavor)!)}
      />

      <Cart
        isOpen={isCartOpen}
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
      />

      <Hero />

      <Benefits
        activeBenefitTab={activeBenefitTab}
        onSetActiveBenefitTab={setActiveBenefitTab}
      />

      <Products
        products={products}
        selectedFlavor={selectedFlavor}
        selectedSize={selectedSize}
        onSelectFlavor={setSelectedFlavor}
        onSelectSize={setSelectedSize}
        onAddToCart={addToCart}
      />

      <Testimonials
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        onSetCurrentTestimonial={setCurrentTestimonial}
      />

      <FAQ
        faqs={faqs}
        expandedFaq={expandedFaq}
        onSetExpandedFaq={setExpandedFaq}
      />

      <WhyChoose />

      <FinalCTA
        products={products}
        selectedFlavor={selectedFlavor}
        onSelectFlavor={setSelectedFlavor}
        onAddToCart={() => {
          addToCart(products.find(p => p.id === selectedFlavor)!);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <Contact />

      <Footer />
    </div>
  );
}
