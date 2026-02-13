import { Film, Video, Palette, TrendingUp, Users, Target, CheckCircle } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Video Editing',
      icon: <Film size={28} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Adobe Premiere Pro', level: 95 },
        { name: 'After Effects', level: 90 },
        { name: 'DaVinci Resolve', level: 85 },
        { name: 'Final Cut Pro', level: 75 }
      ]
    },
    {
      title: 'Motion Graphics',
      icon: <Video size={28} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Text Animation', level: 90 },
        { name: 'Transitions & Effects', level: 95 },
        { name: 'Motion Tracking', level: 85 }
      ]
    },
    {
      title: 'Post-Production',
      icon: <Palette size={28} />,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Color Grading', level: 90 },
        { name: 'Sound Design', level: 85 },
        { name: 'Cinematic Storytelling', level: 95 }
      ]
    },
    {
      title: 'Content Strategy',
      icon: <TrendingUp size={28} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Audience Retention Editing', level: 85 },
        { name: 'Short-Form Optimization', level: 90 },
        { name: 'YouTube Growth Editing', level: 80 }
      ]
    }
  ]

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-gradient-to-r from-purple-500 to-pink-500'
    if (level >= 85) return 'bg-gradient-to-r from-blue-500 to-cyan-500'
    if (level >= 80) return 'bg-gradient-to-r from-green-500 to-teal-500'
    return 'bg-gradient-to-r from-orange-500 to-red-500'
  }

  const professionalAttributes = [
    'Creative & Detail-Oriented',
    'Strong Visual Storytelling',
    'Fast Learner',
    'Excellent Communication',
    'On-Time Delivery',
    'Client-Focused Approach'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive video editing skills and creative expertise for exceptional content production
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium text-sm group-hover/skill:text-purple-700 transition-colors">{skill.name}</span>
                        <span className="text-sm text-gray-500 font-semibold group-hover/skill:text-purple-600 transition-colors">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform group-hover/skill:scale-y-110 origin-left`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Attributes */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Professional Attributes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalAttributes.map((attribute, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-800 font-medium group-hover:text-purple-700 transition-colors">{attribute}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Expertise Highlights</h3>
            <p className="text-purple-100">Key metrics that define my professional capabilities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24-72h</div>
              <div className="text-purple-100 text-sm">Turnaround Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">40%+</div>
              <div className="text-purple-100 text-sm">Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-100 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Tools & Software */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Additional Tools & Software</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Adobe Audition',
              'Media Encoder',
              'Photoshop',
              'Illustrator',
              'Cinema 4D',
              'Blender',
              'Audacity',
              'HandBrake',
              'VLC Media Player',
              'Frame.io'
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
