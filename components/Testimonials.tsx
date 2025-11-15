import React from 'react';
import { Star, ChevronDown, Instagram } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  flavor: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  currentTestimonial: number;
  onSetCurrentTestimonial: (index: number) => void;
}

export default function Testimonials({
  testimonials,
  currentTestimonial,
  onSetCurrentTestimonial
}: TestimonialsProps) {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results from Real People
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex gap-1 text-yellow-400 text-3xl">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
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
                  onClick={() => onSetCurrentTestimonial(index)}
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
            onClick={() => onSetCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-emerald-50 transition"
          >
            <ChevronDown className="w-6 h-6 rotate-90 text-emerald-600" />
          </button>
          <button
            onClick={() => onSetCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-4 hover:bg-emerald-50 transition"
          >
            <ChevronDown className="w-6 h-6 -rotate-90 text-emerald-600" />
          </button>
        </div>

        {/* Social Media Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">As seen on:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a
              href="https://www.instagram.com/healthyzway.gy?igsh=NmdqZmRlODBiYTB4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Instagram className="w-8 h-8 text-pink-600" />
              <span className="font-bold text-gray-900">@healthyzway.gy</span>
            </a>
            <a
              href="https://www.facebook.com/share/1AFRXHYMjf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <span className="font-bold text-gray-900">Healthyzway (Facebook)</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">Both pages are Healthyzway - same brand, different platforms</p>
        </div>
      </div>
    </section>
  );
}
