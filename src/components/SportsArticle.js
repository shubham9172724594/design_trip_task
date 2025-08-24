import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SportsArticle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      category: 'Basketball',
      image: '/images/sportArticle1.png',
      author: {
        name: 'Jake Will',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      date: '04 June 2023',
      title: '5 Exercises Basketball Players Should Be Using To Develop Strength',
      description: 'This article was written by Jake Willhiote from HealthElated.com Strength in basketball isn\'t all about a massive body mass or ripped muscles.'
    },
    {
      id: 2,
      category: 'Hockey',
      image: '/images/sportArticle2.png',
      author: {
        name: 'Foxi zacon',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
      },
      date: '03 June 2023',
      title: 'Golden Knights out to fulfill owner\'s quest to win Stanley Cup in 6th year',
      description: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.'
    },
    {
      id: 3,
      category: 'Badminton',
      image: '/images/sportArticle3.png',
      author: {
        name: 'Bong Lozada',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      date: '01 June 2023',
      title: '\'Outdoor\' Badminton Gets Support From Local Federation',
      description: 'The Badminton World Federation is developing Air Badminton and the country\'s governing body, Philippine Badminton Association.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const getVisibleArticles = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % articles.length;
      result.push(articles[index]);
    }
    return result;
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left text-2xl lg:text-3xl font-normal text-gray-900 mb-10"
        >
          Sports Article
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {getVisibleArticles().map((article, index) => (
              <motion.article
                key={`${article.id}-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Article Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-transparent border border-white text-white text-sm font-medium rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-left text-sm font-medium text-gray-900">{article.author.name}</p>
                  </div>
                </div>

                {/* Article Content */}
                <div className="space-y-3">
                  <p className="text-left text-xs text-gray-500">{article.date}</p>

                  <h3 className="text-left text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-left text-sm text-gray-600 line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className=" h-12 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg flex items-center justify-center transition-colors"
          >
            <img className='w-[70px] h-[50px]' src={'/icons/backArrow.png'} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className=" h-12 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <img className='w-[70px] h-[50px] p-1.5' src={'/icons/nextArrow.png'} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SportsArticle;