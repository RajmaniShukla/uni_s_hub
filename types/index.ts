export interface User {
  _id: string
  name: string
  email: string
  password: string
  role: 'student' | 'teacher' | 'parent'
  avatar?: string
  createdAt: Date
  updatedAt: Date
  // Student specific
  enrolledCourses?: string[]
  progress?: { courseId: string; completedLessons: string[]; score: number }[]
  badges?: string[]
  // Teacher specific
  courses?: string[]
  qualifications?: string[]
  experience?: number
  subjects?: string[]
  // Parent specific
  children?: string[] // student IDs
}

export interface Course {
  _id: string
  title: string
  description: string
  subject: string
  grade: string
  teacher: string // teacher ID
  students: string[] // student IDs
  lessons: Lesson[]
  assignments: Assignment[]
  createdAt: Date
  updatedAt: Date
}

export interface Lesson {
  _id: string
  title: string
  description: string
  videoUrl?: string
  materials: string[] // file URLs
  quiz?: Quiz
}

export interface Quiz {
  questions: Question[]
}

export interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

export interface Assignment {
  _id: string
  title: string
  description: string
  dueDate: Date
  submissions: Submission[]
}

export interface Submission {
  studentId: string
  content: string
  grade?: number
  feedback?: string
}

export interface Notification {
  _id: string
  userId: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
}