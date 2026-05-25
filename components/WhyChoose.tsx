import { Shield, UserCheck, Target, Globe, Clock, MessageCircle, Trophy, BookOpen } from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Board-Specialist Tutors',
    description: 'Every tutor is matched to your exact board — IGCSE, IB, CBSE, SAT, JEE or NEET. No generalists.',
    highlight: 'Right tutor. Right board.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Our students consistently achieve A* in IGCSE, 7s in IB, and top ranks in JEE/NEET every year.',
    highlight: 'A* · 7s · Top Ranks',
  },
  {
    icon: Target,
    title: 'Personalised Learning',
    description: 'Custom study plans based on your syllabus, past papers, weak areas and exam timeline.',
    highlight: 'Your pace. Your plan.',
  },
  {
    icon: Globe,
    title: '8 Curricula Covered',
    description: 'IGCSE · IB · CBSE · ICSE · SAT · ACT · JEE · NEET — all on one platform.',
    highlight: 'Every board. One hub.',
  },
  {
    icon: MessageCircle,
    title: 'Instant Query Support',
    description: 'Raise a doubt anytime on WhatsApp or the platform. Get a response within hours, not days.',
    highlight: '24/7 academic support',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Morning, evening, weekend — sessions scheduled around your timetable, not ours.',
    highlight: 'Learn on your time',
  },
  {
    icon: Shield,
    title: 'Safe & Verified',
    description: 'All tutors are background-checked. Parents can monitor session progress in real-time.',
    highlight: 'Trusted by 10K+ families',
  },
  {
    icon: BookOpen,
    title: 'Exam-Ready Content',
    description: 'Past papers, mark schemes, revision notes and mock tests aligned to your exact exam board.',
    highlight: 'Syllabus-mapped resources',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Why Choose <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Not just tutoring — a curriculum-specialist platform built around your exam board and target grade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-100 dark:border-slate-700 flex flex-col"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow">
                  {reason.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                    ✓ {reason.highlight}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to improve your grades?</h3>
          <p className="text-primary-100 mb-6 text-base sm:text-lg">
            Book a free trial session with a board-specialist tutor today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/auth/signup"
              className="bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow"
            >
              Start Free Trial
            </a>
            <a
              href="https://wa.me/919876541177?text=Hi%21%20I%20want%20to%20know%20more%20about%20tutoring%20at%20Universal%20Study%20Hub."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
