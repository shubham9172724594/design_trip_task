import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Category', href: '#' },
    { name: 'Trending News', href: '#' },
    { name: 'Recent News', href: '#' },
    { name: 'Clubs Ranking', href: '#' },
    { name: 'Sports Article', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-md py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <h1 className="text-2xl">
                <span className="font-light italic text-black">Sport</span>
                <span className="font-normal text-black"> News</span>
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.button
                    onClick={() => setActiveItem(item.name)}
                    className={`px-3 py-2 transition-all duration-200 ${
                      activeItem === item.name 
                        ? 'text-black font-bold' 
                        : 'text-[#26262699] hover:text-black font-normal'
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#B8C2CE] rounded-lg transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm text-white">Search</span>
                </button>
              </motion.div>

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <div className="w-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  className="w-full h-0.5 bg-gray-800 block"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className="w-full h-0.5 bg-gray-800 block"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  className="w-full h-0.5 bg-gray-800 block"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Mobile Search */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="w-full px-4 py-3 pl-10 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setActiveItem(item.name);
                        setIsOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        activeItem === item.name
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Follow us</p>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all"
                      >
                        <span className="text-xs font-medium capitalize">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;