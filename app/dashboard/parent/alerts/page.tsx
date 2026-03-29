'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { AlertTriangle, CheckCircle, Info, X, Bell, BellOff, Settings } from 'lucide-react'

export default function ParentAlertsPage() {
  const { data: session } = useSession()
  const [selectedFilter, setSelectedFilter] = useState('all')

  const alerts = [
    {
      id: 1,
      type: 'academic',
      priority: 'high',
      title: 'Low Grade Alert',
      message: 'Alice\'s grade in Physics has dropped below 80%. Current grade: 75%.',
      child: 'Alice Johnson',
      date: '2024-03-28',
      read: false,
      actionRequired: true,
    },
    {
      id: 2,
      type: 'attendance',
      priority: 'medium',
      title: 'Attendance Warning',
      message: 'Bob has been absent for 3 consecutive days. Please contact the school if there are any concerns.',
      child: 'Bob Johnson',
      date: '2024-03-27',
      read: false,
      actionRequired: true,
    },
    {
      id: 3,
      type: 'behavior',
      priority: 'low',
      title: 'Positive Behavior Notice',
      message: 'Alice received a "Student of the Week" award for outstanding participation in class discussions.',
      child: 'Alice Johnson',
      date: '2024-03-25',
      read: true,
      actionRequired: false,
    },
    {
      id: 4,
      type: 'health',
      priority: 'high',
      title: 'Health Incident Report',
      message: 'Bob experienced a minor injury during PE class. He has been treated and is fine, but please review the incident report.',
      child: 'Bob Johnson',
      date: '2024-03-20',
      read: true,
      actionRequired: false,
    },
    {
      id: 5,
      type: 'academic',
      priority: 'medium',
      title: 'Assignment Due Soon',
      message: 'Alice has an important Chemistry lab report due in 2 days. Please ensure she completes it on time.',
      child: 'Alice Johnson',
      date: '2024-03-18',
      read: true,
      actionRequired: false,
    },
    {
      id: 6,
      type: 'general',
      priority: 'low',
      title: 'School Event Reminder',
      message: 'Parent-Teacher conference is scheduled for next week. Please confirm your attendance.',
      child: 'All Children',
      date: '2024-03-15',
      read: true,
      actionRequired: false,
    },
  ]

  const alertSettings = [
    { type: 'academic', label: 'Academic Performance', enabled: true },
    { type: 'attendance', label: 'Attendance Issues', enabled: true },
    { type: 'behavior', label: 'Behavior Reports', enabled: true },
    { type: 'health', label: 'Health & Safety', enabled: true },
    { type: 'general', label: 'General Announcements', enabled: false },
  ]

  const filteredAlerts = alerts.filter(alert => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'unread') return !alert.read
    if (selectedFilter === 'action-required') return alert.actionRequired
    return alert.type === selectedFilter
  })

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <Info className="w-5 h-5 text-blue-600" />
      case 'attendance':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'behavior':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'health':
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Alerts & Notifications
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Stay informed about your children's academic progress and school activities
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Alert Settings
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex gap-2 flex-wrap">
          {[
            { value: 'all', label: 'All Alerts' },
            { value: 'unread', label: 'Unread' },
            { value: 'action-required', label: 'Action Required' },
            { value: 'academic', label: 'Academic' },
            { value: 'attendance', label: 'Attendance' },
            { value: 'behavior', label: 'Behavior' },
            { value: 'health', label: 'Health' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedFilter === filter.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 ${
              !alert.read ? 'border-l-4 border-l-primary-500 bg-blue-50 dark:bg-blue-900/10' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {alert.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </span>
                  {!alert.read && (
                    <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 py-1 text-xs rounded-full">
                      New
                    </span>
                  )}
                  {alert.actionRequired && (
                    <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 text-xs rounded-full">
                      Action Required
                    </span>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500 dark:text-slate-500">
                    <span className="font-medium">{alert.child}</span> • {alert.date}
                  </div>
                  <div className="flex gap-2">
                    {alert.actionRequired && (
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 text-sm rounded">
                        Take Action
                      </button>
                    )}
                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm">
                      Mark as Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Settings */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Alert Preferences
        </h3>
        <div className="space-y-4">
          {alertSettings.map((setting) => (
            <div key={setting.type} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">{setting.label}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Receive notifications for {setting.label.toLowerCase()}
                </p>
              </div>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  setting.enabled ? 'bg-primary-600' : 'bg-slate-200 dark:bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    setting.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {alerts.filter(a => !a.read).length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Unread Alerts</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
            {alerts.filter(a => a.actionRequired).length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Action Required</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            {alerts.filter(a => a.priority === 'high').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">High Priority</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {alerts.filter(a => a.type === 'behavior').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Positive Updates</p>
        </div>
      </div>
    </div>
  )
}