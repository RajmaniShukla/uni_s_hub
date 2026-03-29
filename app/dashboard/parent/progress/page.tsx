'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Award, Target, BookOpen } from 'lucide-react'

export default function ParentProgressPage() {
  const { data: session } = useSession()
  const [selectedChild, setSelectedChild] = useState('alice')
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const children = [
    { id: 'alice', name: 'Alice Johnson', grade: 'Grade 11' },
    { id: 'bob', name: 'Bob Johnson', grade: 'Grade 8' },
  ]

  const progressData = {
    alice: {
      overall: {
        current: 88,
        previous: 85,
        trend: 'up',
        attendance: 95,
      },
      subjects: [
        {
          name: 'Mathematics',
          current: 92,
          previous: 89,
          trend: 'up',
          assignments: 15,
          completed: 15,
          average: 91,
        },
        {
          name: 'Physics',
          current: 85,
          previous: 87,
          trend: 'down',
          assignments: 12,
          completed: 11,
          average: 84,
        },
        {
          name: 'Chemistry',
          current: 90,
          previous: 88,
          trend: 'up',
          assignments: 10,
          completed: 10,
          average: 89,
        },
        {
          name: 'English',
          current: 86,
          previous: 88,
          trend: 'down',
          assignments: 8,
          completed: 7,
          average: 85,
        },
      ],
      monthlyProgress: [
        { month: 'Sep', grade: 82 },
        { month: 'Oct', grade: 84 },
        { month: 'Nov', grade: 86 },
        { month: 'Dec', grade: 85 },
        { month: 'Jan', grade: 87 },
        { month: 'Feb', grade: 88 },
        { month: 'Mar', grade: 88 },
      ],
      achievements: [
        { title: 'Math Excellence', description: 'Scored 95%+ in 3 consecutive tests', date: '2024-03-15' },
        { title: 'Perfect Attendance', description: 'No absences for 2 months', date: '2024-03-01' },
        { title: 'Science Fair Winner', description: 'First place in school science fair', date: '2024-02-20' },
      ],
      goals: [
        { subject: 'Physics', target: 90, current: 85, deadline: '2024-04-30' },
        { subject: 'English', target: 90, current: 86, deadline: '2024-05-15' },
      ],
    },
    bob: {
      overall: {
        current: 82,
        previous: 80,
        trend: 'up',
        attendance: 88,
      },
      subjects: [
        {
          name: 'Mathematics',
          current: 85,
          previous: 82,
          trend: 'up',
          assignments: 12,
          completed: 11,
          average: 83,
        },
        {
          name: 'Science',
          current: 80,
          previous: 78,
          trend: 'up',
          assignments: 10,
          completed: 9,
          average: 79,
        },
        {
          name: 'English',
          current: 84,
          previous: 86,
          trend: 'down',
          assignments: 8,
          completed: 8,
          average: 84,
        },
        {
          name: 'History',
          current: 79,
          previous: 81,
          trend: 'down',
          assignments: 6,
          completed: 5,
          average: 78,
        },
      ],
      monthlyProgress: [
        { month: 'Sep', grade: 78 },
        { month: 'Oct', grade: 79 },
        { month: 'Nov', grade: 80 },
        { month: 'Dec', grade: 79 },
        { month: 'Jan', grade: 81 },
        { month: 'Feb', grade: 82 },
        { month: 'Mar', grade: 82 },
      ],
      achievements: [
        { title: 'Reading Champion', description: 'Read 20 books this quarter', date: '2024-03-10' },
        { title: 'Good Citizen', description: 'Student of the month', date: '2024-02-15' },
      ],
      goals: [
        { subject: 'History', target: 85, current: 79, deadline: '2024-04-30' },
        { subject: 'Science', target: 85, current: 80, deadline: '2024-05-15' },
      ],
    },
  }

  const selectedData = progressData[selectedChild as keyof typeof progressData]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Academic Progress
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Track your children's academic performance and growth
          </p>
        </div>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
        >
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Child Selector */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex gap-4">
          {children.map((child) => (
            <button
              key={child.id}
              onClick={() => setSelectedChild(child.id)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedChild === child.id
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
              }`}
            >
              {child.name} ({child.grade})
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Overall Grade</h3>
            <div className={`flex items-center gap-1 ${
              selectedData.overall.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {selectedData.overall.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {selectedData.overall.current}%
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Previous: {selectedData.overall.previous}% ({selectedData.overall.trend === 'up' ? '+' : ''}
            {selectedData.overall.current - selectedData.overall.previous}%)
          </p>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-3">
            <div
              className="bg-primary-600 h-2 rounded-full"
              style={{ width: `${selectedData.overall.current}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Attendance</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {selectedData.overall.attendance}%
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            This {selectedPeriod}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Assignments</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {selectedData.subjects.reduce((sum, subj) => sum + subj.completed, 0)}/
            {selectedData.subjects.reduce((sum, subj) => sum + subj.assignments, 0)}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Completed this {selectedPeriod}
          </p>
        </div>
      </div>

      {/* Subject Progress */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Subject Performance
        </h3>
        <div className="space-y-4">
          {selectedData.subjects.map((subject, index) => (
            <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900 dark:text-white">{subject.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {subject.current}%
                  </span>
                  <div className={`flex items-center gap-1 ${
                    subject.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {subject.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm">
                      {subject.trend === 'up' ? '+' : ''}
                      {subject.current - subject.previous}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                <span>Assignments: {subject.completed}/{subject.assignments}</span>
                <span>Average: {subject.average}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${subject.current}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Chart & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Progress Chart */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Monthly Progress
          </h3>
          <div className="flex items-end justify-between h-32">
            {selectedData.monthlyProgress.map((month, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-primary-600 w-full max-w-8 rounded-t mb-2"
                  style={{ height: `${(month.grade / 100) * 100}%` }}
                ></div>
                <span className="text-xs text-slate-600 dark:text-slate-400">{month.month}</span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">{month.grade}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Academic Goals
          </h3>
          <div className="space-y-4">
            {selectedData.goals.map((goal, index) => (
              <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{goal.subject}</h4>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Target: {goal.target}%
                  </span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <span>Current: {goal.current}%</span>
                  <span>Deadline: {goal.deadline}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedData.achievements.map((achievement, index) => (
            <div key={index} className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                  {achievement.title}
                </h4>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                {achievement.description}
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">
                {achievement.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}