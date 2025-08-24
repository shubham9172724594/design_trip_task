import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedArticle = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const articles = [
    {
      id: 1,
      category: 'Football',
      source: 'Agence France-Presse',
      date: '04 June 2023',
      title: 'LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS',
      description: 'The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'Basketball',
      source: 'Sports Network',
      date: '04 June 2023',
      title: 'NBA FINALS GAME 2 DELIVERS RECORD-BREAKING PERFORMANCES',
      description: 'Historic showdown between two powerhouse teams creates unforgettable moments for basketball fans worldwide',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'Tennis',
      source: 'International Tennis',
      date: '04 June 2023',
      title: 'FRENCH OPEN SEMIFINALS SET STAGE FOR EPIC CHAMPIONSHIP CLASH',
      description: 'Two tennis legends advance to finals in what promises to be the match of the century',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop'
    },
    {
      id: 4,
      category: 'Baseball',
      source: 'Major League Reports',
      date: '04 June 2023',
      title: 'WORLD SERIES CONTENDERS EMERGE AS SEASON REACHES CLIMAX',
      description: 'Championship race intensifies as top teams battle for playoff positions in final stretch',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&h=600&fit=crop'
    }
  ];

  const currentArticle = articles.find(article => article.id === currentSlide);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Featured Article */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={currentArticle.image}
                alt={currentArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10">
                {/* Top Badge */}
                <div className="self-start">
                  <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 bg-transparent border border-white text-white text-sm font-medium rounded-sm"
                  >
                    {currentArticle.category}
                  </motion.span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4 max-w-4xl">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 text-white/80 text-sm"
                  >
                    <span>{currentArticle.source}</span>
                    <span>-</span>
                    <span className=''>{currentArticle.date}</span>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-left text-2xl lg:text-4xl xl:text-[36px] font-bold text-white leading-tight"
                  >
                    {currentArticle.title}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-left text-white/90 text-base lg:text-lg max-w-2xl"
                  >
                    {currentArticle.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end mt-8 gap-10">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-[70px] h-10 bg-gray-400 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg> */}
            <img className='w-[70px] h-[50px]' src={'/icons/backArrow.png'} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-7">
            {[1, 2, 3, 4].map((number) => (
              <motion.button
                key={number}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(number)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentSlide === number
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-400'
                  }`}
              >
                {number}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-[70px] h-10 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> */}
            <img className='w-[70px] h-[50px] p-1.5' src={'/icons/nextArrow.png'} />

          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;