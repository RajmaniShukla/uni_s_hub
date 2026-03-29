'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Video, Calendar, Clock, Users, Play, Plus, Settings, Monitor } from 'lucide-react'

export default function TeacherClassesPage() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('upcoming')

  const upcomingClasses = [
    {
      id: 1,
      title: 'Advanced Calculus',
      course: 'Mathematics',
      date: '2024-03-30',
      time: '10:00 AM',
      duration: '60 min',
      students: 25,
      status: 'scheduled',
    },
    {
      id: 2,
      title: 'Organic Chemistry Lab',
      course: 'Chemistry',
      date: '2024-03-30',
      time: '2:00 PM',
      duration: '90 min',
      students: 18,
      status: 'scheduled',
    },
  ]

  const pastClasses = [
    {
      id: 3,
      title: 'Physics Fundamentals',
      course: 'Physics',
      date: '2024-03-28',
      time: '11:00 AM',
      duration: '45 min',
      students: 22,
      recording: true,
    },
    {
      id: 4,
      title: 'English Literature',
      course: 'English',
      date: '2024-03-27',
      time: '3:00 PM',
      duration: '60 min',
      students: 20,
      recording: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Live Classes
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Schedule and manage your live interactive classes
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule Class
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex">
          <button
            onClick={() => setSelectedTab('upcoming')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'upcoming'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Upcoming Classes
          </button>
          <button
            onClick={() => setSelectedTab('past')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'past'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Past Classes
          </button>
        </div>
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {selectedTab === 'upcoming' ? (
          upcomingClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                    <Video className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {classItem.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {classItem.course}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {classItem.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {classItem.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {classItem.students}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    Duration: {classItem.duration}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Class
                </button>
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Whiteboard
                </button>
              </div>
            </div>
          ))
        ) : (
          pastClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <Video className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {classItem.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {classItem.course} • {classItem.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {classItem.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {classItem.students}
                    </div>
                  </div>
                  {classItem.recording && (
                    <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 text-xs rounded-full mt-1">
                      Recording Available
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {classItem.recording && (
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Recording
                  </button>
                )}
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  View Attendance
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Download Report
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            12
          </div>
          <p className="text-slate-600 dark:text-slate-400">Classes This Month</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            98%
          </div>
          <p className="text-slate-600 dark:text-slate-400">Average Attendance</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            4.8
          </div>
          <p className="text-slate-600 dark:text-slate-400">Average Rating</p>
        </div>
      </div>
    </div>
  )
}