
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VLU</span>
              </div>
              <span className="font-bold text-lg">VLU Tequesquitengo</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos la comunicación hotelera con estrategias innovadoras 
              que conectan con huéspedes y aumentan la ocupación de manera sostenible.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Tequesquitengo, Morelos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/campanas" className="text-gray-300 hover:text-white transition-colors">
                  Campañas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@vlutequesquitengo.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+52 777 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">Consultoría disponible</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 VLU Tequesquitengo. Estrategia de Comunicación y Medios.
          </p>
        </div>
      </div>
    </footer>
  );
}
