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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Universal Study Hub</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Universal Study Hub is a comprehensive online education platform designed to bridge the gap 
            between students and quality education. We provide a unified space where academic queries 
            meet expert solutions, connecting learners with verified tutors and teachers from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary-100"
              >
                <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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

