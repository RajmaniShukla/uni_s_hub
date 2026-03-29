'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Users, BookOpen, FileText, BarChart3, Video, MessageSquare, Upload, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function TeacherDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    pendingAssignments: 0,
    averageRating: 0,
  })

  useEffect(() => {
    // Fetch teacher stats
    setStats({
      totalCourses: 4,
      totalStudents: 45,
      pendingAssignments: 12,
      averageRating: 4.7,
    })
  }, [])

  const quickActions = [
    {
      title: 'My Courses',
      description: 'Manage your courses and curriculum',
      icon: BookOpen,
      href: '/dashboard/teacher/courses',
      color: 'bg-blue-500',
    },
    {
      title: 'Content Library',
      description: 'Upload and manage learning materials',
      icon: Upload,
      href: '/dashboard/teacher/content',
      color: 'bg-green-500',
    },
    {
      title: 'Assignments',
      description: 'Create and grade assignments',
      icon: FileText,
      href: '/dashboard/teacher/assignments',
      color: 'bg-purple-500',
    },
    {
      title: 'Live Classes',
      description: 'Schedule and conduct live sessions',
      icon: Video,
      href: '/dashboard/teacher/classes',
      color: 'bg-red-500',
    },
    {
      title: 'Students',
      description: 'Track student progress and performance',
      icon: Users,
      href: '/dashboard/teacher/students',
      color: 'bg-indigo-500',
    },
    {
      title: 'Communication',
      description: 'Send announcements and messages',
      icon: MessageSquare,
      href: '/dashboard/teacher/communication',
      color: 'bg-yellow-500',
    },
    {
      title: 'Analytics',
      description: 'View performance reports and insights',
      icon: BarChart3,
      href: '/dashboard/teacher/analytics',
      color: 'bg-pink-500',
    },
    {
      title: 'Schedule',
      description: 'Manage your teaching schedule',
      icon: Calendar,
      href: '/dashboard/teacher/schedule',
      color: 'bg-teal-500',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Here's an overview of your teaching dashboard
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Courses
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.totalCourses}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Students
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.totalStudents}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Pending Assignments
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.pendingAssignments}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Average Rating
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.averageRating}/5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors cursor-pointer group">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white font-medium">
                New assignment submitted by John Doe
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Mathematics • 2 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
              <Video className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white font-medium">
                Live class completed: Advanced Calculus
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                25 students attended • 1 day ago
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white font-medium">
                New message from parent: Sarah Johnson
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Regarding student progress • 3 hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}