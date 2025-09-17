import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Menu,
  X,
  Globe,
  BookOpen,
  Users,
  Shield,
  BadgeDollarSign,
  User,
  Map,
  Newspaper,
  Calculator,
  Bot,
  LogOut,
  Receipt
} from 'lucide-react';
import AuthContext from '../Authorisation/AuthProvider.jsx';
import { useAuthState } from '../hooks/useAuthState';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { user } = useAuthState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // English-only data matching FinAdvise
  const navItems = {
    dashboard: "Dashboard",
    calcpro: "CalcPro",
    news: "News",
    advisormap: "AdvisorMap",
  };

  const heroData = {
    title: "Smart Agricultural Planning for Your Future",
    subtitle: "Expert guidance, crop management, and government schemes all in one place",
  };

  const features = [
    {
      title: "AI Crop Advisor",
      description: "Get personalized crop recommendations and disease diagnosis using AI",
      link: "/ai-advisor",
      icon: Bot,
    },
    {
      title: "Smart Health Diagnostics",
      description: "Upload crop images for instant disease and pest detection",
      link: "/diagnostics",
      icon: Shield,
    },
    {
      title: "Weather Intelligence",
      description: "Real-time weather forecasts and climate-smart farming advice",
      link: "/weather",
      icon: Globe,
    },
    {
      title: "Market Intelligence",
      description: "Price trends, market analysis, and buyer-seller matching",
      link: "/market",
      icon: BadgeDollarSign,
    },
    {
      title: "Financial Management",
      description: "Farm accounting, ROI calculator, and loan applications",
      link: "/finance",
      icon: Calculator,
    },
    {
      title: "Expense Tracker",
      description: "Track your farm income and expenses with detailed analytics",
      link: "/expense-tracker",
      icon: Receipt,
    },
    {
      title: "Government Schemes",
      description: "Track subsidies, benefits, and government programs",
      link: "/schemes",
      icon: Shield,
    },
    {
      title: "Farmer Community",
      description: "Connect with farmers, share experiences, and learn best practices",
      link: "/community",
      icon: Users,
    },
    {
      title: "Expert Consultation",
      description: "Book video calls with agricultural specialists and experts",
      link: "/experts",
      icon: User,
    },
    {
      title: "Learning Center",
      description: "Interactive training modules and certification programs",
      link: "/learning",
      icon: BookOpen,
    },
    {
      title: "Farm Analytics",
      description: "Performance dashboard, yield tracking, and benchmarking",
      link: "/analytics",
      icon: Map,
    },
    {
      title: "Supply Chain",
      description: "Track products from farm to consumer with digital passports",
      link: "/supply-chain",
      icon: Globe,
    },
    {
      title: "News & Updates",
      description: "Latest agricultural news, policies, and market updates",
      link: "/news",
      icon: Newspaper,
    },
  ];

  // Features component
  const Features = () => {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-emerald-200/10 blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="block relative rounded-2xl cursor-pointer group"
              >
                <div className="relative p-8 dashboard-card group-hover:scale-105 group-hover:shadow-2xl group-hover:border-green-200">
                  <div className="mb-6">
                    {React.createElement(feature.icon, {
                      className: "h-16 w-16 text-green-600 transition-colors duration-300 group-hover:text-emerald-600"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:from-emerald-600 group-hover:to-green-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow transition-colors duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-emerald-600 font-semibold transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-1">
                      Explore
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // NavBar component
  const NavBar = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (isProfileDropdownOpen && !event.target.closest('.profile-dropdown')) {
          setIsProfileDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isProfileDropdownOpen]);

    const handleProfileClick = () => {
      setIsProfileDropdownOpen(false);
      navigate('/profile');
    };

    const toggleProfileDropdown = () => {
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
      <nav 
        className="fixed w-full z-40"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(34, 197, 94, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2 px-2 py-1 rounded-lg">
              <BadgeDollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              <span className="ml-2 text-lg sm:text-xl font-extrabold text-green-800 tracking-tight drop-shadow">AgriAI</span>
            </Link>

            {/* Right: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[rgb(6,86,6)] text-base xl:text-[18px] font-medium font-[Outfit]">
              <Link to="/dashboard" className="block text-green-800 hover:text-green-600 transition-colors duration-200">Dashboard</Link>
              <Link to="/calcpro" className="block text-green-800 hover:text-green-600 transition-colors duration-200">CalcPro</Link>
              <Link to="/news" className="block text-green-800 hover:text-green-600 transition-colors duration-200">News</Link>
              <Link to="/advisormap" className="block text-green-800 hover:text-green-600 transition-colors duration-200">AdvisorMap</Link>

              {/* User Profile */}
              <div className="relative profile-dropdown">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full cursor-pointer border-2 border-white shadow-md"
                >
                  <span className="text-white font-semibold text-sm">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    
                    <button
                      onClick={handleProfileClick}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700"
                    >
                      <User className="w-4 h-4 mr-3 text-green-600" />
                      Profile
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-green-800 p-2 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 border-t border-green-100 rounded-b-2xl shadow-lg">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <Link to="/dashboard" className="block px-3 py-2 text-green-800 rounded-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              <Link to="/calcpro" className="block px-3 py-2 text-green-800 rounded-lg font-semibold" onClick={() => setIsMenuOpen(false)}>CalcPro</Link>
              <Link to="/news" className="block px-3 py-2 text-green-800 rounded-lg font-semibold" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link to="/advisormap" className="block px-3 py-2 text-green-800 rounded-lg font-semibold" onClick={() => setIsMenuOpen(false)}>AdvisorMap</Link>

              {/* Mobile User Profile */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white shadow-md">
                    <span className="text-white font-semibold text-base">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-800">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={handleProfileClick}
                    className="w-full flex items-center px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-x-hidden">
        <NavBar />
        <header className="text-center pt-20 sm:pt-24 px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-3 sm:mb-4">{heroData.title}</h1>
          <p className="text-sm sm:text-base lg:text-lg text-green-600 max-w-4xl mx-auto">{heroData.subtitle}</p>
        </header>
        <Features />
      </div>
    </>
  );
};

export default Dashboard;
