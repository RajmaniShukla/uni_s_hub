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
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 dark:border-slate-700"
              >
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary-600 dark:bg-primary-500 text-white text-lg sm:text-2xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
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
