'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const progressData = [
  { subject: 'Math', emma: 85, liam: 92 },
  { subject: 'Science', emma: 88, liam: 90 },
  { subject: 'English', emma: 82, liam: 87 },
  { subject: 'History', emma: 90, liam: 85 },
  { subject: 'Art', emma: 95, liam: 88 },
]

export default function ParentProgress() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Academic Progress
        </h3>
        <select className="text-sm border border-slate-300 dark:border-slate-600 rounded-md px-3 py-1 bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
          <option>This semester</option>
          <option>Last semester</option>
          <option>This year</option>
        </select>
      </div>

      <div className="mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="subject"
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px',
                color: '#f1f5f9',
              }}
            />
            <Bar
              dataKey="emma"
              fill="#2563eb"
              name="Emma"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="liam"
              fill="#16a34a"
              name="Liam"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="w-4 h-4 bg-blue-600 rounded mx-auto mb-2"></div>
          <p className="text-sm font-medium text-slate-900 dark:text-white">Emma</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">Grade 10</p>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-green-600 rounded mx-auto mb-2"></div>
          <p className="text-sm font-medium text-slate-900 dark:text-white">Liam</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">Grade 7</p>
        </div>
      </div>
    </div>
  )
}