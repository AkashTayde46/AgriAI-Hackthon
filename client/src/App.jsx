import { useState, useEffect } from 'react'
import { apiService } from './services/api'
import './App.css'

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
    <div className="app">
      <header className="app-header">
        <h1>🌱 AgriAI Frontend-Backend Connection</h1>
        <p>Testing the connection between React frontend and Express backend</p>
      </header>

      <main className="app-main">
        <div className="connection-status">
          <h2>Connection Status</h2>
          <div className={`status ${connectionStatus.includes('✅') ? 'connected' : 'disconnected'}`}>
            {connectionStatus}
          </div>
          <button onClick={testBackendConnection} disabled={loading}>
            {loading ? 'Testing...' : 'Test Connection'}
          </button>
        </div>

        {error && (
          <div className="error">
            <h3>Error:</h3>
            <p>{error}</p>
          </div>
        )}

        {serverData && (
          <div className="server-info">
            <h2>Server Information</h2>
            <div className="info-card">
              <p><strong>Status:</strong> {serverData.status}</p>
              <p><strong>Message:</strong> {serverData.message}</p>
              {serverData.timestamp && (
                <p><strong>Timestamp:</strong> {new Date(serverData.timestamp).toLocaleString()}</p>
              )}
              {serverData.data && (
                <>
                  <p><strong>Server:</strong> {serverData.data.server}</p>
                  <p><strong>Version:</strong> {serverData.data.version}</p>
                  <p><strong>Environment:</strong> {serverData.data.environment}</p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="api-tests">
          <h2>API Tests</h2>
          <div className="button-group">
            <button onClick={testApiEndpoint} disabled={loading}>
              Test API Endpoint
            </button>
            <button onClick={fetchSampleData} disabled={loading}>
              Fetch Sample Data
            </button>
          </div>
        </div>

        {sampleData && (
          <div className="sample-data">
            <h2>Sample Farm Data</h2>
            <div className="farms-grid">
              {sampleData.farms.map((farm) => (
                <div key={farm.id} className="farm-card">
                  <h3>{farm.name}</h3>
                  <p><strong>Location:</strong> {farm.location}</p>
                  <p><strong>Crops:</strong> {farm.crops.join(', ')}</p>
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
