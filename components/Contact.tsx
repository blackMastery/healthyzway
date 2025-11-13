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

        <div className="grid md:grid-cols-3 gap-6">
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
            <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
            <p className="text-pink-700 font-semibold">@healthyzway.gy</p>
            <p className="text-pink-700 font-semibold">@Healthyzway</p>
          </a>
        </div>
      </div>
    </section>
  );
}
