import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ExternalLink, 
  TrendingUp,
  Globe,
  Clock,
  Bookmark,
  Share2,
  RefreshCw
} from 'lucide-react';
import DashboardNav from '../components/DashboardNav';

const News = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [refreshing, setRefreshing] = useState(false);

  // Mock agricultural news data - In real implementation, this would come from an API
  const mockNewsData = [
    {
      id: 1,
      title: "New AI Technology Revolutionizes Crop Disease Detection",
      summary: "Researchers at leading agricultural institutes have developed an AI system that can detect crop diseases with 95% accuracy using smartphone cameras.",
      content: "The new AI technology uses machine learning algorithms to analyze images of crops and identify diseases, pests, and nutrient deficiencies. This breakthrough could help farmers worldwide increase their crop yields and reduce losses.",
      category: "Technology",
      source: "Agricultural Times",
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop",
      url: "#",
      trending: true
    },
    {
      id: 2,
      title: "Government Announces New Subsidy Scheme for Organic Farming",
      summary: "The Ministry of Agriculture has launched a comprehensive subsidy program to encourage farmers to adopt organic farming practices.",
      content: "The new scheme provides financial assistance for organic certification, training programs, and sustainable farming equipment. Farmers can apply for subsidies up to ₹50,000 per acre for organic farming initiatives.",
      category: "Policy",
      source: "Ministry of Agriculture",
      publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      url: "#",
      trending: false
    },
    {
      id: 3,
      title: "Climate-Smart Agriculture Practices Show 30% Yield Increase",
      summary: "Farmers implementing climate-smart agriculture techniques have reported significant improvements in crop yields and soil health.",
      content: "A three-year study across 500 farms shows that climate-smart practices like precision irrigation, cover cropping, and integrated pest management can increase yields by 30% while reducing water usage by 25%.",
      category: "Research",
      source: "Agricultural Research Journal",
      publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      url: "#",
      trending: true
    },
    {
      id: 4,
      title: "New Drought-Resistant Rice Varieties Developed",
      summary: "Scientists have successfully developed new rice varieties that can withstand prolonged drought conditions while maintaining high nutritional value.",
      content: "The new rice varieties, developed through advanced breeding techniques, can survive with 40% less water than traditional varieties. This breakthrough is particularly important for regions facing water scarcity.",
      category: "Research",
      source: "Crop Science Today",
      publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=300&fit=crop",
      url: "#",
      trending: false
    },
    {
      id: 5,
      title: "Digital Agriculture Platform Connects 10,000+ Farmers",
      summary: "A new digital platform has successfully connected over 10,000 farmers across India, enabling them to share knowledge and access market information.",
      content: "The platform provides real-time weather updates, market prices, expert advice, and peer-to-peer learning opportunities. Farmers report increased productivity and better market access through the platform.",
      category: "Technology",
      source: "Digital Agriculture Weekly",
      publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=500&h=300&fit=crop",
      url: "#",
      trending: true
    },
    {
      id: 6,
      title: "Sustainable Farming Practices Reduce Carbon Footprint by 40%",
      summary: "A comprehensive study shows that sustainable farming practices can significantly reduce agriculture's carbon footprint while improving soil health.",
      content: "Farmers adopting regenerative agriculture, agroforestry, and organic practices have reduced their carbon emissions by 40% compared to conventional farming methods. The study covers 1,000 farms across different regions.",
      category: "Sustainability",
      source: "Environmental Agriculture Review",
      publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
      imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop",
      url: "#",
      trending: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Policy', label: 'Policy' },
    { value: 'Research', label: 'Research' },
    { value: 'Sustainability', label: 'Sustainability' },
    { value: 'Market', label: 'Market' }
  ];

  const sortOptions = [
    { value: 'latest', label: 'Latest First' },
    { value: 'trending', label: 'Trending' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNews(mockNewsData);
        setFilteredNews(mockNewsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    let filtered = news;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case 'oldest':
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        case 'trending':
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        default:
          return 0;
      }
    });

    setFilteredNews(filtered);
  }, [news, searchTerm, selectedCategory, sortBy]);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Simulate refresh
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In real implementation, this would fetch fresh data from API
      setNews([...mockNewsData]);
    } catch (error) {
      console.error('Error refreshing news:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  };

  const NewsCard = ({ article }) => (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 group">
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {article.trending && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
          <Bookmark className="w-4 h-4 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Clock className="w-3 h-3" />
            {formatTimeAgo(article.publishedAt)}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4" />
            <span>{article.source}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <a
              href={article.url}
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              Read More
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  if (loading) {
    return (
      <>
        <DashboardNav />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading agricultural news...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardNav />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Agricultural News
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest developments in agriculture, technology, and farming practices
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search agricultural news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Refresh Button */}
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredNews.length} of {news.length} articles
            </p>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find more articles.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
