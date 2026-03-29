'use client'

import { BookOpen, Award, Users, Clock, ArrowRight } from 'lucide-react'

export default function CoursesOffered() {
  const courseCategories = [
    {
      id: 1,
      name: 'Mathematics',
      icon: BookOpen,
      description: 'Master algebra, geometry, calculus and more',
      courses: [
        { name: 'Algebra Fundamentals', level: 'Grade 9-10', students: 1250 },
        { name: 'Geometry & Trigonometry', level: 'Grade 10-11', students: 890 },
        { name: 'Calculus Basics', level: 'Grade 12', students: 650 },
        { name: 'Advanced Statistics', level: 'College', students: 320 },
      ],
    },
    {
      id: 2,
      name: 'Science',
      icon: BookOpen,
      description: 'Physics, Chemistry, and Biology courses',
      courses: [
        { name: 'Physics - Mechanics', level: 'Grade 10-11', students: 980 },
        { name: 'Chemistry - Organic', level: 'Grade 11-12', students: 750 },
        { name: 'Biology - Genetics', level: 'Grade 11', students: 620 },
        { name: 'Environmental Science', level: 'Grade 9-10', students: 540 },
      ],
    },
    {
      id: 3,
      name: 'Languages',
      icon: BookOpen,
      description: 'Learn English, Spanish, French and more',
      courses: [
        { name: 'English Literature', level: 'Grade 9-12', students: 1510 },
        { name: 'Spanish for Beginners', level: 'All Levels', students: 890 },
        { name: 'French Language & Culture', level: 'All Levels', students: 670 },
        { name: 'German Grammar', level: 'All Levels', students: 420 },
      ],
    },
    {
      id: 4,
      name: 'Competitive Exams',
      icon: Award,
      description: 'Prepare for entrance exams and competitions',
      courses: [
        { name: 'SAT Prep Course', level: 'Grade 11-12', students: 2100 },
        { name: 'JEE Main Preparation', level: 'Grade 11-12', students: 1800 },
        { name: 'NEET Biology & Chemistry', level: 'Grade 11-12', students: 1650 },
        { name: 'GMAT for MBA', level: 'Professional', students: 560 },
      ],
    },
  ]

  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Courses Offered
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Comprehensive courses across all subjects and academic levels, taught by experienced educators
          </p>
        </div>

        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {courseCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-sm text-primary-100">{category.description}</p>
                </div>

                {/* Courses List */}
                <div className="p-5 sm:p-6 space-y-3">
                  {category.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="pb-3 border-b border-slate-100 dark:border-slate-700 last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                        {course.name}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                        <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded">
                          {course.level}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {course.students}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* CTA Button */}
                  <a
                    href="/auth/signup"
                    className="mt-4 w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    Explore Courses
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              150+
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Active Courses</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              50K+
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Students Learning</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              250+
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Expert Teachers</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              4.8/5
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}