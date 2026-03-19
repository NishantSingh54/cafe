import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Aura Café
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Crafting experiences through the art of coffee. Join us for a moment 
              of peace and a perfect brew.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-stone-400 hover:bg-amber-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-stone-500 text-sm hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Opening Hours</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between text-sm">
                <span className="text-stone-500">Mon - Fri</span>
                <span className="text-stone-300">07:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-stone-500">Saturday</span>
                <span className="text-stone-300">08:00 - 21:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-stone-500">Sunday</span>
                <span className="text-stone-300">09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-stone-500 text-sm mb-6">
              Subscribe to get special offers and coffee news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
              <button className="bg-amber-600 text-white font-bold uppercase tracking-widest text-[10px] py-3 rounded-xl hover:bg-amber-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">
            © 2026 Aura Café. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-600 text-xs hover:text-stone-400">Privacy Policy</a>
            <a href="#" className="text-stone-600 text-xs hover:text-stone-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
