import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import TechnologySection from './components/TechnologySection'
import DashboardPreviewSection from './components/DashboardPreviewSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FDF8]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}>
            {/* Logo Section */}
            <div className="flex items-center">
              {!isScrolled && (
                <div className="flex-shrink-0 flex items-center group cursor-pointer">
                  <div className="relative">
                    <div className="p-2 rounded-full bg-transparent">
                      <span className="text-2xl">🌱</span>
                    </div>
                  </div>
                  <span className="font-bold group-hover:text-[#2E7D44] transition-all duration-300 ml-3 text-xl text-gray-900">
                    Farm-Connect
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center">
                <div className={`rounded-full p-1.5 flex items-center space-x-1 transition-all duration-500 ${
                  isScrolled 
                    ? 'bg-white/20 backdrop-blur-lg shadow-xl border border-white/30' 
                    : 'bg-gray-100 shadow-inner'
                }`}>
                  <a href="#home" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#2E7D44] bg-white/30 backdrop-blur-sm shadow-lg border border-white/20' 
                      : 'text-gray-700 hover:text-[#2E7D44] hover:bg-white'
                  }`}>
                    Home
                  </a>
                  <a href="#features" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#2E7D44] hover:text-[#1e5a2f] hover:bg-white/20 backdrop-blur-sm' 
                      : 'text-gray-700 hover:text-[#2E7D44] hover:bg-white'
                  }`}>
                    Features
                  </a>
                  <a href="#solutions" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#2E7D44] hover:text-[#1e5a2f] hover:bg-white/20 backdrop-blur-sm' 
                      : 'text-gray-700 hover:text-[#2E7D44] hover:bg-white'
                  }`}>
                    Solutions
                  </a>
                  <a href="#about" className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#2E7D44] hover:text-[#1e5a2f] hover:bg-white/20 backdrop-blur-sm' 
                      : 'text-gray-700 hover:text-[#2E7D44] hover:bg-white'
                  }`}>
                    About
                  </a>
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <button className={`hidden sm:block font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-[#2E7D44] hover:text-[#1e5a2f] text-sm px-4 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm' 
                  : 'text-[#757575] hover:text-[#2E7D44]'
              }`}>
                Sign In
              </button>
              <button className={`transition-all duration-500 ${
                isScrolled 
                  ? 'text-sm px-6 py-2.5 bg-white/20 backdrop-blur-lg text-[#2E7D44] border border-white/30 rounded-full shadow-xl hover:bg-white/30 hover:shadow-2xl transform hover:-translate-y-0.5' 
                  : 'btn-primary text-sm px-4 py-2'
              }`}>
                Get Started Free
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'hover:bg-white/20 backdrop-blur-sm' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-[#2E7D44]' : 'text-gray-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2E7D44] via-[#4CAF50] to-[#8BC34A] transition-all duration-300" 
               style={{ width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}>
          </div>
        )}

        {/* Mobile Navigation Overlay */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#home" 
              className="flex items-center space-x-3 text-[#2E7D44] font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🏠</span>
              <span>Home</span>
            </a>
            <a 
              href="#features" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#2E7D44] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">⚡</span>
              <span>Features</span>
            </a>
            <a 
              href="#solutions" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#2E7D44] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🔧</span>
              <span>Solutions</span>
            </a>
            <a 
              href="#about" 
              className="flex items-center space-x-3 text-gray-700 hover:text-[#2E7D44] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">ℹ️</span>
              <span>About</span>
            </a>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full text-left text-gray-700 hover:text-[#2E7D44] transition-colors">
                Sign In
              </button>
              <button className="w-full btn-primary text-center">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechnologySection />
        <DashboardPreviewSection />
        <TestimonialsSection />
      </main>

      <Footer />
      <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  )
}

export default App