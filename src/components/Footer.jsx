import { Heart, Mail, Phone, MapPin, Film, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vince Lloyd Rabor</h3>
            <p className="text-gray-400 mb-6">
              Professional Video Editor passionate about crafting cinematic and engaging visual stories that connect with audiences and drive results.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:vinceloydrabor.creative@gmail.com"
                className="group p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                title="Email"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="tel:09XXXXXXXXX"
                className="group p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                title="Phone"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                title="GitHub"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 group">
                <MapPin size={16} className="group-hover:text-purple-400 transition-colors duration-300" />
                <span className="group-hover:text-purple-400 transition-colors duration-300">Misamis Oriental</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="group-hover:text-purple-400 transition-colors duration-300" />
                <a href="tel:09XXXXXXXXX" className="hover:text-purple-400 transition-colors duration-300">
                  09XXXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="group-hover:text-purple-400 transition-colors duration-300" />
                <a
                  href="mailto:vinceloydrabor.creative@gmail.com"
                  className="hover:text-purple-400 transition-colors duration-300 break-all"
                >
                  vinceloydrabor.creative@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Vince Lloyd Rabor. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1 group">
              Made with <Heart size={16} className="text-red-500 fill-current group-hover:scale-110 transition-transform duration-300" /> creativity & passion <Film size={16} className="ml-1 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
