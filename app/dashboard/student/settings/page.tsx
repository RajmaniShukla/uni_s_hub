'use client'

import { useSession } from 'next-auth/react'
import StudentSettings from '@/components/dashboard/StudentSettings'

export default function StudentSettingsPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Manage your account preferences and settings
        </p>
      </div>

      <StudentSettings />
    </div>
  )
}