'use client'

import { useState } from 'react'
import { MessageSquare, Send, User, Clock } from 'lucide-react'

export default function StudentMessages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(0)
  const [newMessage, setNewMessage] = useState('')

  const conversations = [
    {
      id: 0,
      teacher: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      lastMessage: 'Great progress on your calculus homework!',
      time: '2 hours ago',
      unread: true,
      messages: [
        { sender: 'teacher', content: 'Hello John! How are you finding the calculus material?', time: 'Yesterday' },
        { sender: 'student', content: 'Hi Dr. Johnson! It\'s challenging but I\'m getting the hang of it.', time: 'Yesterday' },
        { sender: 'teacher', content: 'That\'s great to hear! Keep practicing the derivatives.', time: '2 hours ago' },
        { sender: 'teacher', content: 'Great progress on your calculus homework!', time: '2 hours ago' },
      ]
    },
    {
      id: 1,
      teacher: 'Prof. Michael Chen',
      subject: 'Chemistry',
      lastMessage: 'Don\'t forget about tomorrow\'s lab session.',
      time: '1 day ago',
      unread: false,
      messages: [
        { sender: 'teacher', content: 'Remember to review the periodic table before tomorrow\'s class.', time: '1 day ago' },
        { sender: 'student', content: 'I\'ll make sure to review it tonight.', time: '1 day ago' },
        { sender: 'teacher', content: 'Don\'t forget about tomorrow\'s lab session.', time: '1 day ago' },
      ]
    },
    {
      id: 2,
      teacher: 'Emily Davis',
      subject: 'English Literature',
      lastMessage: 'Your essay analysis was excellent!',
      time: '3 days ago',
      unread: false,
      messages: [
        { sender: 'teacher', content: 'Your essay analysis was excellent! You really captured the themes well.', time: '3 days ago' },
        { sender: 'student', content: 'Thank you! I spent a lot of time analyzing the symbolism.', time: '3 days ago' },
      ]
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation !== null) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Conversations List */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Messages
            </h3>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                  selectedConversation === conversation.id ? 'bg-primary-50 dark:bg-primary-900/20 border-r-2 border-primary-600' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {conversation.teacher}
                      </h4>
                      {conversation.unread && (
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {conversation.subject}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {conversation.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-2">
        {selectedConversation !== null ? (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {conversations[selectedConversation].teacher}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {conversations[selectedConversation].subject}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {conversations[selectedConversation].messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'student'
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'student'
                        ? 'text-primary-100'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-slate-400 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 h-[600px] flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                Select a conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose a teacher from the list to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}