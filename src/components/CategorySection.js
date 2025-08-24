import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'FOOTBALL',
      type: 'text-first',
      image: '/images/tableTennis.png'
    },
    {
      id: 2,
      name: 'BASKETBALL',
      type: 'image-first',
      image: '/images/tableTennis.png'
    },
    {
      id: 3,
      name: 'CAR SPORT',
      type: 'text-first',
      image: '/images/tableTennis.png'
    },
    {
      id: 4,
      name: 'TABLE TENNIS',
      type: 'image-first',
      image: '/images/tableTennis.png'
    }
  ];

  return (
    <section className="py-16 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-3xl font-normal text-gray-900 mb-10"
        >
          Category
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Football - Text then Image */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors">
                FOOTBALL
              </h3>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="/images/football.png"
                alt="Football"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Basketball - Image then Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="images/basketball.png"
                alt="Basketball"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                BASKET<br />BALL
              </h3>
            </div>
          </motion.div>

          {/* Car Sport - Text then Image */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors">
                CAR SPORT
              </h3>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="images/carSport.png"
                alt="Car Sport"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Table Tennis - Image then Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="images/tableTennis.png"
                alt="Basketball"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="bg-[#E8EBF0] rounded-lg p-6 h-32 flex items-center justify-center group cursor-pointer hover:bg-[#DDE1E8] transition-colors">
              <h3 className="text-xl font-bold text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                BASKET<br />BALL
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;