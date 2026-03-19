import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Coffee', 'Tea', 'Snacks', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: 'Artisanal Espresso',
    category: 'Coffee',
    price: '$4.50',
    description: 'A rich, full-bodied shot of our signature house blend.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Velvet Latte',
    category: 'Coffee',
    price: '$5.75',
    description: 'Creamy steamed milk poured over a double shot of espresso.',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Matcha Green Tea',
    category: 'Tea',
    price: '$6.25',
    description: 'Premium ceremonial grade matcha whisked with silky milk.',
    image: 'https://images.unsplash.com/photo-1515823662273-ad951e778201?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Avocado Toast',
    category: 'Snacks',
    price: '$12.50',
    description: 'Sourdough bread topped with smashed avocado and chili flakes.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: 'Tiramisu Cake',
    category: 'Desserts',
    price: '$8.50',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    name: 'Honey Croissant',
    category: 'Snacks',
    price: '$4.25',
    description: 'Flaky, buttery croissant drizzled with organic honey.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400',
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-serif italic text-xl tracking-wide"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-2"
          >
            Explore the Menu
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-stone-800 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-stone-800 font-bold text-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-6 text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-700 transition-colors">
                    Add to Order +
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
