import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">We're here to answer any questions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="tel:+5926257160"
            className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-emerald-200 hover:border-emerald-400"
          >
            <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-emerald-700 font-semibold">+(592) 625-7160</p>
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
            href="https://www.instagram.com/healthyzway.gy?igsh=NmdqZmRlODBiYTB4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-pink-200 hover:border-pink-400"
          >
            <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-pink-700 font-semibold">@healthyzway.gy</p>
            <p className="text-pink-700 font-semibold text-xs">Healthyzway</p>
          </a>

          <a
            href="https://www.facebook.com/share/1AFRXHYMjf/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl text-center hover:shadow-xl transition border-2 border-blue-200 hover:border-blue-400"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Facebook</h3>
            <p className="text-blue-700 font-semibold">Healthyzway</p>
            <p className="text-blue-700 font-semibold text-xs">Same brand, different platform</p>
          </a>
        </div>
      </div>
    </section>
  );
}
