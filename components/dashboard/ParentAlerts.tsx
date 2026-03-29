'use client'

import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react'

const alerts = [
  {
    id: '1',
    type: 'warning',
    title: 'Assignment Due Soon',
    message: 'Emma has an algebra assignment due in 2 days. Please ensure she completes it.',
    time: '1 hour ago',
  },
  {
    id: '2',
    type: 'success',
    title: 'Grade Updated',
    message: 'Liam received an A+ on his physics project.',
    time: '1 day ago',
  },
  {
    id: '3',
    type: 'info',
    title: 'Parent-Teacher Conference',
    message: 'Scheduled for next Friday at 3 PM. Please confirm attendance.',
    time: '2 days ago',
  },
]

export default function ParentAlerts() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Alerts & Notifications
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.type === 'warning'
                ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20'
                : alert.type === 'success'
                ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                : 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${
                alert.type === 'warning'
                  ? 'bg-yellow-100 dark:bg-yellow-900'
                  : alert.type === 'success'
                  ? 'bg-green-100 dark:bg-green-900'
                  : 'bg-blue-100 dark:bg-blue-900'
              }`}>
                {alert.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                ) : alert.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {alert.title}
                  </h4>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  {alert.message}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {alert.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}