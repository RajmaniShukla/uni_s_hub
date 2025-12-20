import { MessageSquare, UserCheck, Video, Trophy } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Raise Your Query',
      description: 'Students or parents submit academic questions for any subject',
    },
    {
      number: '02',
      icon: UserCheck,
      title: 'Get Matched',
      description: 'Our platform connects you with the best tutor for your needs',
    },
    {
      number: '03',
      icon: Video,
      title: 'Interact & Learn',
      description: 'Engage in one-on-one or group sessions with expert tutors',
    },
    {
      number: '04',
      icon: Trophy,
      title: 'Achieve Success',
      description: 'Track your progress and achieve your academic goals',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-700">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
              >
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

