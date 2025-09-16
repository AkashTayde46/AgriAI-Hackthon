import React, { useState } from 'react';

const TechnologySection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' }
  ];

  const chatbotMessages = [
    { type: 'user', text: 'What\'s the best time to plant tomatoes?' },
    { type: 'bot', text: 'For tomatoes, plant after the last frost when soil temperature reaches 60°F. In your region, this is typically mid-April to early May.' },
    { type: 'user', text: 'How often should I water them?' },
    { type: 'bot', text: 'Water deeply 2-3 times per week, providing 1-2 inches of water. Water at the base of plants to avoid wetting leaves.' }
  ];

  const platforms = [
    { name: 'Mobile App', icon: '📱', description: 'Native iOS and Android apps' },
    { name: 'Web Platform', icon: '🌐', description: 'Access from any browser' },
    { name: 'WhatsApp', icon: '💬', description: 'Chat directly on WhatsApp' },
    { name: 'IVR System', icon: '📞', description: 'Voice calls for offline access' }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Advanced Technology Integration
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Experience the power of AI-driven agriculture through our multi-channel platform. 
            Access expert advice through chat, voice, and multiple languages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Chatbot Demo */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="heading-tertiary">AI Chatbot Demo</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-[#757575]">Live Demo</span>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
              {chatbotMessages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block max-w-xs p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-[#2E7D44] text-white rounded-br-sm' 
                      : 'bg-white text-gray-700 rounded-bl-sm shadow-sm'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask about your crops..." 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D44] focus:border-transparent"
              />
              <button className="btn-primary px-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Voice Interface */}
          <div className="card">
            <h3 className="heading-tertiary mb-6">Voice Interface</h3>
            
            {/* Voice Demo */}
            <div className="text-center mb-6">
              <div 
                className={`voice-button mx-auto mb-4 ${isVoiceActive ? 'animate-pulse' : ''}`}
                onClick={() => setIsVoiceActive(!isVoiceActive)}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              
              <p className="text-sm text-[#757575] mb-4">
                {isVoiceActive ? 'Listening... Speak your question' : 'Tap to start voice command'}
              </p>
              
              {/* Waveform Animation */}
              <div className="flex justify-center items-end gap-1 h-8 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 bg-[#4CAF50] rounded-full transition-all duration-300 ${
                      isVoiceActive ? 'animate-pulse' : ''
                    }`}
                    style={{
                      height: isVoiceActive ? `${Math.random() * 20 + 10}px` : '4px',
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Voice Commands Examples */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#212121] mb-3">Try saying:</p>
              <div className="space-y-2">
                <div className="bg-gray-50 p-2 rounded text-sm text-[#757575]">
                  "What's the weather forecast for my farm?"
                </div>
                <div className="bg-gray-50 p-2 rounded text-sm text-[#757575]">
                  "How do I treat leaf spot disease?"
                </div>
                <div className="bg-gray-50 p-2 rounded text-sm text-[#757575]">
                  "When should I harvest my wheat?"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Language Support */}
        <div className="card mb-16">
          <div className="text-center mb-8">
            <h3 className="heading-tertiary mb-4">Multi-Language Support</h3>
            <p className="text-body max-w-2xl mx-auto">
              Communicate with our AI assistant in your native language. 
              We support 15+ languages to serve farmers worldwide.
            </p>
          </div>
          
          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                  selectedLanguage === lang.code
                    ? 'border-[#2E7D44] bg-[#2E7D44]/10 text-[#2E7D44]'
                    : 'border-gray-200 hover:border-[#2E7D44]/50 text-[#757575]'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
          
          {/* Language Demo */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-sm text-[#757575] mb-2">Sample response in {languages.find(l => l.code === selectedLanguage)?.name}:</p>
            <p className="text-lg font-medium text-[#212121]">
              {selectedLanguage === 'en' && "Your tomatoes need more water during hot weather."}
              {selectedLanguage === 'hi' && "गर्म मौसम में आपके टमाटर को अधिक पानी की आवश्यकता है।"}
              {selectedLanguage === 'es' && "Tus tomates necesitan más agua durante el clima caluroso."}
              {selectedLanguage === 'fr' && "Vos tomates ont besoin de plus d'eau par temps chaud."}
              {selectedLanguage === 'pt' && "Seus tomates precisam de mais água durante o tempo quente."}
              {selectedLanguage === 'ar' && "تحتاج طماطمك إلى المزيد من الماء أثناء الطقس الحار."}
              {selectedLanguage === 'zh' && "在炎热的天气里，你的西红柿需要更多的水。"}
              {selectedLanguage === 'ja' && "暑い天候の間、あなたのトマトはより多くの水を必要とします。"}
            </p>
          </div>
        </div>

        {/* Platform Compatibility */}
        <div className="text-center mb-8">
          <h3 className="heading-tertiary mb-4">Available on All Platforms</h3>
          <p className="text-body max-w-2xl mx-auto">
            Access Farm-Connect wherever you are, on any device, through multiple channels.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h4 className="font-semibold text-[#212121] mb-2">{platform.name}</h4>
              <p className="text-sm text-[#757575]">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
