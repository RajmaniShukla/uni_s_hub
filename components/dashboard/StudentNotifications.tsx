'use client'

import { Bell, Info, CheckCircle, AlertTriangle } from 'lucide-react'

const notifications = [
  {
    id: '1',
    title: 'New assignment posted',
    message: 'Mathematics: Algebra Problem Set is now available',
    type: 'info',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    title: 'Assignment graded',
    message: 'Your Physics Lab Report has been graded: 92%',
    type: 'success',
    time: '1 day ago',
    read: true,
  },
  {
    id: '3',
    title: 'Upcoming deadline',
    message: 'Chemistry Quiz due in 2 days',
    type: 'warning',
    time: '3 hours ago',
    read: false,
  },
]

export default function StudentNotifications() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Notifications
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          Mark all read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.read
                ? 'border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50'
                : 'border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${
                notification.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900'
                  : notification.type === 'warning'
                  ? 'bg-yellow-100 dark:bg-yellow-900'
                  : 'bg-blue-100 dark:bg-blue-900'
              }`}>
                {notification.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : notification.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-900 dark:text-white">
                  {notification.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {notification.message}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}