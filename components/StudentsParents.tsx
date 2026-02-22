import { GraduationCap, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function StudentsParents() {
  const studentFeatures = [
    'Clear doubts anytime, anywhere',
    'Learn from global educators',
    'Access to verified tutors',
    'Personalized learning paths',
  ]

  const parentFeatures = [
    'Monitor learning progress',
    'Trusted & verified teachers',
    'Safe learning environment',
    'Regular progress updates',
  ]

  return (
    <section id="students-parents" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            For Students & Parents
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Tailored solutions for every learner and their support system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* For Students */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">For Students</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {studentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-200 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors group text-sm sm:text-base"
            >
              Start Learning
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* For Parents */}
          <div className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-primary-200 dark:border-slate-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-primary-600 dark:bg-primary-500 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">For Parents</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {parentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary-600 dark:bg-primary-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors group text-sm sm:text-base"
            >
              Submit a Query
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
