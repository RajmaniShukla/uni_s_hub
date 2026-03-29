'use client'

import { Users, Mail, TrendingUp } from 'lucide-react'

const students = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    course: 'Mathematics',
    progress: 85,
    lastActive: '2 hours ago',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    course: 'Physics',
    progress: 72,
    lastActive: '1 day ago',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    course: 'Chemistry',
    progress: 90,
    lastActive: '30 minutes ago',
  },
]

export default function TeacherStudents() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Recent Students
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  {student.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {student.course}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {student.progress}%
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  Last active: {student.lastActive}
                </p>
              </div>

              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}