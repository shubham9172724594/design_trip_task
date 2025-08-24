import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-800">Your Source for</span>
              <br />
              <span className="text-black">
                Sports News
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest sports news, live scores, and exclusive articles from around the world.
            </p>
            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Explore Latest News
            </button>
          </div>
        </section>

        {/* Sample Content Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Trending Sports News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Sports Article {item}</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
