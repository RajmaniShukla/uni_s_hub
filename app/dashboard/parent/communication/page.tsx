'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { MessageSquare, Send, Mail, Phone, Calendar, User, Search, Filter } from 'lucide-react'

export default function ParentCommunicationPage() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('messages')
  const [newMessage, setNewMessage] = useState('')
  const [selectedRecipient, setSelectedRecipient] = useState('')

  const teachers = [
    { id: 'math-teacher', name: 'Mr. Johnson', subject: 'Mathematics', email: 'johnson@school.edu' },
    { id: 'physics-teacher', name: 'Ms. Davis', subject: 'Physics', email: 'davis@school.edu' },
    { id: 'chemistry-teacher', name: 'Dr. Wilson', subject: 'Chemistry', email: 'wilson@school.edu' },
    { id: 'english-teacher', name: 'Mrs. Brown', subject: 'English', email: 'brown@school.edu' },
  ]

  const messages = [
    {
      id: 1,
      from: 'Mr. Johnson',
      subject: 'Mathematics - Alice\'s Progress',
      message: 'Alice has been doing excellent work in calculus. Her recent test score was 95%. Keep up the good work!',
      date: '2024-03-28',
      type: 'teacher',
      unread: false,
    },
    {
      id: 2,
      from: 'School Administration',
      subject: 'Parent-Teacher Conference Reminder',
      message: 'This is a reminder about the upcoming parent-teacher conference scheduled for April 10th, 2024.',
      date: '2024-03-25',
      type: 'admin',
      unread: true,
    },
    {
      id: 3,
      from: 'Ms. Davis',
      subject: 'Physics Assignment Extension',
      message: 'Due to Alice\'s participation in the science fair, I\'ve extended the deadline for the physics project to April 5th.',
      date: '2024-03-20',
      type: 'teacher',
      unread: false,
    },
    {
      id: 4,
      from: 'Mrs. Brown',
      subject: 'English Literature Discussion',
      message: 'Alice showed great insight during our class discussion on Shakespeare. She\'s developing excellent analytical skills.',
      date: '2024-03-18',
      type: 'teacher',
      unread: false,
    },
  ]

  const announcements = [
    {
      id: 1,
      title: 'Spring Break Schedule',
      message: 'School will be closed from April 15th to April 22nd for spring break. Classes resume on April 23rd.',
      date: '2024-03-15',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Report Cards Available',
      message: 'Mid-term report cards are now available in the parent portal. Please review and sign them by April 5th.',
      date: '2024-03-10',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'School Picnic',
      message: 'Annual school picnic will be held on May 5th at Central Park. All parents are welcome to join.',
      date: '2024-03-08',
      priority: 'low',
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedRecipient) {
      console.log('Sending message:', newMessage, 'to:', selectedRecipient)
      setNewMessage('')
      setSelectedRecipient('')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Communication
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Stay connected with teachers and stay updated on school announcements
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex">
          <button
            onClick={() => setSelectedTab('messages')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'messages'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setSelectedTab('announcements')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'announcements'
                ? 'bg-primary-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Announcements
          </button>
        </div>
      </div>

      {selectedTab === 'messages' ? (
        <div className="space-y-6">
          {/* Send New Message */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Send Message to Teacher
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Select Teacher
                </label>
                <select
                  value={selectedRecipient}
                  onChange={(e) => setSelectedRecipient(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="">Choose a teacher...</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} - {teacher.subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim() || !selectedRecipient}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Recent Messages
            </h3>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 ${
                  message.unread ? 'border-l-4 border-l-primary-500' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {message.subject}
                      </h4>
                      {message.unread && (
                        <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 py-1 text-xs rounded-full">
                          New
                        </span>
                      )}
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          message.type === 'teacher'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}
                      >
                        {message.type}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      From: {message.from}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {message.message}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {message.date}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
                      Reply
                    </button>
                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                      Archive
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            School Announcements
          </h3>
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {announcement.title}
                    </h4>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        announcement.priority === 'high'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          : announcement.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}
                    >
                      {announcement.priority}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {announcement.message}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {announcement.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contact Information */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Teacher Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{teacher.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{teacher.subject}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {messages.filter(m => m.unread).length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Unread Messages</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {messages.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Total Messages</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {announcements.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Announcements</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            {teachers.length}
          </div>
          <p className="text-slate-600 dark:text-slate-400">Teachers</p>
        </div>
      </div>
    </div>
  )
}