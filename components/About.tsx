import { Globe, BookOpen, Users, Target } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'All Subjects',
      description: 'One platform for all subjects',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Covers international standards and curriculums',
    },
    {
      icon: Users,
      title: 'Personalized Matching',
      description: 'Get matched with the best tutor for your needs',
    },
    {
      icon: Target,
      title: 'Online Learning',
      description: 'Flexible online learning from anywhere',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            About <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Universal Study Hub is a comprehensive online education platform designed to bridge the gap 
            between students and quality education. We provide a unified space where academic queries 
            meet expert solutions, connecting learners with verified tutors and teachers from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
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
      </div>
    </section>
  )
}
