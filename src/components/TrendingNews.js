import React from 'react';
import { motion } from 'framer-motion';

const TrendingNews = () => {
  const trendingArticles = [
    {
      id: 1,
      category: 'Race49',
      date: 'Race98 - 03 June 2023',
      title: '6-Year-Old Horse Dies at Belmont Park After Race Injury',
      description: 'NEW YORK - A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week\'s',
      image: '/images/trendingNews1.png'
    },
    {
      id: 2,
      category: 'Tennis',
      date: 'Jony.Ls - 03 June 2023',
      title: 'Savilia Blunk Embraces Longer Season With World Cup',
      description: 'Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some',
      image: '/images/trendingNews2.png'
    },
    {
      id: 3,
      category: 'King F',
      date: 'King.F - 03 June 2023',
      title: 'Ryan Garcia is fighting again, this time on social media',
      description: 'Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on',
      image: '/images/trendingNews3.png'
    }
  ];

  const featuredArticle = {
    category: 'Cycling',
    date: '03 June 2023',
    title: 'DISCOVER THE MEMBER BENEFITS OF USA CYCLING!',
    subtitle: 'Debits',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Trending News List */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-left text-2xl lg:text-3xl font-normal text-gray-900 mb-8"
            >
              Trending News
            </motion.h2>

            <div className="space-y-6 p-4">
              {trendingArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Article Image */}
                    <div className="w-40 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {/* <span className="font-medium">{article.category}</span> */}
                        <span>{article.date}</span>
                      </div>
                      <h3 className="text-left text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-left text-sm text-gray-600 line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

          
          </div>

          {/* Right Column - Featured Article */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={'/images/cycling.png'}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Top Badge */}
              <div className="self-start">
                <span className="px-6 py-2 bg-transparent border border-white text-white text-base font-medium rounded-sm">
                  Cycling
                </span>
              </div>

              {/* Bottom Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>{featuredArticle.subtitle}</span>
                  <span>-</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {featuredArticle.title}
                </h3>
              </div>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;