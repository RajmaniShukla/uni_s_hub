'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { User, TrendingUp, MessageSquare, AlertTriangle } from 'lucide-react'
import ParentChildren from '@/components/dashboard/ParentChildren'
import ParentProgress from '@/components/dashboard/ParentProgress'
import ParentCommunication from '@/components/dashboard/ParentCommunication'
import ParentAlerts from '@/components/dashboard/ParentAlerts'

export default function ParentDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({
    childrenCount: 0,
    averageProgress: 0,
    unreadMessages: 0,
    alertsCount: 0,
  })

  useEffect(() => {
    // Fetch parent stats
    setStats({
      childrenCount: 2,
      averageProgress: 78,
      unreadMessages: 3,
      alertsCount: 1,
    })
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Monitor your children's academic progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <User className="h-8 w-8 text-primary-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Children
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.childrenCount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Average Progress
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.averageProgress}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Unread Messages
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.unreadMessages}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Alerts
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.alertsCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ParentChildren />
        <ParentProgress />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ParentCommunication />
        <ParentAlerts />
      </div>
    </div>
  )
}