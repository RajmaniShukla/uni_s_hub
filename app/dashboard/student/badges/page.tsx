'use client'

import { useSession } from 'next-auth/react'
import StudentBadges from '@/components/dashboard/StudentBadges'

export default function StudentBadgesPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          My Badges
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          View your achievements and earned badges
        </p>
      </div>

      <StudentBadges />
    </div>
  )
}