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
    <section id="students-parents" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            For Students & Parents
          </h2>
          <p className="text-lg text-gray-700">
            Tailored solutions for every learner and their support system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Students */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">For Students</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {studentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-200 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors group"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* For Parents */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-xl border-2 border-primary-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">For Parents</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {parentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
            >
              Submit a Query
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

