import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import GoogleMap from './GoogleMap';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <span className="text-amber-400 font-serif italic text-xl tracking-wide">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">
                Visit Aura Café
              </h2>
              <p className="text-stone-400 mt-6 text-lg leading-relaxed">
                We'd love to hear from you. Whether you have a question about our menu, 
                want to book a table, or just want to say hello, we're here for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    123 Coffee Street, Artisanal District<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-amber-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-amber-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    hello@auracafe.com<br />
                    events@auracafe.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400/50 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
              ></textarea>
              <button className="bg-amber-600 text-white font-bold uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[600px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10"
          >
            <GoogleMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
