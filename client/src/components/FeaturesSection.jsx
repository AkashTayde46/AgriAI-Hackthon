import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#2E7D44]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "AI-Powered Crop Advisory",
      description: "Get personalized recommendations for planting, irrigation, fertilization, and harvesting based on your specific location, soil conditions, and crop type.",
      benefits: ["24/7 Expert Advice", "Weather-Based Insights", "Yield Optimization"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#4CAF50]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      ),
      title: "Multi-Language Voice Support",
      description: "Interact with our AI assistant using your native language through voice commands. Perfect for farmers who prefer speaking over typing.",
      benefits: ["15+ Languages", "Voice Commands", "Offline Support"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#FF7043]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Disease Detection & Diagnosis",
      description: "Upload photos of your crops to get instant disease identification and treatment recommendations from our AI-powered image recognition system.",
      benefits: ["Instant Diagnosis", "Treatment Plans", "Prevention Tips"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#8BC34A]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      title: "Market Intelligence & Pricing",
      description: "Access real-time market prices, demand forecasts, and selling recommendations to maximize your profits and make informed business decisions.",
      benefits: ["Real-time Prices", "Market Trends", "Profit Optimization"]
    }
  ];

  return (
    <section id="features" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Powerful Features for Modern Agriculture
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with deep agricultural expertise 
            to provide farmers with the tools they need to succeed in today's competitive market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#2E7D44]/10 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="heading-tertiary mb-4 text-[#212121]">
                {feature.title}
              </h3>
              
              <p className="text-body mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-[#757575]">
                    <svg className="w-4 h-4 text-[#4CAF50] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2E7D44] to-[#4CAF50] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">And Much More...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📱</div>
              <span className="text-sm">Mobile App</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🌐</div>
              <span className="text-sm">WhatsApp Integration</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📞</div>
              <span className="text-sm">IVR Support</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">☁️</div>
              <span className="text-sm">Cloud Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
