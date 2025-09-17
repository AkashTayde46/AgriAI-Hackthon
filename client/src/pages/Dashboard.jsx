import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LogOut, 
  User, 
  Settings, 
  BarChart3, 
  Leaf, 
  TrendingUp,
  Calendar,
  MessageCircle,
  FileText,
  Shield,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import AuthContext from '../Authorisation/AuthProvider.jsx';
import { useAuthState } from '../hooks/useAuthState';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { user } = useAuthState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const dashboardCards = [
    {
      id: 1,
      title: 'Crop Advisory',
      description: 'Get AI-powered recommendations for your crops',
      longDescription: 'Receive personalized crop recommendations based on soil conditions, weather patterns, and market trends. Our AI analyzes your farm data to suggest optimal planting schedules, crop varieties, and farming techniques.',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      color: 'from-green-500 to-emerald-500',
      status: 'Active',
      features: ['Soil Analysis', 'Planting Schedule', 'Crop Rotation', 'Yield Prediction'],
      href: '#crop-advisory',
      buttonText: 'Get Recommendations'
    },
    {
      id: 2,
      title: 'Market Analysis',
      description: 'Track market prices and trends',
      longDescription: 'Stay ahead of market fluctuations with real-time price tracking, demand forecasting, and profit optimization strategies. Make informed decisions about when to sell your produce.',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-cyan-500',
      status: 'Live',
      features: ['Price Tracking', 'Demand Forecast', 'Profit Analysis', 'Market Trends'],
      href: '#market-analysis',
      buttonText: 'View Markets'
    },
    {
      id: 3,
      title: 'Weather Forecast',
      description: 'Get accurate weather predictions',
      longDescription: 'Access hyperlocal weather forecasts tailored for agriculture. Get alerts for frost, drought, heavy rain, and other weather conditions that could affect your crops.',
      icon: <Globe className="w-8 h-8 text-sky-600" />,
      color: 'from-sky-500 to-blue-500',
      status: 'Updated',
      features: ['7-Day Forecast', 'Weather Alerts', 'Rain Prediction', 'Temperature Monitoring'],
      href: '#weather',
      buttonText: 'Check Weather'
    },
    {
      id: 4,
      title: 'Disease Detection',
      description: 'Identify crop diseases early',
      longDescription: 'Upload photos of your crops to get instant disease identification and treatment recommendations. Our AI can detect over 50 common crop diseases with 95% accuracy.',
      icon: <Shield className="w-8 h-8 text-red-600" />,
      color: 'from-red-500 to-pink-500',
      status: 'AI Ready',
      features: ['Photo Analysis', 'Disease ID', 'Treatment Plans', 'Prevention Tips'],
      href: '#disease-detection',
      buttonText: 'Upload Photo'
    },
    {
      id: 5,
      title: 'Voice Assistant',
      description: 'Multi-language voice support',
      longDescription: 'Get instant answers to your farming questions in your preferred language. Our voice assistant supports 15+ languages and understands agricultural terminology.',
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-500 to-violet-500',
      status: 'Available',
      features: ['15+ Languages', 'Voice Commands', 'Quick Answers', 'Hands-free Use'],
      href: '#voice-assistant',
      buttonText: 'Start Voice Chat'
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'Access on your smartphone',
      longDescription: 'Take AgriAI with you wherever you go. Our mobile app provides full access to all features, offline mode, and GPS-based field mapping.',
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      color: 'from-indigo-500 to-purple-500',
      status: 'Download',
      features: ['Offline Mode', 'GPS Mapping', 'Push Notifications', 'Field Photos'],
      href: '#mobile-app',
      buttonText: 'Download App'
    },
    {
      id: 7,
      title: 'Cloud Sync',
      description: 'Sync data across devices',
      longDescription: 'Keep all your farm data synchronized across devices. Access your information from anywhere with automatic cloud backup and real-time sync.',
      icon: <Cloud className="w-8 h-8 text-teal-600" />,
      color: 'from-teal-500 to-green-500',
      status: 'Synced',
      features: ['Auto Backup', 'Real-time Sync', 'Data Security', 'Multi-device Access'],
      href: '#cloud-sync',
      buttonText: 'Manage Data'
    },
    {
      id: 8,
      title: 'AI Chatbot',
      description: '24/7 agricultural assistance',
      longDescription: 'Get instant help from our AI-powered chatbot. Ask questions about farming techniques, crop management, pest control, and get expert advice anytime.',
      icon: <Bot className="w-8 h-8 text-orange-600" />,
      color: 'from-orange-500 to-red-500',
      status: 'Online',
      features: ['24/7 Support', 'Expert Knowledge', 'Quick Responses', 'Learning Mode'],
      href: '#chatbot',
      buttonText: 'Start Chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FDF8] via-[#E8F5E8] to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-green-800">AgriAI Dashboard</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <span className="text-gray-700 font-medium">
                  Welcome, {user?.name || 'User'}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-gray-700">
                Welcome, {user?.name || 'User'}!
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut className="w-4 h-4 mr-2 inline" />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-green-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Your Agricultural Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Access all your farming tools and insights in one place. Get AI-powered recommendations, 
              track your progress, and make data-driven decisions for your farm.
            </p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Agricultural Features</h2>
            <p className="text-gray-600">Access all your farming tools and AI-powered features in one place</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dashboardCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 cursor-pointer group"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {card.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    card.status === 'Active' ? 'bg-green-100 text-green-800' :
                    card.status === 'Live' ? 'bg-blue-100 text-blue-800' :
                    card.status === 'Updated' ? 'bg-sky-100 text-sky-800' :
                    card.status === 'AI Ready' ? 'bg-red-100 text-red-800' :
                    card.status === 'Available' ? 'bg-purple-100 text-purple-800' :
                    card.status === 'Download' ? 'bg-indigo-100 text-indigo-800' :
                    card.status === 'Synced' ? 'bg-teal-100 text-teal-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {card.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {card.description}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {card.longDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {card.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => console.log(`Clicked ${card.title}`)}
                  className={`w-full bg-gradient-to-r ${card.color} text-white py-2.5 px-4 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm group-hover:shadow-xl`}
                >
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Start New Crop Analysis</p>
                      <p className="text-sm text-gray-600">Get AI recommendations for your fields</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Check Market Prices</p>
                      <p className="text-sm text-gray-600">View current crop prices and trends</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Ask AI Assistant</p>
                      <p className="text-sm text-gray-600">Get instant answers to farming questions</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Crop analysis completed</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Market prices updated</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Disease detection alert</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Data synced successfully</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Tools</h2>
            <p className="text-gray-600">Most popular and recently updated agricultural tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crop Health Monitor */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">New</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Crop Health Monitor</h3>
              <p className="text-green-100 text-sm mb-4">Real-time monitoring of crop health with AI-powered disease detection and treatment recommendations.</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors duration-200">
                Start Monitoring
              </button>
            </div>

            {/* Weather Dashboard */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Live</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
              <p className="text-blue-100 text-sm mb-4">Hyperlocal weather forecasts with agricultural alerts and farming recommendations.</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors duration-200">
                View Forecast
              </button>
            </div>

            {/* Market Intelligence */}
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Updated</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Market Intelligence</h3>
              <p className="text-purple-100 text-sm mb-4">Advanced market analysis with price predictions and optimal selling recommendations.</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors duration-200">
                Analyze Markets
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Farms
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      1,247
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Yield Increase
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      +23%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-green-100">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Users
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      10,000+
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
