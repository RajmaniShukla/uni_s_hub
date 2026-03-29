'use client'

import { useSession } from 'next-auth/react'
import StudentProgress from '@/components/dashboard/StudentProgress'

export default function StudentProgressPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          My Progress
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Track your learning progress and achievements
        </p>
      </div>

      <StudentProgress />
    </div>
  )
}