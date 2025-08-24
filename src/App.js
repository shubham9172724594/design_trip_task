import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import TrendingNews from './components/TrendingNews';
import FeaturedArticle from './components/FeaturedArticle';
import RecentNewsAndRankings from './components/RecentNewsAndRankings';
import SportsArticle from './components/SportsArticle';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16">
        <HeroSection />
        <CategorySection />
        <TrendingNews />
        <FeaturedArticle />
        <RecentNewsAndRankings />
        <SportsArticle />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
