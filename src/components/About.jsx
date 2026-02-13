import { Film, Camera, Video, TrendingUp, Award, Clock, Users, Target } from 'lucide-react'

const About = () => {
  const specializations = [
    {
      icon: <Film size={32} />,
      title: 'Cinematic Video Editing',
      description: 'Crafting emotional and visually stunning storytelling edits.'
    },
    {
      icon: <Video size={32} />,
      title: 'Social Media Content Creation',
      description: 'Creating viral and high-engagement short-form content.'
    },
    {
      icon: <Camera size={32} />,
      title: 'Brand & Commercial Ads',
      description: 'Producing promotional videos that increase brand awareness and sales.'
    },
    {
      icon: <Target size={32} />,
      title: 'Event Highlight Videos',
      description: 'Turning special moments into unforgettable cinematic memories.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate and detail-driven <span className="font-semibold text-purple-600">Professional Video Editor</span> with over 5 years of experience in creating cinematic, high-impact videos for brands, businesses, influencers, and events.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in <span className="font-semibold">Promotional & Commercial Ads</span>, <span className="font-semibold">Social Media Reels</span> (TikTok, Instagram, YouTube Shorts), <span className="font-semibold">YouTube Content Editing</span>, <span className="font-semibold">Event Highlights</span>, <span className="font-semibold">Corporate Videos</span>, and <span className="font-semibold">Real Estate Cinematic Tours</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My editing style focuses on storytelling, emotion, modern transitions, and audience engagement. I don't just edit videos — I create content that connects and converts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">�</span>
                <span className="text-gray-700">50+ Completed Video Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">🏆</span>
                <span className="text-gray-700">95% Client Satisfaction Rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">⚡</span>
                <span className="text-gray-700">Fast Turnaround (24–72 Hours)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">�</span>
                <span className="text-gray-700">Helped Clients Increase Engagement by 40%+</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">🎨</span>
                <span className="text-gray-700">Advanced Color Grading & Motion Graphics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">�</span>
                <span className="text-gray-700">Worked with Local & International Clients</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Specializations Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Specializations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">YouTube & Long-Form Content</h3>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Editing dynamic and professional YouTube videos optimized for retention, 
                ensuring your content keeps viewers engaged from start to finish.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                  <Clock className="w-4 h-4" />
                  <span>Audience Retention Focus</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growth-Oriented Editing</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Viewer Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
