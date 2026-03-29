'use client'

import { FileText, Users, Clock, CheckCircle } from 'lucide-react'

const assignments = [
  {
    id: '1',
    title: 'Algebra Problem Set',
    course: 'Mathematics',
    dueDate: '2024-01-15',
    submissions: 18,
    totalStudents: 25,
    status: 'active',
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    course: 'Physics',
    dueDate: '2024-01-18',
    submissions: 15,
    totalStudents: 18,
    status: 'active',
  },
  {
    id: '3',
    title: 'Chemistry Quiz',
    course: 'Chemistry',
    dueDate: '2024-01-20',
    submissions: 0,
    totalStudents: 22,
    status: 'draft',
  },
]

export default function TeacherAssignments() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Assignments
        </h3>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          Create Assignment
        </button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {assignment.title}
                  </h4>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    assignment.status === 'active'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  }`}>
                    {assignment.status}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {assignment.course}
                </p>

                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {assignment.submissions}/{assignment.totalStudents} submitted
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Due {assignment.dueDate}
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
                  Grade
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}