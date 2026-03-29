'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { User, Search, TrendingUp, Calendar, Mail, Phone, BookOpen, Award } from 'lucide-react'

export default function ParentChildrenPage() {
  const { data: session } = useSession()
  const [selectedChild, setSelectedChild] = useState('alice')

  const children = [
    {
      id: 'alice',
      name: 'Alice Johnson',
      grade: 'Grade 11',
      age: 16,
      school: 'Lincoln High School',
      avatar: 'A',
      performance: {
        overall: 88,
        attendance: 95,
        subjects: [
          { name: 'Mathematics', grade: 92, trend: 'up' },
          { name: 'Physics', grade: 85, trend: 'stable' },
          { name: 'Chemistry', grade: 90, trend: 'up' },
          { name: 'English', grade: 86, trend: 'down' },
        ],
      },
      recentActivity: [
        { type: 'assignment', title: 'Math Homework Submitted', date: '2024-03-28', status: 'graded' },
        { type: 'test', title: 'Physics Quiz', date: '2024-03-25', score: '85%' },
        { type: 'attendance', title: 'Present', date: '2024-03-28' },
      ],
      upcoming: [
        { type: 'test', title: 'Chemistry Lab Exam', date: '2024-04-02' },
        { type: 'assignment', title: 'English Essay Due', date: '2024-04-05' },
      ],
    },
    {
      id: 'bob',
      name: 'Bob Johnson',
      grade: 'Grade 8',
      age: 13,
      school: 'Lincoln Middle School',
      avatar: 'B',
      performance: {
        overall: 82,
        attendance: 88,
        subjects: [
          { name: 'Mathematics', grade: 85, trend: 'up' },
          { name: 'Science', grade: 80, trend: 'stable' },
          { name: 'English', grade: 84, trend: 'up' },
          { name: 'History', grade: 79, trend: 'down' },
        ],
      },
      recentActivity: [
        { type: 'assignment', title: 'Science Project Completed', date: '2024-03-27', status: 'graded' },
        { type: 'attendance', title: 'Present', date: '2024-03-28' },
      ],
      upcoming: [
        { type: 'test', title: 'Math Mid-term', date: '2024-04-08' },
        { type: 'event', title: 'Parent-Teacher Meeting', date: '2024-04-10' },
      ],
    },
  ]

  const selectedChildData = children.find(child => child.id === selectedChild) || children[0]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Children
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Monitor your children's academic progress and activities
          </p>
        </div>
      </div>

      {/* Child Selector */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex gap-4">
          {children.map((child) => (
            <button
              key={child.id}
              onClick={() => setSelectedChild(child.id)}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                selectedChild === child.id
                  ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-300 dark:border-primary-600'
                  : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
              }`}
            >
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">
                {child.avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white">{child.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{child.grade}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Child Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-2xl font-bold mx-auto mb-4">
              {selectedChildData.avatar}
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {selectedChildData.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {selectedChildData.grade} • Age {selectedChildData.age}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
              {selectedChildData.school}
            </p>
            <div className="flex gap-2 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Message Teacher
              </button>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Performance Overview
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Overall Grade</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedChildData.performance.overall}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Attendance</span>
              <span className="text-lg font-semibold text-green-600">
                {selectedChildData.performance.attendance}%
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${selectedChildData.performance.overall}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Quick Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Subjects</span>
              <span className="font-semibold">{selectedChildData.performance.subjects.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Assignments</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Tests This Month</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Awards</span>
              <span className="font-semibold text-yellow-600">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Subject Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedChildData.performance.subjects.map((subject, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">{subject.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Grade: {subject.grade}%</p>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp
                  className={`w-4 h-4 ${
                    subject.trend === 'up'
                      ? 'text-green-600'
                      : subject.trend === 'down'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                  }`}
                />
                <span className="text-sm font-semibold">{subject.grade}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {selectedChildData.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  {activity.type === 'assignment' && <BookOpen className="w-4 h-4 text-primary-600" />}
                  {activity.type === 'test' && <Award className="w-4 h-4 text-green-600" />}
                  {activity.type === 'attendance' && <Calendar className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{activity.date}</p>
                </div>
                {activity.score && (
                  <span className="text-sm font-semibold text-green-600">{activity.score}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-3">
            {selectedChildData.upcoming.map((event, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  {event.type === 'test' && <Award className="w-4 h-4 text-yellow-600" />}
                  {event.type === 'assignment' && <BookOpen className="w-4 h-4 text-yellow-600" />}
                  {event.type === 'event' && <Calendar className="w-4 h-4 text-yellow-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{event.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}