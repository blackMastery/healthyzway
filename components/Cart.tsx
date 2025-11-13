import React from 'react';
import { ShoppingCart, X, Plus, Minus, Lock } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export default function Cart({
  isOpen,
  cart,
  cartCount,
  cartTotal,
  onClose,
  onUpdateQuantity
}: CartProps) {
  if (!isOpen) return null;

  // Generate WhatsApp message with cart details
  const generateWhatsAppMessage = () => {
    let message = "🌊 *Healthyzway Order* 🌊\n\n";
    message += "*Order Details:*\n";
    message += "─────────────────\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.emoji} *${item.name}*\n`;
      message += `   Size: ${item.size}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: $${(item.price / 100).toFixed(2)} each\n`;
      message += `   Subtotal: $${((item.price * item.quantity) / 100).toFixed(2)}\n\n`;
    });

    message += "─────────────────\n";
    message += `*Total: $${(cartTotal / 100).toFixed(2)}*\n\n`;
    message += "I would like to complete this order. Thank you! 🙏";

    return encodeURIComponent(message);
  };

  const whatsappNumber = "5926257160"; // Guyana WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart ({cartCount})</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button
                onClick={onClose}
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
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-emerald-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
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
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Complete Order via WhatsApp
                </a>
                <p className="text-center text-sm text-gray-600 mt-3">
                  💬 Send your order details via WhatsApp
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <a
                    href="tel:+5926257160"
                    className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center gap-1"
                  >
                    📞 Or call: +(592) 625-7160
                  </a>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-800 font-medium mb-2">
                  <Lock className="w-5 h-5" />
                  Payment Upon Delivery
                </div>
                <p className="text-sm text-emerald-700">Pay securely with MMG when your order arrives. Your order will be freshly prepared.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
