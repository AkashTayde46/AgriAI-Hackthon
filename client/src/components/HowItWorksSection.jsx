import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect & Setup",
      description: "Sign up for free and provide basic information about your farm, location, and crops. Our AI learns about your specific agricultural context.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      features: ["Quick Registration", "Farm Profile Setup", "Crop Selection"]
    },
    {
      number: "02",
      title: "Ask & Get Advice",
      description: "Simply ask questions about your crops, upload photos for disease detection, or use voice commands in your preferred language.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      ),
      features: ["Natural Language", "Photo Upload", "Voice Commands"]
    },
    {
      number: "03",
      title: "Implement & Succeed",
      description: "Receive personalized recommendations and implement them on your farm. Track your progress and see improved yields and reduced costs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      features: ["Action Plans", "Progress Tracking", "Results Analysis"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#F8FDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            How Farm-Connect Works
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Getting started with our AI-powered agricultural advisory platform is simple. 
            Follow these three easy steps to transform your farming practices.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2E7D44] via-[#4CAF50] to-[#8BC34A] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#2E7D44] to-[#4CAF50] rounded-full flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="max-w-sm mx-auto">
                  <h3 className="heading-tertiary mb-4 text-[#212121]">
                    {step.title}
                  </h3>
                  
                  <p className="text-body mb-6">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-[#757575]">
                        <svg className="w-4 h-4 text-[#4CAF50] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-[#F1F8E9]/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-[#E8F5E8]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Demo Content */}
            <div>
              <h3 className="heading-tertiary mb-6">
                See It In Action
              </h3>
              <p className="text-body mb-8">
                Watch how farmers around the world are using Farm-Connect to improve their yields, 
                reduce costs, and make better agricultural decisions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-sm text-[#757575]">Real-time crop monitoring and alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-sm text-[#757575]">Instant disease detection from photos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-sm text-[#757575]">Personalized recommendations in your language</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                  <span className="text-sm text-[#757575]">Market insights and pricing information</span>
                </div>
              </div>
              
              <button className="btn-primary mt-8">
                Try Free Demo
              </button>
            </div>
            
            {/* Right - Demo Video Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2E7D44] to-[#4CAF50] rounded-xl aspect-video flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Watch Demo Video</p>
                  <p className="text-sm opacity-80">See Farm-Connect in action</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-2xl font-bold text-[#2E7D44]">+25%</div>
                <div className="text-xs text-[#757575]">Average Yield Increase</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-2xl font-bold text-[#FF7043]">-30%</div>
                <div className="text-xs text-[#757575]">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
