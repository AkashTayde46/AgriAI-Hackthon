import { useState, useEffect } from 'react'
import { BadgeDollarSign, Menu, X } from 'lucide-react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import HowItWorksSection from './HowItWorksSection'
import TechnologySection from './TechnologySection'
import DashboardPreviewSection from './DashboardPreviewSection'
import TestimonialsSection from './TestimonialsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import ChatWidget from './ChatWidget'

function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FDF8] via-[#E8F5E8] to-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : ''}`}
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.08)',
          boxShadow: isScrolled ? '0 4px 24px 0 #22c55e22, 0 1.5px 4px 0 #4ade8033' : 'none',
          borderBottom: isScrolled ? '1.5px solid #bbf7d055' : 'none',
          backdropFilter: 'blur(16px)',
          top: '0px',
          transition: 'top 0.3s ease-in-out',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-green-50 transition duration-200">
            <BadgeDollarSign className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-extrabold text-green-800 tracking-tight drop-shadow">AgriAI</span>
          </a>
          
          {/* Hamburger Button */}
          <button
            className="md:hidden text-green-800 p-2 rounded-lg hover:bg-green-100 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu */}
          <ul className={`hidden md:flex items-center space-x-8 font-semibold text-green-800 text-lg transition-all duration-300`}> 
            <li>
              <a href="#home" className="nav-link nav-link-animated">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="nav-link nav-link-animated">
                Program
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link nav-link-animated">
                About us
              </a>
            </li>
            <li>
              <a href="#testimonials" className="nav-link nav-link-animated">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link nav-link-animated">
                Contact us
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link nav-link-animated">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-green-100 rounded-b-2xl shadow-lg animate-fade-in">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <a href="#home" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#features" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>Program</a>
              <a href="#about" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>About us</a>
              <a href="#testimonials" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a>
              <a href="/login" className="block px-3 py-2 text-green-800 hover:bg-green-50 rounded-lg font-semibold transition" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechnologySection />
        <DashboardPreviewSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-14 h-14 bg-[#4CAF50] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
          </svg>
        </button>
      </div>
      
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-[#2E7D44] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default LandingPage
