'use client'

import { User, TrendingUp, MessageSquare } from 'lucide-react'

const children = [
  {
    id: '1',
    name: 'Emma Johnson',
    grade: 'Grade 10',
    school: 'Lincoln High School',
    averageScore: 88,
    courses: 6,
    lastActive: '1 hour ago',
  },
  {
    id: '2',
    name: 'Liam Johnson',
    grade: 'Grade 7',
    school: 'Washington Middle School',
    averageScore: 92,
    courses: 5,
    lastActive: '3 hours ago',
  },
]

export default function ParentChildren() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          My Children
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          Add Child
        </button>
      </div>

      <div className="space-y-4">
        {children.map((child) => (
          <div
            key={child.id}
            className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {child.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {child.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {child.grade} • {child.school}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Last active: {child.lastActive}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {child.averageScore}% average
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {child.courses} courses enrolled
                </p>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded text-sm">
                View Progress
              </button>
              <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700">
                Message Teacher
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}