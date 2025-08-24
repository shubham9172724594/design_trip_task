import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const todayNews = [
    {
      id: 1,
      category: 'Race49',
      date: '02 June 2023',
      title: 'Ethiopian runners took the top four spots.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'INDYCAR',
      date: '03 June 2023',
      title: 'IndyCar Detroit: Dixon quickest in second practice',
      image: 'https://images.unsplash.com/photo-1684488802280-7d61dccd8878?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Featured Article */}
          <div className="lg:col-span-9 relative">
            {/* Background Circle Shape */}
            <div className="absolute -left-32 lg:-left-48 top-1/3 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gray-100 rounded-full opacity-40"></div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 items-start">
                {/* Title - Left Side */}
                <div className="order-2 lg:order-1 pt-8 lg:pt-16">
                  <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none"
                  >
                    <span className="block text-[#3E3E3E]">TOP</span>
                    <span className="block text-[#3E3E3E]">SCORER TO</span>
                    <span className="block text-[#8E8E8E]">THE FINAL</span>
                    <span className="block text-[#C8C8C8]">MATCH</span>
                  </motion.h1>
                </div>
                
                {/* Basketball Player Image - Right Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
                >
                  <img 
                    src='/images/basketball-player.png'
                    alt="Basketball player"
                    className="w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[400px] h-auto object-contain"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </motion.div>
              </div>
              
              {/* Description and Button - Below Image */}
              <div className="mt-8 lg:mt-4 max-w-2xl">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-600 text-sm lg:text-base mb-6"
                >
                  The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-200"
                >
                  CONTINUE READING
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Today's News Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-[#F8F9FA] rounded-lg p-5">
              <h3 className="text-sm text-[#9CA3AF] font-normal mb-5">Today</h3>
              
              <div className="space-y-5">
                {todayNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                        <img 
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                          <span className="font-medium">{news.category}</span>
                          <span>•</span>
                          <span>{news.date}</span>
                        </div>
                        <h4 className="text-[13px] leading-[1.4] font-medium text-gray-900 group-hover:text-black transition-colors">
                          {news.title}
                        </h4>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;