'use client'

import { useSession } from 'next-auth/react'
import StudentAssignments from '@/components/dashboard/StudentAssignments'

export default function StudentAssignmentsPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          My Assignments
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          View and submit your assignments
        </p>
      </div>

      <StudentAssignments />
    </div>
  )
}