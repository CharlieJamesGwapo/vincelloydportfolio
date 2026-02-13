import { useState, useEffect, useMemo, useCallback } from 'react'
import { Play, Film, Camera, Mail, Phone, MapPin, ChevronDown, ExternalLink, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const texts = useMemo(() => [
    "Professional Video Editor",
    "Creative Visual Editor",
    "Cinematic Storyteller"
  ], [])

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    setIsVisible(true)
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const typingSpeed = isDeleting ? 50 : 100
    const timer = setTimeout(handleTyping, typingSpeed)
    
    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Available Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/30 border border-green-400/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-semibold">Available for Freelance & Full-Time Opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-black">Vince Lloyd</span>
              </h1>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                Professional Video Editor
              </h2>

              {/* Dynamic Text with Typewriter Effect */}
              <div className="h-12 mb-10">
                <p className="text-2xl sm:text-3xl text-purple-200 font-semibold transition-all duration-500">
                  {currentText}
                  <span className="inline-block w-1 h-8 bg-purple-400 ml-1 animate-pulse"></span>
                </p>
              </div>

              {/* Description */}
              <p className="text-white text-xl mb-12 max-w-2xl leading-relaxed font-medium">
                Passionate about transforming raw footage into powerful visual stories using modern editing techniques, motion graphics, and cinematic color grading.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-purple-300 mb-2">50+</div>
                  <div className="text-white text-sm font-medium">Projects Completed</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-pink-300 mb-2">5+</div>
                  <div className="text-white text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl lg:text-5xl font-black text-blue-300 mb-2">20+</div>
                  <div className="text-white text-sm font-medium">Happy Clients</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl text-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Film className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Hire Me</span>
                </button>
                <button className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Camera className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">View Work</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-base text-white justify-center lg:justify-start">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Phone className="w-5 h-5 text-purple-300" />
                  <span className="font-medium">09XXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Mail className="w-5 h-5 text-purple-300" />
                  <span className="font-medium">vinceloydrabor.creative@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5 text-purple-300" />
                  <span className="font-medium">Misamis Oriental, Philippines</span>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/profile.jpeg" 
                    alt="Vince Lloyd Rabor" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Play className="w-8 h-8 text-purple-200" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <Camera className="w-8 h-8 text-pink-200" />
                </div>
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Github size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animation-delay-2000 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes animation-delay-4000 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero
