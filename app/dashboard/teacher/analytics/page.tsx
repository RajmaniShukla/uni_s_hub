'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { BarChart3, TrendingUp, Users, BookOpen, Calendar, Download, Filter } from 'lucide-react'

export default function TeacherAnalyticsPage() {
  const { data: session } = useSession()
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const analyticsData = {
    overview: {
      totalStudents: 114,
      activeCourses: 4,
      avgAttendance: 92,
      avgGrade: 87,
    },
    coursePerformance: [
      { course: 'Advanced Mathematics', students: 28, avgGrade: 88, attendance: 95 },
      { course: 'Physics Fundamentals', students: 32, avgGrade: 85, attendance: 92 },
      { course: 'Chemistry Lab', students: 24, avgGrade: 90, attendance: 94 },
      { course: 'English Literature', students: 30, avgGrade: 86, attendance: 89 },
    ],
    monthlyTrends: [
      { month: 'Jan', attendance: 90, grades: 85, engagement: 88 },
      { month: 'Feb', attendance: 92, grades: 86, engagement: 90 },
      { month: 'Mar', attendance: 94, grades: 87, engagement: 92 },
      { month: 'Apr', attendance: 93, grades: 88, engagement: 91 },
    ],
    studentDistribution: [
      { range: '90-100%', count: 35, percentage: 31 },
      { range: '80-89%', count: 52, percentage: 46 },
      { range: '70-79%', count: 22, percentage: 19 },
      { range: 'Below 70%', count: 5, percentage: 4 },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            View performance reports and insights for your courses
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-primary-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Students
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {analyticsData.overview.totalStudents}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Active Courses
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {analyticsData.overview.activeCourses}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Avg Attendance
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {analyticsData.overview.avgAttendance}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Avg Grade
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {analyticsData.overview.avgGrade}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Course Performance
        </h2>
        <div className="space-y-4">
          {analyticsData.coursePerformance.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{course.course}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{course.students} students</p>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <p className="text-slate-600 dark:text-slate-400">Attendance</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{course.attendance}%</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-600 dark:text-slate-400">Avg Grade</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{course.avgGrade}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Monthly Trends
          </h2>
          <div className="space-y-4">
            {analyticsData.monthlyTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-slate-900 dark:text-white font-medium">{trend.month}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-blue-600">A: {trend.attendance}%</span>
                  <span className="text-green-600">G: {trend.grades}%</span>
                  <span className="text-purple-600">E: {trend.engagement}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Grade Distribution
          </h2>
          <div className="space-y-4">
            {analyticsData.studentDistribution.map((range, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-slate-900 dark:text-white">{range.range}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${range.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 w-12">
                    {range.count} ({range.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Key Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-800 dark:text-green-200">Positive Trend</h3>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300">
              Student attendance has improved by 4% this month compared to last month.
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">Top Performer</h3>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Chemistry Lab has the highest average grade at 90% this quarter.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Attention Needed</h3>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              5 students have grades below 70%. Consider additional support.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">Engagement High</h3>
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Student engagement has reached 92%, highest in 6 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}