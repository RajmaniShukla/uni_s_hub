'use client'

import { useSession } from 'next-auth/react'
import StudentCourses from '@/components/dashboard/StudentCourses'

export default function StudentCoursesPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          My Courses
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Manage and access your enrolled courses
        </p>
      </div>

      <StudentCourses />
    </div>
  )
}