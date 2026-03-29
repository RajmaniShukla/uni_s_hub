'use client'

import { Play, BookOpen, Clock } from 'lucide-react'

const courses = [
  {
    id: '1',
    title: 'Mathematics - Algebra Fundamentals',
    teacher: 'Dr. Sarah Johnson',
    progress: 75,
    nextLesson: 'Quadratic Equations',
    totalLessons: 20,
    completedLessons: 15,
  },
  {
    id: '2',
    title: 'Physics - Mechanics',
    teacher: 'Prof. Michael Chen',
    progress: 60,
    nextLesson: 'Newton\'s Laws of Motion',
    totalLessons: 25,
    completedLessons: 15,
  },
  {
    id: '3',
    title: 'Chemistry - Organic Chemistry',
    teacher: 'Dr. Emily Davis',
    progress: 40,
    nextLesson: 'Hydrocarbons',
    totalLessons: 18,
    completedLessons: 7,
  },
]

export default function StudentCourses() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          My Courses
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                  {course.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  by {course.teacher}
                </p>

                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.completedLessons}/{course.totalLessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Next: {course.nextLesson}
                  </div>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-3">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {course.progress}% complete
                </p>
              </div>

              <button className="ml-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <Play className="h-4 w-4 mr-2" />
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}