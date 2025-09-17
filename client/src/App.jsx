import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import LandingPage from './components/LandingPage'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SuccessLogin from './pages/SuccessLogin'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import GovernmentSchemes from './pages/GovernmentSchemes'
import ExpenseTracker from './pages/ExpenseTracker'
import News from './pages/News'
import ErrorPage from './components/ErrorPage'
import FeaturePlaceholder from './pages/FeaturePlaceholder'
import ProtectedRoute from './components/ProtectedRoute'

// Auth Provider
import { AuthProvider } from './Authorisation/AuthProvider.jsx'

function App() {
  return (
    <AuthProvider>
      <div className="App">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{
              fontSize: '14px',
              fontWeight: '500',
            }}
          />

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/success-login" element={<SuccessLogin />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Feature Routes */}
            <Route path="/ai-advisor" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="AI Crop Advisor" 
                  description="Get personalized crop recommendations and disease diagnosis using AI"
                />
              </ProtectedRoute>
            } />
            <Route path="/diagnostics" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Smart Health Diagnostics" 
                  description="Upload crop images for instant disease and pest detection"
                />
              </ProtectedRoute>
            } />
            <Route path="/weather" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Weather Intelligence" 
                  description="Real-time weather forecasts and climate-smart farming advice"
                />
              </ProtectedRoute>
            } />
            <Route path="/market" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Market Intelligence" 
                  description="Price trends, market analysis, and buyer-seller matching"
                />
              </ProtectedRoute>
            } />
            <Route path="/finance" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Financial Management" 
                  description="Farm accounting, ROI calculator, and loan applications"
                />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Farmer Community" 
                  description="Connect with farmers, share experiences, and learn best practices"
                />
              </ProtectedRoute>
            } />
            <Route path="/experts" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Expert Consultation" 
                  description="Book video calls with agricultural specialists and experts"
                />
              </ProtectedRoute>
            } />
            <Route path="/learning" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Learning Center" 
                  description="Interactive training modules and certification programs"
                />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Farm Analytics" 
                  description="Performance dashboard, yield tracking, and benchmarking"
                />
              </ProtectedRoute>
            } />
            <Route path="/supply-chain" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Supply Chain" 
                  description="Track products from farm to consumer with digital passports"
                />
              </ProtectedRoute>
            } />
            <Route path="/reels" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="Reels" 
                  description="Short-form agricultural content and quick tips"
                />
              </ProtectedRoute>
            } />
            <Route path="/advisormap" element={
              <ProtectedRoute>
                <FeaturePlaceholder 
                  featureName="AdvisorMap" 
                  description="Find agricultural advisors and experts in your area"
                />
              </ProtectedRoute>
            } />
            <Route path="/news" element={
              <ProtectedRoute>
                <News />
              </ProtectedRoute>
            } />
            <Route path="/schemes" element={
              <ProtectedRoute>
                <GovernmentSchemes />
              </ProtectedRoute>
            } />
            <Route path="/expense-tracker" element={
              <ProtectedRoute>
                <ExpenseTracker />
              </ProtectedRoute>
            } />
            
            {/* Catch all route - 404 Not Found */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
    </AuthProvider>
  )
}

export default App