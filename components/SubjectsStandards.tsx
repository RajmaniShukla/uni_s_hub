import { Calculator, FlaskConical, BookOpen, Code, Globe, Languages, Award } from 'lucide-react'

export default function SubjectsStandards() {
  const subjects = [
    { icon: Calculator, name: 'Mathematics' },
    { icon: FlaskConical, name: 'Science' },
    { icon: BookOpen, name: 'English' },
    { icon: Code, name: 'Computer Science' },
    { icon: Globe, name: 'Social Studies' },
    { icon: Languages, name: 'Languages' },
    { icon: Award, name: 'Competitive Exams' },
  ]

  const standards = [
    'International Boards',
    'School-level Education',
    'High School Curriculum',
    'Higher Studies',
    'Global Curriculum Support',
  ]

  return (
    <section id="subjects" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Subjects & Standards Covered
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Comprehensive coverage across all academic disciplines and international curriculums
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            Subjects
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-primary-100 dark:border-slate-700 text-center group"
                >
                  <div className="bg-primary-600 dark:bg-primary-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-primary-700 dark:group-hover:bg-primary-400 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {subject.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Standards */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            Standards & Curriculums
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-primary-600 dark:bg-primary-500 text-white p-3 sm:p-4 rounded-lg text-center font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
