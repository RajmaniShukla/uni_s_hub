import { Shield, UserCheck, Target, Globe, Clock, MessageCircle } from 'lucide-react'

export default function WhyChoose() {
  const reasons = [
    {
      icon: UserCheck,
      title: 'Expert & Verified Tutors',
      description: 'All tutors are thoroughly verified and have proven expertise in their subjects',
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Tailored learning approach that adapts to your individual needs and pace',
    },
    {
      icon: Globe,
      title: 'Global Standards Support',
      description: 'Comprehensive coverage of international curriculums and educational standards',
    },
    {
      icon: Shield,
      title: 'Safe Platform',
      description: 'Secure and trusted environment for students and parents with verified teachers',
    },
    {
      icon: MessageCircle,
      title: 'Easy Query Submission',
      description: 'Simple and intuitive process to raise academic queries anytime, anywhere',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with flexible scheduling that fits your lifestyle',
    },
  ]

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-lg text-gray-700">
            Experience the difference of quality education with personalized support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

