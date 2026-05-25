import { Calculator, FlaskConical, BookOpen, Code, Globe, Languages, TrendingUp, Microscope, PenTool, BarChart3 } from 'lucide-react'

const boards = [
  {
    label: 'Cambridge IGCSE',
    short: 'IGCSE',
    color: 'from-blue-500 to-blue-700',
    border: 'border-blue-300 dark:border-blue-600',
    tag: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    icon: '🎓',
    grades: 'Grades 9–10',
    body: 'Cambridge Assessment',
    highlight: 'A* achievers from our centre',
  },
  {
    label: 'IB Diploma',
    short: 'IB DP',
    color: 'from-purple-500 to-purple-700',
    border: 'border-purple-300 dark:border-purple-600',
    tag: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
    icon: '🌍',
    grades: 'Grades 11–12',
    body: 'International Baccalaureate',
    highlight: 'Top scorers in HL subjects',
  },
  {
    label: 'CBSE',
    short: 'CBSE',
    color: 'from-orange-500 to-orange-700',
    border: 'border-orange-300 dark:border-orange-600',
    tag: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
    icon: '📚',
    grades: 'Grades 6–12',
    body: 'Central Board of Secondary Education',
    highlight: '95%+ results consistently',
  },
  {
    label: 'ICSE / ISC',
    short: 'ICSE',
    color: 'from-pink-500 to-pink-700',
    border: 'border-pink-300 dark:border-pink-600',
    tag: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
    icon: '📖',
    grades: 'Grades 6–12',
    body: 'Council for Indian School Certificate',
    highlight: 'Strong English & Science focus',
  },
  {
    label: 'SAT / ACT',
    short: 'SAT',
    color: 'from-green-500 to-green-700',
    border: 'border-green-300 dark:border-green-600',
    tag: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    icon: '✏️',
    grades: 'US College Entrance',
    body: 'College Board / ACT Inc.',
    highlight: '1500+ SAT scores achieved',
  },
  {
    label: 'JEE Main & Advanced',
    short: 'JEE',
    color: 'from-red-500 to-red-700',
    border: 'border-red-300 dark:border-red-600',
    tag: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
    icon: '⚙️',
    grades: 'Engineering Entrance',
    body: 'National Testing Agency',
    highlight: 'IIT / NIT selections every year',
  },
  {
    label: 'NEET',
    short: 'NEET',
    color: 'from-teal-500 to-teal-700',
    border: 'border-teal-300 dark:border-teal-600',
    tag: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
    icon: '⚗️',
    grades: 'Medical Entrance',
    body: 'National Testing Agency',
    highlight: 'MBBS selections pan-India',
  },
  {
    label: 'Cambridge A-Levels',
    short: 'A-Level',
    color: 'from-indigo-500 to-indigo-700',
    border: 'border-indigo-300 dark:border-indigo-600',
    tag: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
    icon: '🏅',
    grades: 'Grades 12–13',
    body: 'Cambridge Assessment',
    highlight: 'A & A* results for UK universities',
  },
]

const subjects = [
  { icon: Calculator, name: 'Mathematics' },
  { icon: FlaskConical, name: 'Chemistry' },
  { icon: Microscope, name: 'Biology' },
  { icon: TrendingUp, name: 'Physics' },
  { icon: BookOpen, name: 'English' },
  { icon: Code, name: 'Computer Science' },
  { icon: Globe, name: 'Economics' },
  { icon: BarChart3, name: 'Accounts' },
  { icon: Languages, name: 'Languages' },
  { icon: PenTool, name: 'Essay / TOK' },
]

export default function SubjectsStandards() {
  return (
    <section id="subjects" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Boards & Subjects We Cover
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Every major curriculum, every subject — from Chandigarh to the world
          </p>
        </div>

        {/* Boards grid */}
        <div className="mb-14 sm:mb-18">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Curriculums & Exam Boards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {boards.map((b, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-slate-800 rounded-2xl border ${b.border} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* colour header */}
                <div className={`bg-gradient-to-r ${b.color} p-4 flex items-center gap-3`}>
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">{b.short}</div>
                    <div className="text-white/70 text-xs">{b.grades}</div>
                  </div>
                </div>
                {/* body */}
                <div className="p-4">
                  <p className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{b.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">{b.body}</p>
                  <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${b.tag}`}>
                    ✓ {b.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects strip */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Subjects
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-primary-100 dark:border-slate-700 text-center group"
                >
                  <div className="bg-primary-600 dark:bg-primary-500 w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary-700 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    {subject.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
