import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage(currentPage < 4 ? currentPage + 1 : 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 4);
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-20 right-32 w-16 h-16 border border-gray-400 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 border border-gray-400"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gray-400 transform rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Newsletter Subscription - Left Side */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-left text-4xl lg:text-5xl xl:text-6xl font-black leading-none">
                <span className="block text-gray-800">NEWSLETTER</span>
                <span className="block text-gray-400">SUBSCRIPTION</span>
              </h2>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleEmailSubmit}
              className="flex max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="shovon.khan0099@gmail.com"
                className="flex-1 px-4 py-3 text-gray-600 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 transform -rotate-[40deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.form>


          </div>

          {/* American Football Player Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/images/footerImage.png"
              alt="American Football Player"
              className="w-80 h-96 lg:w-full lg:h-[480px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Pagination Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-between gap-4 mt-12"
        >
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.036 6.803c-2.881 0-5.209 2.328-5.209 5.209s2.328 5.209 5.209 5.209 5.209-2.328 5.209-5.209-2.328-5.209-5.209-5.209zm0 8.603c-1.876 0-3.394-1.518-3.394-3.394s1.518-3.394 3.394-3.394 3.394 1.518 3.394 3.394-1.518 3.394-3.394 3.394zm6.655-8.817c0 .673-.547 1.22-1.22 1.22s-1.22-.547-1.22-1.22.547-1.22 1.22-1.22 1.22.547 1.22 1.22zM12.036 3.438c-2.058 0-6.524-.086-8.403 1.793-1.879 1.879-1.793 6.345-1.793 8.403s-.086 6.524 1.793 8.403c1.879 1.879 6.345 1.793 8.403 1.793s6.524.086 8.403-1.793c1.879-1.879 1.793-6.345 1.793-8.403s.086-6.524-1.793-8.403c-1.879-1.879-6.345-1.793-8.403-1.793zm12.297 8.566c0 2.115.019 4.206-.104 6.317-.123 2.458-.713 4.637-2.601 6.525-1.888 1.888-4.067 2.478-6.525 2.601-2.111.123-4.202.104-6.317.104s-4.206.019-6.317-.104c-2.458-.123-4.637-.713-6.525-2.601C.456 18.454-.134 16.275-.257 13.817-.38 11.706-.361 9.615-.361 7.5s-.019-4.206.104-6.317C-.134 -1.275.456-3.454 2.344-5.342 4.232-7.23 6.411-7.82 8.869-7.943 10.98-8.066 13.071-8.047 15.186-8.047s4.206-.019 6.317.104c2.458.123 4.637.713 6.525 2.601 1.888 1.888 2.478 4.067 2.601 6.525.123 2.111.104 4.202.104 6.317z" />
              </svg>
            </motion.a>
          </motion.div>
          <div className='flex gap-8'>
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              className="h-12 bg-gray-400 hover:bg-gray-500 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              <img className='w-[70px] h-[50px]' src={'/icons/backArrow.png'} />
            </motion.button>

            {/* Page Numbers */}
            <div className="flex items-center gap-8">
              {[1, 2, 3, 4].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentPage === page
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-400'
                    }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="h-12 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              <img className='w-[70px] h-[50px] p-1.5' src={'/icons/nextArrow.png'} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;