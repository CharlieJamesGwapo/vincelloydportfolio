import { useState } from 'react'
import { ExternalLink, Play, Film, Camera, Video, TrendingUp, Calendar, Eye } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const projects = [
    {
      title: 'Luxury Brand Commercial',
      role: 'Lead Video Editor',
      description: 'Professional ad campaign that boosted client engagement by 45% through cinematic storytelling and premium visual effects.',
      features: [
        'Cinematic color grading and correction',
        'Motion graphics integration',
        'Brand storytelling narrative',
        'Multi-platform optimization'
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      icon: <Film size={32} />,
      color: 'from-purple-500 to-pink-500',
      completed: '2025',
      impact: '45% engagement increase'
    },
    {
      title: 'Real Estate Cinematic Tour',
      role: 'Video Editor & Colorist',
      description: 'High-end property showcase with drone footage and cinematic color grading that highlighted luxury features.',
      features: [
        'Drone footage integration',
        'Cinematic color grading',
        'Property feature highlights',
        'Virtual tour optimization'
      ],
      technologies: ['Premiere Pro', 'Lumetri Color', 'Motion Graphics'],
      icon: <Camera size={32} />,
      color: 'from-blue-500 to-cyan-500',
      completed: '2024',
      impact: '30% faster sales'
    },
    {
      title: 'Viral Social Media Campaign',
      role: 'Content Creator & Editor',
      description: 'Short-form content reaching 500K+ organic views across TikTok, Instagram Reels, and YouTube Shorts.',
      features: [
        'Trending audio integration',
        'Fast-paced editing style',
        'Platform-specific optimization',
        'Engagement-focused content'
      ],
      technologies: ['Premiere Pro', 'After Effects', 'Sound Design'],
      icon: <Video size={32} />,
      color: 'from-green-500 to-teal-500',
      completed: '2024',
      impact: '500K+ organic views'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing cinematic video editing projects that deliver results and captivate audiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden h-48`}>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold line-clamp-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                      {project.completed}
                    </span>
                    <div className="flex items-center gap-1 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs">
                        <span className="text-purple-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tools Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200 hover:bg-purple-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium group">
                    <Play size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Watch</span>
                  </button>
                  <button className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium group">
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Project Impact</h3>
            <p className="text-purple-100">Measurable results from creative video editing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500K+</div>
              <div className="text-purple-100 text-sm">Organic Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">45%</div>
              <div className="text-purple-100 text-sm">Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">30%</div>
              <div className="text-purple-100 text-sm">Faster Sales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
