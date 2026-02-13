import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Briefcase, Film, Video, Mail, ChevronDown, Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Film },
    { name: 'Skills', href: '#skills', icon: Video },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="text-xl sm:text-2xl font-bold group">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">Vince Lloyd</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group px-3 lg:px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : scrolled 
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100' 
                        : 'text-white hover:text-purple-300 hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} className={isActive ? '' : 'group-hover:scale-110 transition-transform'} />
                  <span className="text-sm lg:text-base">{link.name}</span>
                </a>
              )
            })}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`backdrop-blur-md shadow-lg ${
          scrolled ? 'bg-white/95' : 'bg-white/90'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 transform ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                      : 'text-gray-800 hover:bg-gray-100 active:scale-95'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-purple-600'} />
                  <span className="font-semibold text-lg">{link.name}</span>
                  {isActive && <ChevronDown size={16} className="ml-auto" />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
