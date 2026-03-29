'use client'

import { BookOpen, Users, Plus, Edit } from 'lucide-react'

const courses = [
  {
    id: '1',
    title: 'Mathematics - Algebra Fundamentals',
    subject: 'Mathematics',
    grade: 'Grade 9-10',
    students: 25,
    lessons: 20,
    status: 'active',
  },
  {
    id: '2',
    title: 'Physics - Mechanics',
    subject: 'Physics',
    grade: 'Grade 11-12',
    students: 18,
    lessons: 25,
    status: 'active',
  },
  {
    id: '3',
    title: 'Chemistry - Organic Chemistry',
    subject: 'Chemistry',
    grade: 'Grade 10-11',
    students: 22,
    lessons: 18,
    status: 'draft',
  },
]

export default function TeacherCourses() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          My Courses
        </h3>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Create Course
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
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {course.title}
                  </h4>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    course.status === 'active'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  }`}>
                    {course.status}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.subject}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students
                  </div>
                  <div>
                    {course.lessons} lessons
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Grade: {course.grade}
                </p>
              </div>

              <div className="flex space-x-2">
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}