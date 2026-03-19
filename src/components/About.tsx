import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <span className="text-amber-600 font-serif italic text-xl tracking-wide">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              A Passion for the Perfect Brew
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              At Aura Café, we believe that coffee is more than just a drink—it's an experience. 
              From the carefully sourced beans to the meticulous roasting process, every cup is 
              crafted with precision and a deep respect for the craft.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              Our space is designed to be a sanctuary from the bustle of the city. Whether you're 
              here for a quiet morning reflection, a creative brainstorming session, or a warm 
              conversation with friends, our ambiance and quality will make you feel right at home.
            </p>
            
            <div className="flex items-center gap-8 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-stone-900">12+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Unique Blends</span>
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-serif font-bold text-stone-900">8k+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Happy Customers</span>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1200"
                alt="Café interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-600/10 backdrop-blur-xl rounded-full border border-amber-600/20 flex items-center justify-center p-6 text-center"
            >
              <span className="text-amber-800 font-serif italic text-sm">
                "The best coffee in the city, hands down."
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
