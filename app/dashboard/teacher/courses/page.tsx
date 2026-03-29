'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { BookOpen, Users, Clock, Star, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react'

export default function TeacherCoursesPage() {
  const { data: session } = useSession()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      subject: 'Mathematics',
      grade: 'Grade 11-12',
      students: 28,
      duration: '45 weeks',
      rating: 4.8,
      status: 'active',
      description: 'Comprehensive course covering calculus, algebra, and geometry',
      lastUpdated: '2024-03-25',
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      subject: 'Physics',
      grade: 'Grade 10-11',
      students: 32,
      duration: '40 weeks',
      rating: 4.6,
      status: 'active',
      description: 'Introduction to mechanics, thermodynamics, and electromagnetism',
      lastUpdated: '2024-03-20',
    },
    {
      id: 3,
      title: 'Chemistry Lab',
      subject: 'Chemistry',
      grade: 'Grade 10',
      students: 24,
      duration: '35 weeks',
      rating: 4.9,
      status: 'active',
      description: 'Hands-on chemistry experiments and theoretical concepts',
      lastUpdated: '2024-03-18',
    },
    {
      id: 4,
      title: 'English Literature',
      subject: 'English',
      grade: 'Grade 9-10',
      students: 30,
      duration: '42 weeks',
      rating: 4.7,
      status: 'draft',
      description: 'Classic and contemporary literature analysis and writing',
      lastUpdated: '2024-03-15',
    },
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || course.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Courses
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage and organize your teaching courses
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Course
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses..."
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
            <option value="all">All Courses</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  course.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}
              >
                {course.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {course.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
              {course.subject} • {course.grade}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
              {course.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  {course.students} students
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {course.rating} rating
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="flex-1 bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                View Details
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
              Last updated: {course.lastUpdated}
            </p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {courses.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Total Courses</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {courses.filter(c => c.status === 'active').length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Active Courses</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {courses.reduce((sum, c) => sum + c.students, 0)}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Total Students</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            4.8
          </div>
          <p className="text-slate-600 dark:text-slate-400">Avg Rating</p>
        </div>
      </div>
    </div>
  )
}