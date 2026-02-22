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
    <section id="why-choose" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Why Choose <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Experience the difference of quality education with personalized support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 dark:border-slate-700"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
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
