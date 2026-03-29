'use client'

import { useSession } from 'next-auth/react'
import StudentMessages from '@/components/dashboard/StudentMessages'

export default function StudentMessagesPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Messages
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Communicate with your teachers and stay updated
        </p>
      </div>

      <StudentMessages />
    </div>
  )
}