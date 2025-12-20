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
    <section id="subjects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Subjects & Standards Covered
          </h2>
          <p className="text-lg text-gray-700">
            Comprehensive coverage across all academic disciplines and international curriculums
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Subjects
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-primary-100 text-center group"
                >
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-700 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">
                    {subject.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Standards */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Standards & Curriculums
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-primary-600 text-white p-4 rounded-lg text-center font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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

