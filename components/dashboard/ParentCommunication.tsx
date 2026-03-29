'use client'

import { MessageSquare, Send, User } from 'lucide-react'

const messages = [
  {
    id: '1',
    teacher: 'Dr. Sarah Johnson',
    subject: 'Mathematics',
    message: 'Emma has been doing excellent work in algebra. Keep up the great effort!',
    time: '2 days ago',
    unread: true,
  },
  {
    id: '2',
    teacher: 'Prof. Michael Chen',
    subject: 'Physics',
    message: 'Liam\'s physics project was outstanding. He showed great understanding of the concepts.',
    time: '1 week ago',
    unread: false,
  },
  {
    id: '3',
    teacher: 'Dr. Emily Davis',
    subject: 'Chemistry',
    message: 'Emma needs to focus more on lab safety procedures. Please discuss this with her.',
    time: '2 weeks ago',
    unread: false,
  },
]

export default function ParentCommunication() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Teacher Communications
        </h3>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <Send className="h-4 w-4 mr-2" />
          New Message
        </button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg border ${
              message.unread
                ? 'border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20'
                : 'border-slate-200 dark:border-slate-600'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {message.teacher}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    {message.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {message.subject}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {message.message}
                </p>
                {message.unread && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-primary-600 text-white rounded-full">
                    New
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}