import { MessageSquare, UserCheck, Video, Trophy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Choose Your Board',
    description: 'Select your curriculum — IGCSE, IB, CBSE, SAT, JEE, NEET or any other. Tell us your subject and target grade.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Get Matched',
    description: 'We match you with a verified, board-specialist tutor in under 24 hours — no random assignments.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    number: '03',
    icon: Video,
    title: 'Learn 1-on-1',
    description: 'Attend live, interactive sessions tailored to your syllabus. Past papers, mock tests, and doubt-clearing included.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Achieve Your Grade',
    description: 'Track your progress, see results, and walk into your exam confident. A* in IGCSE, 7 in IB, top rank in JEE — it starts here.',
    color: 'from-green-500 to-green-700',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            From choosing your board to hitting your target grade — four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-400 via-primary-400 to-green-400 opacity-30 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary-100 dark:border-slate-700 z-10"
              >
                {/* Step number */}
                <div className={`absolute -top-4 -right-4 bg-gradient-to-br ${step.color} text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}>
                  {step.number}
                </div>
                {/* Icon */}
                <div className={`bg-gradient-to-br ${step.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-md`}>
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started — It's Free
          </a>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">
            No credit card required · First session free
          </p>
        </div>
      </div>
    </section>
  )
}
