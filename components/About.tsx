import { Globe, BookOpen, Users, Target, Award, Zap } from 'lucide-react'

const boards = [
  { label: 'IGCSE', color: 'bg-blue-600', desc: 'Cambridge' },
  { label: 'IB', color: 'bg-purple-600', desc: 'International Baccalaureate' },
  { label: 'CBSE', color: 'bg-orange-600', desc: 'India National Board' },
  { label: 'ICSE', color: 'bg-pink-600', desc: 'India National Board' },
  { label: 'SAT', color: 'bg-green-600', desc: 'US College Entrance' },
  { label: 'JEE', color: 'bg-red-600', desc: 'Engineering Entrance' },
  { label: 'NEET', color: 'bg-teal-600', desc: 'Medical Entrance' },
  { label: 'A-Levels', color: 'bg-indigo-600', desc: 'Cambridge Advanced' },
]

const features = [
  {
    icon: BookOpen,
    title: 'All Boards Covered',
    description: 'From IGCSE and IB to CBSE, ICSE, SAT, JEE and NEET — one platform for every curriculum.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access top tutors across India and worldwide, regardless of your location or timezone.',
  },
  {
    icon: Users,
    title: 'Expert Matching',
    description: 'Matched with a tutor who specialises in your exact board, subject, and grade level.',
  },
  {
    icon: Target,
    title: 'Result-Oriented',
    description: 'Proven track record — our students achieve A* in IGCSE, 7s in IB, and top ranks in JEE/NEET.',
  },
  {
    icon: Award,
    title: 'Verified Tutors',
    description: 'Every tutor is background-checked, board-certified and rated by real students.',
  },
  {
    icon: Zap,
    title: 'Flexible & Fast',
    description: 'Book a session within hours. Learn live, 1-on-1, at a time that suits you.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            About <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Universal Study Hub is Chandigarh's leading online tutoring platform — connecting students
            with India's best tutors across every major curriculum. Whether you're aiming for an A* in
            IGCSE, a 7 in IB, a top score in JEE/NEET, or a perfect SAT — we have the right tutor for you.
          </p>
        </div>

        {/* Boards strip */}
        <div className="mb-12 sm:mb-16">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Boards & Exams We Cover
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {boards.map((b) => (
              <div
                key={b.label}
                className={`${b.color} text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform cursor-default`}
              >
                <span className="text-base">{b.label}</span>
                <span className="ml-2 text-white/70 text-xs hidden sm:inline">{b.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 dark:border-slate-700 card-hover"
              >
                <div className="bg-primary-600 dark:bg-primary-500 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Address strip */}
        <div className="mt-10 text-center text-slate-500 dark:text-slate-400 text-sm">
          📍 SCO 43, Sector 20C, Chandigarh – 160020 &nbsp;|&nbsp; 📞 +91 98765 41177
        </div>
      </div>
    </section>
  )
}
