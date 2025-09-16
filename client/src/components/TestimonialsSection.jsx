import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Wheat Farmer",
      location: "Punjab, India",
      image: "👨‍🌾",
      rating: 5,
      quote: "Farm-Connect has revolutionized my farming practices. The AI advice helped me increase my wheat yield by 30% while reducing water usage. The voice feature in Hindi is incredibly helpful!",
      results: ["+30% Yield", "-25% Water Usage", "₹50,000 Savings"]
    },
    {
      name: "Maria Santos",
      role: "Tomato Farmer",
      location: "California, USA",
      image: "👩‍🌾",
      rating: 5,
      quote: "The disease detection feature saved my entire tomato crop last season. I uploaded a photo of suspicious leaves, and within minutes I had a diagnosis and treatment plan. Amazing technology!",
      results: ["Crop Saved", "+40% Quality", "$15,000 Revenue"]
    },
    {
      name: "Ahmed Hassan",
      role: "Rice Farmer",
      location: "Egypt",
      image: "👨‍🌾",
      rating: 5,
      quote: "The market intelligence feature helps me sell my rice at the best prices. I can track market trends and get recommendations on when to sell. It's like having a personal agricultural consultant!",
      results: ["+20% Profit", "Better Timing", "Market Insights"]
    },
    {
      name: "Priya Sharma",
      role: "Organic Vegetable Farmer",
      location: "Maharashtra, India",
      image: "👩‍🌾",
      rating: 5,
      quote: "As an organic farmer, I need precise advice on natural pest control and soil management. Farm-Connect provides exactly that, and the multi-language support makes it accessible to my entire family.",
      results: ["Organic Certified", "+35% Yield", "Natural Methods"]
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Farmers", icon: "👥" },
    { number: "25%", label: "Average Yield Increase", icon: "📈" },
    { number: "30%", label: "Cost Reduction", icon: "💰" },
    { number: "15+", label: "Languages Supported", icon: "🌍" },
    { number: "4.9/5", label: "User Rating", icon: "⭐" },
    { number: "24/7", label: "AI Support", icon: "🤖" }
  ];

  const successStories = [
    {
      title: "From Struggling to Thriving",
      farmer: "John Mitchell, Iowa",
      challenge: "Low corn yields due to poor timing",
      solution: "AI-powered planting recommendations",
      result: "Increased yield by 40% and saved $20,000 in costs"
    },
    {
      title: "Disease Prevention Success",
      farmer: "Chen Wei, China",
      challenge: "Frequent crop diseases affecting rice",
      solution: "Early disease detection and treatment plans",
      result: "Reduced disease incidents by 60% and improved quality"
    },
    {
      title: "Market Optimization",
      farmer: "Fatima Al-Zahra, Morocco",
      challenge: "Low profits due to poor market timing",
      solution: "Real-time market intelligence and pricing",
      result: "Increased profits by 35% through better timing"
    }
  ];

  return (
    <section className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Trusted by Farmers Worldwide
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Join thousands of successful farmers who have transformed their agricultural practices 
            with Farm-Connect's AI-powered solutions.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#2E7D44] mb-2">{stat.number}</div>
              <div className="text-sm text-[#757575]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="heading-tertiary text-center mb-12">What Our Farmers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-body mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.results.map((result, resultIndex) => (
                    <span key={resultIndex} className="px-3 py-1 bg-[#4CAF50]/10 text-[#2E7D44] rounded-full text-sm font-medium">
                      {result}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-[#212121]">{testimonial.name}</div>
                    <div className="text-sm text-[#757575]">{testimonial.role}</div>
                    <div className="text-sm text-[#757575]">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="heading-tertiary text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2E7D44] to-[#4CAF50] rounded-xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">{story.title}</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm opacity-80 mb-1">Farmer</div>
                    <div className="font-semibold">{story.farmer}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-1">Challenge</div>
                    <div className="text-sm">{story.challenge}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-1">Solution</div>
                    <div className="text-sm">{story.solution}</div>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-sm opacity-80 mb-1">Result</div>
                    <div className="font-semibold text-green-200">{story.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center border border-[#E8F5E8]">
          <h3 className="heading-tertiary mb-8">Trusted by Leading Agricultural Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🌾</div>
              <div className="text-sm font-medium">Ministry of Agriculture</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🏛️</div>
              <div className="text-sm font-medium">FAO Partnership</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-sm font-medium">Agricultural Universities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-sm font-medium">Cooperative Societies</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-[#212121] mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven agriculture. 
            No credit card required, no long-term commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Talk to Sales
            </button>
          </div>
          <p className="text-sm text-[#757575] mt-4">
            Join 10,000+ farmers already using Farm-Connect
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
