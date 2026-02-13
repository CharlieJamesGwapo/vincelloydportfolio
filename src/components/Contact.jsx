import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Film, Video } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('error')
      return
    }

    setIsSubmitting(true)
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setIsSubmitting(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      // Clear status after 5 seconds
      setTimeout(() => setStatus(''), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '09XXXXXXXXX',
      link: 'tel:09XXXXXXXXX'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'vinceloydrabor.creative@gmail.com',
      link: 'mailto:vinceloydrabor.creative@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Misamis Oriental, Philippines',
      link: null
    }
  ]

  const services = [
    {
      icon: <Film size={20} />,
      title: 'Freelance Projects'
    },
    {
      icon: <Video size={20} />,
      title: 'Long-Term Collaborations'
    },
    {
      icon: <Mail size={20} />,
      title: 'Agency Work'
    },
    {
      icon: <Phone size={20} />,
      title: 'Brand Campaigns'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 mb-6">
                I'm available for freelance projects, long-term collaborations, agency work, and brand campaigns. 
                Let's discuss how we can bring your vision to life through compelling video content.
              </p>
              
              {/* Response Time Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
                <Clock size={16} />
                <span className="text-sm font-semibold">Usually responds within 24 hours</span>
              </div>
            </div>

            {/* Services Available */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">I'm Available For:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-purple-600 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="text-gray-700 text-sm font-medium group-hover:text-purple-700 transition-colors">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-purple-600 hover:text-purple-700 transition-colors group-hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 group-hover:text-purple-700 transition-colors">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Vince Lloyd Rabor"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="vinceloydrabor.creative@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Video Editing Project"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message * <span className="text-sm text-gray-500">({formData.message.length} characters)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell me about your video editing project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white relative z-10"></div>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I will get back to you soon.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                    <AlertCircle size={20} />
                    <span>Please fix errors above and try again.</span>
                  </div>
                )}
                
                {status === 'sending' && (
                  <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-800"></div>
                    <span>Sending your message...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
