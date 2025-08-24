import React from 'react';
import { motion } from 'framer-motion';

const RecentNewsAndRankings = () => {
  const recentNews = [
    {
      id: 1,
      category: 'Day 5 Highlights',
      title: 'Baku 2023 World Taekwondo Championships',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      category: '#Tokyo',
      date: '12 July 2023',
      title: 'Baku 2023 Taekwondo Championships',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      category: '#Golf Tour',
      date: '20 July 2023', 
      title: 'Open Championship Royal Liverpool Golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      category: '#Cricket Tour',
      date: '27 July 2023',
      title: 'Ireland Tour of England Test 2023',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&h=100&fit=crop'
    }
  ];

  const clubRankings = [
    { position: 1, club: 'Manchester City', logo: '🔵', gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
    { position: 2, club: 'Liverpool', logo: '🔴', gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
    { position: 3, club: 'Chelsea', logo: '🔵', gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43 },
    { position: 4, club: 'Tottenham Hotspur', logo: '⚪', gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29 },
    { position: 5, club: 'Arsenal', logo: '🔴', gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13 },
    { position: 6, club: 'Manchester United', logo: '🔴', gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0 },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Recent News Section */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left text-2xl lg:text-3xl font-normal text-gray-900 mb-8"
            >
              Recent News
            </motion.h2>

            <div className="flex gap-6">
              {/* Featured Article - Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 h-72 rounded-md overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <img 
                  src={'/images/karateFighter.png'}
                  alt={recentNews[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-orange-400 text-sm font-medium">
                    {recentNews[0].category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-2 leading-tight">
                    {recentNews[0].title}
                  </h3>
                </div>
              </motion.div>

              {/* News List - Right */}
              <div className="flex-1 space-y-4">
                {recentNews.slice(1).map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
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
                        <span className="text-blue-600 font-medium">{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </motion.article>
                ))}

                {/* More Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl lg:text-3xl font-normal text-gray-900 mb-8"
            >
              Clubs Ranking
            </motion.h2>

            <div className="bg-gray-50 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-10 gap-2 px-4 py-3 bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wide">
                <div className="col-span-1">#</div>
                <div className="col-span-3">Club</div>
                <div className="text-center">GP</div>
                <div className="text-center">W</div>
                <div className="text-center">D</div>
                <div className="text-center">L</div>
                <div className="text-center">F</div>
                <div className="text-center">A</div>
                <div className="text-center">GD</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {clubRankings.map((team, index) => (
                  <motion.div
                    key={team.position}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="grid grid-cols-10 gap-2 px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
                  >
                    <div className="col-span-1 font-medium text-gray-900">
                      {team.position}
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <span className="text-lg">{team.logo}</span>
                      <span className="font-medium text-gray-900">{team.club}</span>
                    </div>
                    <div className="text-center text-gray-600">{team.gp}</div>
                    <div className="text-center text-gray-600">{team.w}</div>
                    <div className="text-center text-gray-600">{team.d}</div>
                    <div className="text-center text-gray-600">{team.l}</div>
                    <div className="text-center text-gray-600">{team.f}</div>
                    <div className="text-center text-gray-600">{team.a}</div>
                    <div className="text-center font-medium text-gray-900">{team.gd}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNewsAndRankings;