const DIAGNOSTICS_API_BASE_URL = 'http://localhost:5000';

export const diagnosticsApi = {
  /**
   * Get crop recommendation based on soil and environmental data
   * @param {Object} formData - The form data containing soil and environmental parameters
   * @returns {Promise<Object>} - The prediction result
   */
  async getCropRecommendation(formData) {
    try {
      console.log('Sending data to API:', formData);
      
      const response = await fetch(`${DIAGNOSTICS_API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      return data;
    } catch (error) {
      console.error('Error getting crop recommendation:', error);
      throw new Error(error.message || 'Failed to get crop recommendation. Please try again.');
    }
  },

  /**
   * Test the connection to the diagnostics API
   * @returns {Promise<Object>} - API status information
   */
  async testConnection() {
    try {
      const response = await fetch(`${DIAGNOSTICS_API_BASE_URL}/test`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { success: false, error: `HTTP ${response.status}` };
      }
    } catch (error) {
      console.error('Error testing connection:', error);
      return { success: false, error: error.message };
    }
  }
};

export default diagnosticsApi;
