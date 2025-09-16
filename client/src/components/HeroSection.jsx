import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌱 AI-Powered Agriculture Platform
              </span>
            </div>
            
            <h1 className="heading-primary text-white mb-6 text-shadow">
              Revolutionizing Agriculture with AI-Powered Advisory
            </h1>
            
            <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Get instant crop advice, disease detection, and market insights through our intelligent chatbot. 
              Available in multiple languages with voice support for farmers worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="btn-accent text-lg px-8 py-4">
                Get Started Free
              </button>
              <button className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[#2E7D44]">
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-xs">
                    +1K
                  </div>
                </div>
                <span className="text-sm">Active Farmers</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm">🌍 15+ Languages</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Dashboard Mockup */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 ml-2">Farm-Connect Dashboard</span>
                  </div>
                  
                  {/* Chat Interface Preview */}
                  <div className="space-y-3">
                    <div className="bg-[#2E7D44] text-white p-3 rounded-lg rounded-bl-sm">
                      <p className="text-sm">What's the best time to plant tomatoes in my region?</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-br-sm">
                      <p className="text-sm text-gray-700">Based on your location and soil conditions, I recommend planting tomatoes in early spring when soil temperature reaches 60°F...</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#4CAF50] text-white p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">+25%</div>
                    <div className="text-xs">Yield Increase</div>
                  </div>
                  <div className="bg-[#FF7043] text-white p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">-30%</div>
                    <div className="text-xs">Cost Reduction</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce-slow">
                <svg className="w-6 h-6 text-[#4CAF50]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse-slow">
                <svg className="w-6 h-6 text-[#FF7043]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
