'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { MessageSquare, Users, Bell, Send, Plus, Search, Filter } from 'lucide-react'

export default function TeacherCommunicationPage() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('announcements')
  const [newAnnouncement, setNewAnnouncement] = useState('')
  const [selectedRecipients, setSelectedRecipients] = useState('all')

  const announcements = [
    {
      id: 1,
      title: 'Mid-term Exam Schedule',
      message: 'The mid-term examinations will begin on April 15th. Please check the detailed schedule in your student portal.',
      date: '2024-03-28',
      recipients: 'All Students',
      priority: 'high',
      readBy: 245,
      totalRecipients: 250,
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      message: 'PTM scheduled for April 10th, 2024. Parents are requested to confirm their attendance.',
      date: '2024-03-25',
      recipients: 'All Parents',
      priority: 'medium',
      readBy: 180,
      totalRecipients: 200,
    },
    {
      id: 3,
      title: 'Assignment Deadline Extension',
      message: 'Due to technical issues, the deadline for Math assignment has been extended to March 31st.',
      date: '2024-03-20',
      recipients: 'Grade 10 Students',
      priority: 'low',
      readBy: 45,
      totalRecipients: 50,
    },
  ]

  const messages = [
    {
      id: 1,
      from: 'Sarah Johnson',
      role: 'Parent',
      subject: 'Concern about Math grades',
      message: 'I wanted to discuss my daughter\'s recent performance in Mathematics...',
      date: '2024-03-29',
      unread: true,
    },
    {
      id: 2,
      from: 'Mike Chen',
      role: 'Student',
      subject: 'Question about assignment',
      message: 'I\'m having trouble understanding the calculus problem in question 5...',
      date: '2024-03-28',
      unread: false,
    },
    {
      id: 3,
      from: 'Principal Office',
      role: 'Admin',
      subject: 'Staff Meeting Reminder',
      message: 'This is a reminder about the staff meeting scheduled for tomorrow...',
      date: '2024-03-27',
      unread: false,
    },
  ]

  const handleSendAnnouncement = () => {
    if (newAnnouncement.trim()) {
      // Handle sending announcement
      console.log('Sending announcement:', newAnnouncement, 'to:', selectedRecipients)
      setNewAnnouncement('')
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
            Send announcements and manage communications with students and parents
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Message
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex">
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
        </div>
      </div>

      {selectedTab === 'announcements' ? (
        <div className="space-y-6">
          {/* New Announcement */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Send New Announcement
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Recipients
                </label>
                <select
                  value={selectedRecipients}
                  onChange={(e) => setSelectedRecipients(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="all">All Students & Parents</option>
                  <option value="students">All Students</option>
                  <option value="parents">All Parents</option>
                  <option value="grade10">Grade 10 Students</option>
                  <option value="grade11">Grade 11 Students</option>
                  <option value="grade12">Grade 12 Students</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  value={newAnnouncement}
                  onChange={(e) => setNewAnnouncement(e.target.value)}
                  placeholder="Type your announcement here..."
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSendAnnouncement}
                  disabled={!newAnnouncement.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Announcement
                </button>
              </div>
            </div>
          </div>

          {/* Announcement History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Recent Announcements
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
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                      <span>{announcement.date}</span>
                      <span>•</span>
                      <span>{announcement.recipients}</span>
                      <span>•</span>
                      <span>{announcement.readBy}/{announcement.totalRecipients} read</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                      Edit
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Search and Filter */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
              <select className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                <option>All Messages</option>
                <option>Unread</option>
                <option>From Students</option>
                <option>From Parents</option>
                <option>From Admin</option>
              </select>
            </div>
          </div>

          {/* Messages List */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors ${
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
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {message.message}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span>From: {message.from} ({message.role})</span>
                    <span>•</span>
                    <span>{message.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
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
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            12
          </div>
          <p className="text-slate-600 dark:text-slate-400">Announcements Sent</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            95%
          </div>
          <p className="text-slate-600 dark:text-slate-400">Read Rate</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            8
          </div>
          <p className="text-slate-600 dark:text-slate-400">Unread Messages</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            24
          </div>
          <p className="text-slate-600 dark:text-slate-400">Active Conversations</p>
        </div>
      </div>
    </div>
  )
}