import React from 'react';
import { motion } from 'framer-motion';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'FOOTBALL',
      type: 'text-first',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'BASKETBALL',
      type: 'image-first',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'CAR SPORT',
      type: 'text-first',
      image: 'https://images.unsplash.com/photo-1539399276867-5b8e5b8c5e5e?w=500&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'TABLE TENNIS',
      type: 'image-first',
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=500&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-3xl font-normal text-gray-900 mb-10"
        >
          Category
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Football - Text then Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors">
                FOOTBALL
              </h3>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&h=400&fit=crop"
                alt="Football"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Basketball - Image then Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop"
                alt="Basketball"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                BASKET<br/>BALL
              </h3>
            </div>
          </motion.div>

          {/* Car Sport - Text then Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors">
                CAR SPORT
              </h3>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1632997975451-6bfd407f817e?w=500&h=400&fit=crop"
                alt="Car Sport"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Table Tennis - Image then Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="relative h-48 rounded-lg overflow-hidden bg-black group cursor-pointer">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Table Tennis Paddle Illustration */}
                  <div className="w-24 h-24 bg-red-500 rounded-full relative">
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-blue-500 rounded-b-lg"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                TABLE<br/>TENNIS
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;