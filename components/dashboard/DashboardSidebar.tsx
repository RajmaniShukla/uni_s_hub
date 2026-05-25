'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import {
  Home,
  BookOpen,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Trophy,
  Bell,
  Video,
} from 'lucide-react'

const studentMenuItems = [
  { name: 'Dashboard', href: '/dashboard/student', icon: Home },
  { name: 'My Courses', href: '/dashboard/student/courses', icon: BookOpen },
  { name: 'Progress', href: '/dashboard/student/progress', icon: BarChart3 },
  { name: 'Assignments', href: '/dashboard/student/assignments', icon: FileText },
  { name: 'Badges', href: '/dashboard/student/badges', icon: Trophy },
  { name: 'Messages', href: '/dashboard/student/messages', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/student/settings', icon: Settings },
]

const teacherMenuItems = [
  { name: 'Dashboard', href: '/dashboard/teacher', icon: Home },
  { name: 'My Courses', href: '/dashboard/teacher/courses', icon: BookOpen },
  { name: 'Content Library', href: '/dashboard/teacher/content', icon: FileText },
  { name: 'Assignments', href: '/dashboard/teacher/assignments', icon: Users },
  { name: 'Students', href: '/dashboard/teacher/students', icon: Users },
  { name: 'Live Classes', href: '/dashboard/teacher/classes', icon: Video },
  { name: 'Communication', href: '/dashboard/teacher/communication', icon: MessageSquare },
  { name: 'Analytics', href: '/dashboard/teacher/analytics', icon: BarChart3 },
]

const parentMenuItems = [
  { name: 'Dashboard', href: '/dashboard/parent', icon: Home },
  { name: 'Children', href: '/dashboard/parent/children', icon: User },
  { name: 'Progress', href: '/dashboard/parent/progress', icon: BarChart3 },
  { name: 'Communication', href: '/dashboard/parent/communication', icon: MessageSquare },
  { name: 'Alerts', href: '/dashboard/parent/alerts', icon: Bell },
]

export default function DashboardSidebar({ onClose }: { onClose?: () => void } = {}) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const getMenuItems = () => {
    switch (session?.user?.role) {
      case 'student':
        return studentMenuItems
      case 'teacher':
        return teacherMenuItems
      case 'parent':
        return parentMenuItems
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  return (
    <div className="w-72 lg:w-64 h-full min-h-screen bg-white dark:bg-slate-800 shadow-sm border-r border-slate-200 dark:border-slate-700 flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="Universal Study Hub"
            width={36}
            height={36}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Universal Study Hub</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">Learn Without Limits</span>
          </div>
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (pathname === '/dashboard/student' && item.name === 'Dashboard')

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard/settings"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === '/dashboard/settings'
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex items-center w-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}