'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { BookOpen, Trophy, Clock, TrendingUp, Users, Star, Award, MessageSquare, Settings } from 'lucide-react'
import Link from 'next/link'

export default function StudentDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({
    enrolledCourses: 0,
    completedLessons: 0,
    averageScore: 0,
    badges: 0,
  })

  useEffect(() => {
    // Fetch student stats
    // This would be an API call in a real app
    setStats({
      enrolledCourses: 3,
      completedLessons: 15,
      averageScore: 85,
      badges: 5,
    })
  }, [])

  const quickActions = [
    {
      title: 'My Courses',
      description: 'View and access your enrolled courses',
      icon: BookOpen,
      href: '/dashboard/student/courses',
      color: 'bg-blue-500',
    },
    {
      title: 'Assignments',
      description: 'Check pending and completed assignments',
      icon: Users,
      href: '/dashboard/student/assignments',
      color: 'bg-green-500',
    },
    {
      title: 'Progress',
      description: 'Track your learning progress',
      icon: TrendingUp,
      href: '/dashboard/student/progress',
      color: 'bg-purple-500',
    },
    {
      title: 'Messages',
      description: 'Communicate with teachers',
      icon: MessageSquare,
      href: '/dashboard/student/messages',
      color: 'bg-orange-500',
    },
    {
      title: 'Badges',
      description: 'View your achievements',
      icon: Award,
      href: '/dashboard/student/badges',
      color: 'bg-yellow-500',
    },
    {
      title: 'Settings',
      description: 'Manage your account preferences',
      icon: Settings,
      href: '/dashboard/student/settings',
      color: 'bg-gray-500',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome back, {session?.user?.name}!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Here's an overview of your learning journey
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Enrolled Courses
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.enrolledCourses}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Completed Lessons
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.completedLessons}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Average Score
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.averageScore}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Award className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Badges Earned
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.badges}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {action.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white">
                Completed "Calculus Basics" lesson
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white">
                Earned "Math Whiz" badge
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                1 day ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white">
                Submitted assignment for "Organic Chemistry"
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                2 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}