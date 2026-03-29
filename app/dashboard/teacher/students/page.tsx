'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Users, Search, Filter, Mail, Phone, Calendar, TrendingUp, AlertTriangle, CheckCircle, User } from 'lucide-react'

export default function TeacherStudentsPage() {
  const { data: session } = useSession()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      grade: 'Grade 11',
      courses: ['Advanced Mathematics', 'Physics Fundamentals'],
      attendance: 95,
      averageGrade: 88,
      status: 'active',
      lastActive: '2024-03-28',
      alerts: 0,
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      grade: 'Grade 10',
      courses: ['Chemistry Lab', 'Physics Fundamentals'],
      attendance: 92,
      averageGrade: 85,
      status: 'active',
      lastActive: '2024-03-27',
      alerts: 1,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@email.com',
      grade: 'Grade 11',
      courses: ['Advanced Mathematics', 'English Literature'],
      attendance: 88,
      averageGrade: 82,
      status: 'at-risk',
      lastActive: '2024-03-25',
      alerts: 2,
    },
    {
      id: 4,
      name: 'Diana Wilson',
      email: 'diana.wilson@email.com',
      grade: 'Grade 10',
      courses: ['Chemistry Lab'],
      attendance: 97,
      averageGrade: 94,
      status: 'excellent',
      lastActive: '2024-03-28',
      alerts: 0,
    },
    {
      id: 5,
      name: 'Ethan Davis',
      email: 'ethan.davis@email.com',
      grade: 'Grade 12',
      courses: ['Advanced Mathematics', 'Physics Fundamentals', 'Chemistry Lab'],
      attendance: 90,
      averageGrade: 89,
      status: 'active',
      lastActive: '2024-03-26',
      alerts: 0,
    },
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.grade.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || student.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'at-risk':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Students
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Monitor student progress and performance
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Message All
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
          </div>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="all">All Students</option>
            <option value="excellent">Excellent</option>
            <option value="active">Active</option>
            <option value="at-risk">At Risk</option>
          </select>
        </div>
      </div>

      {/* Students List */}
      <div className="space-y-4">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {student.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                    {student.alerts > 0 && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 text-xs rounded-full flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {student.alerts} alerts
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {student.email} • {student.grade}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {student.courses.map((course, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 text-xs rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Attendance</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{student.attendance}%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Avg Grade</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{student.averageGrade}%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Courses</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{student.courses.length}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">Last Active</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{student.lastActive}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  View Progress
                </button>
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {students.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Total Students</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {students.filter(s => s.status === 'excellent').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Excellent Performers</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            {students.filter(s => s.status === 'at-risk').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">At Risk</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            92%
          </div>
          <p className="text-slate-600 dark:text-slate-400">Avg Attendance</p>
        </div>
      </div>
    </div>
  )
}