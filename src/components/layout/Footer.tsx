import { Link } from 'react-router-dom';
import { Coffee, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="font-display text-xl font-bold">Brew & Bean</span>
            </Link>
            <p className="text-sm opacity-80">
              Premium coffee roasted with passion. From farm to cup, we bring you the finest beans from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/products" className="hover:opacity-100 transition-opacity">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/products?category=beans" className="hover:opacity-100 transition-opacity">
                  Coffee Beans
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:opacity-100 transition-opacity">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/shipping" className="hover:opacity-100 transition-opacity">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:opacity-100 transition-opacity">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>123 Coffee Street, Roast City, RC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@brewandbean.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Brew & Bean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
