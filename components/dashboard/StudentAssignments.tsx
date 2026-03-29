'use client'

import { FileText, Clock, CheckCircle } from 'lucide-react'

const assignments = [
  {
    id: '1',
    title: 'Algebra Problem Set',
    course: 'Mathematics',
    dueDate: '2024-01-15',
    status: 'pending',
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    course: 'Physics',
    dueDate: '2024-01-18',
    status: 'submitted',
  },
  {
    id: '3',
    title: 'Chemistry Quiz',
    course: 'Chemistry',
    dueDate: '2024-01-20',
    status: 'pending',
  },
]

export default function StudentAssignments() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Assignments
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                assignment.status === 'submitted'
                  ? 'bg-green-100 dark:bg-green-900'
                  : 'bg-yellow-100 dark:bg-yellow-900'
              }`}>
                {assignment.status === 'submitted' ? (
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <FileText className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                )}
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  {assignment.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {assignment.course}
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <Clock className="h-4 w-4 mr-1" />
                Due {assignment.dueDate}
              </div>
              <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                assignment.status === 'submitted'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
              }`}>
                {assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}