'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Upload, FileText, Video, Image, File, Plus, Search, Filter } from 'lucide-react'

export default function TeacherContentPage() {
  const { data: session } = useSession()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const contentItems = [
    {
      id: 1,
      title: 'Calculus Introduction Video',
      type: 'video',
      course: 'Mathematics',
      size: '45 MB',
      uploadDate: '2024-03-15',
      status: 'published',
    },
    {
      id: 2,
      title: 'Organic Chemistry Notes',
      type: 'document',
      course: 'Chemistry',
      size: '2.3 MB',
      uploadDate: '2024-03-14',
      status: 'published',
    },
    {
      id: 3,
      title: 'Physics Lab Images',
      type: 'image',
      course: 'Physics',
      size: '15 MB',
      uploadDate: '2024-03-13',
      status: 'draft',
    },
    {
      id: 4,
      title: 'English Literature Audio',
      type: 'audio',
      course: 'English',
      size: '28 MB',
      uploadDate: '2024-03-12',
      status: 'published',
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-5 h-5 text-red-500" />
      case 'document': return <FileText className="w-5 h-5 text-blue-500" />
      case 'image': return <Image className="w-5 h-5 text-green-500" />
      case 'audio': return <File className="w-5 h-5 text-purple-500" />
      default: return <File className="w-5 h-5 text-gray-500" />
    }
  }

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.course.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Content Library
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your course materials, videos, and resources
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Upload Content
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white"
            >
              <option value="all">All Types</option>
              <option value="video">Videos</option>
              <option value="document">Documents</option>
              <option value="image">Images</option>
              <option value="audio">Audio</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {getTypeIcon(item.type)}
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.course}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.status === 'published'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {item.status}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>{item.size}</span>
              <span>{item.uploadDate}</span>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded text-sm">
                View
              </button>
              <button className="flex-1 bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 rounded text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Section */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 border-dashed">
        <div className="text-center">
          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
            Upload New Content
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Drag and drop files here or click to browse
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>Supported: MP4, PDF, DOC, JPG, PNG, MP3</span>
            <span>Max size: 100MB</span>
          </div>
        </div>
      </div>
    </div>
  )
}