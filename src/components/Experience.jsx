import { Briefcase, Calendar, MapPin, Film, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Video Editor',
      company: 'Creative Vision Media Studio',
      period: '2023 – Present',
      location: 'Misamis Oriental, Philippines',
      type: 'Full-time',
      description: 'Leading video editing projects for commercial and promotional campaigns, managing multiple client projects weekly while maintaining high quality standards.',
      achievements: [
        'Edited commercial and promotional campaigns',
        'Managed multiple client projects weekly',
        'Increased production efficiency by 30%',
        'Led creative direction for brand advertisements'
      ],
      icon: <Film className="w-6 h-6" />
    },
    {
      title: 'Freelance Video Editor',
      company: 'Self-Employed',
      period: '2021 – Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Providing professional video editing services to diverse clients, specializing in social media content and commercial projects.',
      achievements: [
        'Completed 50+ successful projects',
        'Specialized in social media growth content',
        'Built long-term partnerships with content creators',
        'Delivered high-quality 4K exports'
      ],
      icon: <Users className="w-6 h-6" />
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Professional journey through creative video editing and content production
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="w-full h-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 md:justify-end">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-6 text-gray-500 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2 md:justify-end">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 md:justify-end"
                          >
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-4 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="w-full h-full flex items-center justify-center scale-75">
                    {exp.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Career Highlights</h3>
            <p className="text-purple-100">Numbers that define my professional journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">30%</div>
              <div className="text-purple-100 text-sm">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
