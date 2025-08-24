import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

const RecentNewsAndRankings = () => {
  const recentNews = [
    {
      id: 1,
      category: '#Pollar. 87 - 12 July 2023',
      title: 'Baku 2023 World Taekwondo Championships',
      image: '/images/recentNews.png'
    },
    {
      id: 2,
      category: '#Goft. Toni - 20 July 2023',
      date: '12 July 2023',
      title: 'Baku 2023 Taekwondo Championships',
      image: '/images/recentNews2.png'
    },
    {
      id: 3,
      category: '#Cricket. Toni - 27 July 2023',
      date: '20 July 2023',
      title: 'Open Championship Royal Liverpool Golf',
      image: '/images/recentNews3.png'
    },

  ];

  const clubRankings = [
    { position: 1, club: 'Manchester City', logo: '/images/manchester.png', gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
    { position: 2, club: 'Liverpool', logo: '/images/manchester.png', gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
    { position: 3, club: 'Chelsea', logo: '/images/manchester.png', gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43 },
    { position: 4, club: 'Tottenham Hotspur', logo: '/images/manchester.png', gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29 },
    { position: 5, club: 'Arsenal', logo: '/images/manchester.png', gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13 },
    { position: 6, club: 'Manchester United', logo: '/images/manchester.png', gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0 },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Recent News Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="text-left text-2xl lg:text-3xl font-normal text-gray-900 mb-8"
            >
              Recent News
            </motion.h2>

            <div className="md:flex gap-6">
              {/* Featured Article - Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.03 }}
                className="relative w-72 h-72 rounded-md overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <img
                  src={'/images/karateFighter.png'}
                  alt={recentNews.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-orange-400 text-sm font-medium">
                    {recentNews.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-2 leading-tight">
                    {recentNews.title}
                  </h3>
                </div>
              </motion.div>

              {/* News List - Right */}
              <div className="flex-1 space-y-4 mt-2 md:mt-0">
                {recentNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1, type: 'spring' }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="text font-medium">{article.category}</span>
                      </div>
                      <h4 className="text-left text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </motion.article>
                ))}

                {/* More Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-colors mt-6"
                >
                  More →
                </motion.button>
              </div>
            </div>
          </div>

          {/* Clubs Ranking Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
              className="text-2xl lg:text-3xl font-normal text-gray-900 mb-8"
            >
              Clubs Ranking
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="bg-gray-50 rounded-lg overflow-x-auto"
            >
              {/* Table wrapper for mobile scroll */}
              <div className="min-w-[360px]">
                {/* Table Header */}
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-2 bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wide">
                  <div className="w-6 sm:w-8">#</div>
                  <div className="flex-1 text-left min-w-[120px] sm:min-w-[140px]">Club</div>
                  <div className="w-8 sm:w-10 text-center">GP</div>
                  <div className="w-8 sm:w-10 text-center">W</div>
                  <div className="w-8 sm:w-10 text-center">D</div>
                  <div className="w-8 sm:w-10 text-center">L</div>
                  <div className="w-8 sm:w-10 text-center">F</div>
                  <div className="w-8 sm:w-10 text-center">A</div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {clubRankings.map((team, index) => (
                    <motion.div
                      key={team.position}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05, type: 'spring' }}
                      whileHover={{ backgroundColor: 'rgba(243, 244, 246, 1)' }}
                      className="flex items-center gap-1 sm:gap-2 px-2 py-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-6 sm:w-8 font-medium text-gray-900">
                        {team.position}
                      </div>
                      <div className="flex-1 flex items-center gap-1 sm:gap-2 min-w-[120px] sm:min-w-[140px]">
                        <img src={team.logo} className='h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0'/>
                        <span className="font-medium text-gray-900 truncate">{team.club}</span>
                      </div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.gp}</div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.w}</div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.d}</div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.l}</div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.f}</div>
                      <div className="w-8 sm:w-10 text-center text-gray-600">{team.a}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNewsAndRankings;