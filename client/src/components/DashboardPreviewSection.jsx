import React, { useState } from 'react';

const DashboardPreviewSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'crops', label: 'Crops', icon: '🌱' },
    { id: 'weather', label: 'Weather', icon: '🌤️' },
    { id: 'market', label: 'Market', icon: '💰' }
  ];

  const metrics = [
    { label: 'Total Yield', value: '2,450 kg', change: '+12%', trend: 'up' },
    { label: 'Cost Savings', value: '$1,200', change: '+8%', trend: 'up' },
    { label: 'Disease Alerts', value: '3', change: '-2', trend: 'down' },
    { label: 'Active Crops', value: '8', change: '+1', trend: 'up' }
  ];

  const cropData = [
    { name: 'Tomatoes', progress: 75, status: 'Growing', color: 'bg-red-400' },
    { name: 'Wheat', progress: 45, status: 'Planting', color: 'bg-yellow-400' },
    { name: 'Corn', progress: 90, status: 'Harvesting', color: 'bg-green-400' },
    { name: 'Potatoes', progress: 60, status: 'Growing', color: 'bg-purple-400' }
  ];

  const weatherData = [
    { day: 'Today', temp: '28°C', condition: 'Sunny', icon: '☀️' },
    { day: 'Tomorrow', temp: '26°C', condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Day 3', temp: '24°C', condition: 'Rainy', icon: '🌧️' },
    { day: 'Day 4', temp: '27°C', condition: 'Sunny', icon: '☀️' }
  ];

  const marketData = [
    { crop: 'Tomatoes', price: '$2.50/kg', change: '+5%', trend: 'up' },
    { crop: 'Wheat', price: '$0.80/kg', change: '-2%', trend: 'down' },
    { crop: 'Corn', price: '$1.20/kg', change: '+3%', trend: 'up' },
    { crop: 'Potatoes', price: '$1.80/kg', change: '+1%', trend: 'up' }
  ];

  return (
    <section className="py-20 bg-[#F8FDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Your Agricultural Command Center
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Monitor your farm's performance, track crop health, analyze weather patterns, 
            and stay updated with market prices - all in one comprehensive dashboard.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-[#F1F8E9]/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-[#E8F5E8]">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#212121] mb-2">Farm Dashboard</h3>
              <p className="text-[#757575]">Welcome back, John! Here's your farm overview.</p>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-[#757575]">Live Data</span>
              </div>
              <button className="btn-primary text-sm px-4 py-2">
                Export Report
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#2E7D44] text-white'
                    : 'bg-white text-[#757575] hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Metrics */}
            <div className="lg:col-span-2">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#757575]">{metric.label}</span>
                      <div className={`flex items-center gap-1 text-xs ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d={metric.trend === 'up' ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"}/>
                        </svg>
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#212121]">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              {activeTab === 'overview' && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-[#212121] mb-4">Farm Overview</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-[#212121]">Next Action Required</p>
                        <p className="text-sm text-[#757575]">Water tomatoes in Field A</p>
                      </div>
                      <span className="text-sm text-[#FF7043] font-medium">Due Today</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-[#212121]">Weather Alert</p>
                        <p className="text-sm text-[#757575]">Rain expected in 2 days</p>
                      </div>
                      <span className="text-sm text-[#4CAF50] font-medium">Monitor</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'crops' && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-[#212121] mb-4">Crop Progress</h4>
                  <div className="space-y-4">
                    {cropData.map((crop, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${crop.color}`}></div>
                            <span className="font-medium text-[#212121]">{crop.name}</span>
                          </div>
                          <span className="text-sm text-[#757575]">{crop.status}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${crop.color}`}
                            style={{ width: `${crop.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-[#757575] mt-1">{crop.progress}% Complete</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'weather' && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-[#212121] mb-4">Weather Forecast</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {weatherData.map((day, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl mb-2">{day.icon}</div>
                        <div className="text-sm text-[#757575] mb-1">{day.day}</div>
                        <div className="font-semibold text-[#212121] mb-1">{day.temp}</div>
                        <div className="text-xs text-[#757575]">{day.condition}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'market' && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-[#212121] mb-4">Market Prices</h4>
                  <div className="space-y-3">
                    {marketData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-[#212121]">{item.crop}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-[#212121]">{item.price}</span>
                          <div className={`flex items-center gap-1 text-sm ${
                            item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d={item.trend === 'up' ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"}/>
                            </svg>
                            {item.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Quick Actions & Alerts */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#212121] mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📸</span>
                      <span className="text-sm font-medium">Upload Crop Photo</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🎤</span>
                      <span className="text-sm font-medium">Voice Query</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📊</span>
                      <span className="text-sm font-medium">Generate Report</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#212121] mb-4">Recent Alerts</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <span className="text-lg">⚠️</span>
                    <div>
                      <p className="text-sm font-medium text-[#212121]">Water Level Low</p>
                      <p className="text-xs text-[#757575]">Field A needs irrigation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 border-l-4 border-green-400 rounded">
                    <span className="text-lg">✅</span>
                    <div>
                      <p className="text-sm font-medium text-[#212121]">Harvest Ready</p>
                      <p className="text-xs text-[#757575]">Corn in Field C</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <span className="text-lg">ℹ️</span>
                    <div>
                      <p className="text-sm font-medium text-[#212121]">Market Update</p>
                      <p className="text-xs text-[#757575]">Tomato prices up 5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#212121] mb-4">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using Farm-Connect to increase their yields, 
            reduce costs, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
