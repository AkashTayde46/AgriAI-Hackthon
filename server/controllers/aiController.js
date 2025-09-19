const gemini = require('../config/gemini');
const { getContextualPrompt, detectFarmingTopics, QUICK_RESPONSES, FARMING_SYSTEM_PROMPT } = require('../config/farmingPrompts');

// AI Chat Controller
const chatWithAI = async (req, res) => {
  try {
    const { message, language = 'en', context = 'farming_assistant', conversationHistory = [] } = req.body;
    
    // Log the request for debugging
    console.log('AI Chat Request:', {
      message: message?.substring(0, 100) + '...',
      language,
      context,
      conversationLength: conversationHistory.length,
      hasUser: !!req.user,
      userId: req.user?._id || 'anonymous'
    });

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message is required' 
      });
    }

    // Detect farming topics from user message
    const detectedTopics = detectFarmingTopics(message);
    console.log('Detected farming topics:', detectedTopics);
    
    // Check if we have a quick response for this query
    let quickResponse = null;
    if (detectedTopics.includes('government_schemes')) {
      quickResponse = QUICK_RESPONSES.government_schemes.general;
    } else if (detectedTopics.includes('planting') && message.toLowerCase().includes('tomato')) {
      quickResponse = QUICK_RESPONSES.planting_time.tomato;
    } else if (detectedTopics.includes('disease') && message.toLowerCase().includes('leaf spot')) {
      quickResponse = QUICK_RESPONSES.disease_treatment.leaf_spot;
    }
    
    // If we have a quick response, use it as a base and enhance with AI
    let systemPrompt;
    if (quickResponse) {
      systemPrompt = `${FARMING_SYSTEM_PROMPT}

QUICK REFERENCE: ${quickResponse}

USER'S QUESTION: ${message}

Please provide a comprehensive, detailed response based on the quick reference above, but expand it with additional helpful information, specific steps, and practical advice.`;
    } else {
      // Create contextual farming prompt
      systemPrompt = getContextualPrompt(message, language, {
        topics: detectedTopics,
        season: getCurrentSeason(),
        region: req.body.region || 'general'
      });
    }

    console.log('Sending request to Gemini with prompt length:', systemPrompt.length);
    
    const response = await gemini(systemPrompt);
    
    console.log('Received response from Gemini, length:', response.length);

    res.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
      language: language,
      context: context
    });

  } catch (error) {
    console.error('AI Chat error:', error);
    
    // Provide fallback response based on error type
    let fallbackResponse = "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.";
    
    if (error.message.includes('API key')) {
      fallbackResponse = "I'm currently unavailable due to configuration issues. Please contact support.";
    } else if (error.message.includes('rate limit')) {
      fallbackResponse = "I'm receiving too many requests. Please wait a moment and try again.";
    } else if (error.message.includes('timeout')) {
      fallbackResponse = "The request is taking longer than expected. Please try again with a shorter question.";
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      fallbackResponse = "I'm having trouble connecting to my AI services. Please check your internet connection and try again.";
    }
    
    // Provide a basic farming response as fallback
    if (message && message.toLowerCase().includes('government') || message.toLowerCase().includes('scheme')) {
      fallbackResponse = "Here are some key government agricultural schemes: 1) PM-KISAN - Direct income support of ₹6,000/year to farmers, 2) PMFBY - Crop insurance scheme, 3) Soil Health Card Scheme - Free soil testing, 4) Kisan Credit Card - Low-interest loans, 5) PM-KMY - Organic farming promotion. Contact your local agriculture office for application details.";
    } else if (message && message.toLowerCase().includes('plant')) {
      fallbackResponse = "For planting advice, I recommend checking your local agricultural extension office or consulting with experienced farmers in your area. Generally, most crops should be planted when soil temperature is appropriate and after the last frost.";
    } else if (message && message.toLowerCase().includes('disease')) {
      fallbackResponse = "For plant disease issues, I suggest consulting with a local plant pathologist or agricultural extension agent. They can provide specific diagnosis and treatment recommendations for your region.";
    } else if (message && message.toLowerCase().includes('soil')) {
      fallbackResponse = "For soil health, consider getting a soil test from your local agricultural extension office. They can provide specific recommendations for your soil type and crop needs.";
    } else if (message && message.toLowerCase().includes('tomato')) {
      fallbackResponse = "For tomatoes, plant after the last frost when soil temperature reaches 60°F (15°C). In most regions, this is typically mid-April to early May. Start seeds indoors 6-8 weeks before transplanting. Provide support with stakes or cages and water consistently.";
    } else if (message && message.toLowerCase().includes('wheat')) {
      fallbackResponse = "Winter wheat should be planted in late September to early October, while spring wheat is planted in early spring when soil temperature reaches 40°F (4°C). Ensure good seed-to-soil contact and proper spacing.";
    }

    res.status(500).json({
      success: false,
      response: fallbackResponse,
      error: 'AI service temporarily unavailable',
      timestamp: new Date().toISOString()
    });
  }
};

// Get farming tips and advice
const getFarmingTips = async (req, res) => {
  try {
    const { category, season, region } = req.query;
    
    const tipPrompt = `Provide 5 practical farming tips for:
Category: ${category || 'general farming'}
Season: ${season || 'current season'}
Region: ${region || 'general'}

Format as a numbered list with brief, actionable advice.`;

    const response = await gemini(tipPrompt);
    
    res.json({
      success: true,
      tips: response,
      category,
      season,
      region,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Farming tips error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch farming tips at this time',
      error: error.message
    });
  }
};

// Diagnose plant issues
const diagnosePlantIssue = async (req, res) => {
  try {
    const { symptoms, plantType, images, location } = req.body;
    
    const diagnosisPrompt = `As a plant pathologist, analyze these symptoms and provide diagnosis:

Plant Type: ${plantType || 'Unknown'}
Symptoms: ${symptoms}
Location: ${location || 'Not specified'}

Provide:
1. Likely diagnosis
2. Possible causes
3. Treatment recommendations
4. Prevention measures
5. When to consult a professional

Be specific and practical in your recommendations.`;

    const response = await gemini(diagnosisPrompt);
    
    res.json({
      success: true,
      diagnosis: response,
      plantType,
      symptoms,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Plant diagnosis error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to diagnose plant issue at this time',
      error: error.message
    });
  }
};

// Get market prices and trends
const getMarketInfo = async (req, res) => {
  try {
    const { crop, region, timeframe } = req.query;
    
    const marketPrompt = `Provide current market information for:
Crop: ${crop || 'general agricultural commodities'}
Region: ${region || 'global'}
Timeframe: ${timeframe || 'current'}

Include:
1. Current price trends
2. Market factors affecting prices
3. Seasonal considerations
4. Future outlook
5. Where to find real-time prices

Note: For real-time prices, recommend checking local markets and commodity exchanges.`;

    const response = await gemini(marketPrompt);
    
    res.json({
      success: true,
      marketInfo: response,
      crop,
      region,
      timeframe,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Market info error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch market information at this time',
      error: error.message
    });
  }
};

// Helper function to get current season
function getCurrentSeason() {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'fall';
  return 'winter';
}

// Helper function to get language name
function getLanguageName(code) {
  const languages = {
    'en': 'English',
    'hi': 'Hindi',
    'es': 'Spanish',
    'fr': 'French',
    'pt': 'Portuguese',
    'ar': 'Arabic',
    'zh': 'Chinese',
    'ja': 'Japanese'
  };
  return languages[code] || 'English';
}

module.exports = {
  chatWithAI,
  getFarmingTips,
  diagnosePlantIssue,
  getMarketInfo
};
