'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { FileText, Users, Calendar, Clock, CheckCircle, AlertCircle, Plus, Search, Filter, Eye, Edit } from 'lucide-react'

export default function TeacherAssignmentsPage() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('active')
  const [searchTerm, setSearchTerm] = useState('')

  const assignments = [
    {
      id: 1,
      title: 'Calculus Integration Problems',
      course: 'Advanced Mathematics',
      dueDate: '2024-04-05',
      submitted: 22,
      totalStudents: 28,
      status: 'active',
      priority: 'high',
      description: 'Solve 10 integration problems covering various techniques',
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics Fundamentals',
      dueDate: '2024-04-03',
      submitted: 18,
      totalStudents: 32,
      status: 'active',
      priority: 'medium',
      description: 'Complete lab report on pendulum experiment with analysis',
    },
    {
      id: 3,
      title: 'Chemistry Reaction Analysis',
      course: 'Chemistry Lab',
      dueDate: '2024-03-28',
      submitted: 24,
      totalStudents: 24,
      status: 'grading',
      priority: 'high',
      description: 'Analyze the reaction between acids and metals',
    },
    {
      id: 4,
      title: 'Literature Essay',
      course: 'English Literature',
      dueDate: '2024-04-10',
      submitted: 15,
      totalStudents: 30,
      status: 'draft',
      priority: 'low',
      description: 'Write a 1000-word essay on Shakespeare\'s themes',
    },
  ]

  const pastAssignments = [
    {
      id: 5,
      title: 'Algebra Quiz',
      course: 'Advanced Mathematics',
      dueDate: '2024-03-15',
      submitted: 26,
      totalStudents: 28,
      status: 'completed',
      averageGrade: 85,
      description: 'Weekly algebra quiz covering quadratic equations',
      priority: 'low',
    },
    {
      id: 6,
      title: 'History Timeline',
      course: 'World History',
      dueDate: '2024-03-10',
      submitted: 29,
      totalStudents: 30,
      status: 'completed',
      averageGrade: 92,
      description: 'Create a timeline of major historical events',
      priority: 'medium',
    },
  ]

  const filteredAssignments = (selectedTab === 'active' ? assignments : pastAssignments)
    .filter(assignment =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Create, manage, and grade student assignments
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Assignment
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex">
          <button
            onClick={() => setSelectedTab('active')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'active'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Active Assignments
          </button>
          <button
            onClick={() => setSelectedTab('past')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'past'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Past Assignments
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {assignment.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      assignment.priority === 'high'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : assignment.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}
                  >
                    {assignment.priority}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      assignment.status === 'active'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : assignment.status === 'grading'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                        : assignment.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  {assignment.course}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {assignment.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Due: {assignment.dueDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {assignment.submitted}/{assignment.totalStudents} submitted
                  </div>
                  {assignment.status === 'completed' && 'averageGrade' in assignment && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Avg Grade: {(assignment as any).averageGrade}%
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
                <span>Submission Progress</span>
                <span>{Math.round((assignment.submitted / assignment.totalStudents) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${(assignment.submitted / assignment.totalStudents) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {assignments.filter(a => a.status === 'active').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Active Assignments</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {assignments.filter(a => a.status === 'grading').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Pending Grading</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {pastAssignments.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Completed This Month</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            87%
          </div>
          <p className="text-slate-600 dark:text-slate-400">Avg Submission Rate</p>
        </div>
      </div>
    </div>
  )
}