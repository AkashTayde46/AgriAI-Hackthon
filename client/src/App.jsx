import { useState, useEffect } from 'react'
import { apiService } from './services/api'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Checking...')
  const [serverData, setServerData] = useState(null)
  const [sampleData, setSampleData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Test backend connection on component mount
  useEffect(() => {
    testBackendConnection()
  }, [])

  const testBackendConnection = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await apiService.checkHealth()
      setConnectionStatus('Connected ✅')
      setServerData(response.data)
    } catch (err) {
      setConnectionStatus('Disconnected ❌')
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchSampleData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await apiService.getSampleData()
      setSampleData(response.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const testApiEndpoint = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await apiService.testConnection()
      setServerData(response.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Test Tailwind CSS Features */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <span className="font-medium">Tailwind CSS Test:</span> This yellow alert box demonstrates Tailwind's utility classes, icons, and responsive design!
            </p>
          </div>
        </div>
      </div>

      <header className="gradient-bg text-white py-12 px-6 rounded-xl mx-4 mt-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-shadow animate-pulse-slow">🌱 AgriAI Frontend-Backend Connection</h1>
        <p className="text-center text-xl opacity-95 font-medium">Testing the connection between React frontend and Express backend with Tailwind CSS</p>
        
        {/* Tailwind CSS Feature Showcase */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            🎨 Tailwind CSS
          </span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            ⚡ Vite
          </span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            ⚛️ React
          </span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            🚀 Express
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Connection Status</h2>
          <div className={`inline-block px-6 py-3 rounded-lg text-xl font-semibold mb-4 ${
            connectionStatus.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {connectionStatus}
          </div>
          <button 
            onClick={testBackendConnection} 
            disabled={loading}
            className="btn-primary relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Testing...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Test Connection
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Error:</h3>
            <p className="text-red-700 font-mono bg-red-100 p-3 rounded">{error}</p>
          </div>
        )}

        {serverData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Server Information</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-2"><span className="font-semibold text-gray-700">Status:</span> <span className="text-green-600">{serverData.status}</span></p>
              <p className="mb-2"><span className="font-semibold text-gray-700">Message:</span> {serverData.message}</p>
              {serverData.timestamp && (
                <p className="mb-2"><span className="font-semibold text-gray-700">Timestamp:</span> {new Date(serverData.timestamp).toLocaleString()}</p>
              )}
              {serverData.data && (
                <>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Server:</span> {serverData.data.server}</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Version:</span> {serverData.data.version}</p>
                  <p className="mb-2"><span className="font-semibold text-gray-700">Environment:</span> {serverData.data.environment}</p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="card text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            API Tests
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <button 
              onClick={testApiEndpoint} 
              disabled={loading}
              className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Test API Endpoint
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={fetchSampleData} 
              disabled={loading}
              className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                Fetch Sample Data
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {sampleData && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-green-800 mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🌾 Sample Farm Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleData.farms.map((farm, index) => (
                <div 
                  key={farm.id} 
                  className="group bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">🌱</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-700 group-hover:text-green-800 transition-colors">
                      {farm.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-semibold text-gray-700">Location:</span>
                      <span className="ml-2 text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">{farm.location}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-700">Crops:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {farm.crops.map((crop, cropIndex) => (
                            <span 
                              key={cropIndex}
                              className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {crop}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Farm ID: {farm.id}</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
