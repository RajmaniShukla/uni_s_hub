'use client'

import { Star, Award, Users, BookOpen } from 'lucide-react'

const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    expertise: 'Mathematics & Physics',
    experience: '12 yrs',
    boards: ['IGCSE', 'IB HL', 'SAT'],
    subjects: ['Pure Maths', 'Mechanics', 'Statistics'],
    students: 1250,
    rating: 4.9,
    reviews: 342,
    bio: 'PhD in Applied Mathematics. Specialises in breaking down complex IGCSE & IB concepts into simple, exam-ready techniques.',
    avatar: '👩‍🏫',
    badge: 'IGCSE & IB Specialist',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    expertise: 'Chemistry & Physics',
    experience: '15 yrs',
    boards: ['IB', 'IGCSE', 'JEE', 'NEET'],
    subjects: ['Organic Chem', 'Physical Chem', 'Inorganic'],
    students: 980,
    rating: 4.8,
    reviews: 287,
    bio: 'MIT graduate. Trained hundreds of students for IB Chemistry HL 7s and JEE Advanced qualifiers.',
    avatar: '👨‍🏫',
    badge: 'IB & JEE Expert',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  },
  {
    id: 3,
    name: 'Emily Davis',
    expertise: 'English & Languages',
    experience: '10 yrs',
    boards: ['IGCSE', 'IB', 'CBSE', 'ICSE'],
    subjects: ['English Lit', 'Language A/B', 'Essay Writing'],
    students: 1510,
    rating: 4.9,
    reviews: 428,
    bio: 'Native English speaker. Specialises in IGCSE & IB Language and Literature — consistently produces A* students.',
    avatar: '👩‍🏫',
    badge: 'English A* Coach',
    badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  },
  {
    id: 4,
    name: 'Arjun Kapoor',
    expertise: 'Physics & Maths',
    experience: '9 yrs',
    boards: ['JEE', 'NEET', 'CBSE', 'ICSE'],
    subjects: ['Physics', 'Maths', 'Problem Solving'],
    students: 860,
    rating: 4.8,
    reviews: 215,
    bio: 'IIT Bombay alumnus. Trained 200+ JEE qualifiers. Known for his structured problem-solving approach.',
    avatar: '👨‍🏫',
    badge: 'JEE Mentor',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  },
  {
    id: 5,
    name: 'Dr. Priya Sharma',
    expertise: 'Biology & Chemistry',
    experience: '14 yrs',
    boards: ['NEET', 'IGCSE', 'IB', 'CBSE'],
    subjects: ['Biology', 'Genetics', 'Human Physiology'],
    students: 890,
    rating: 4.8,
    reviews: 256,
    bio: 'Research scientist turned educator. Produced 50+ NEET qualifiers and multiple IB Biology 7 scorers.',
    avatar: '👩‍🏫',
    badge: 'NEET & IB Bio Expert',
    badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
  },
  {
    id: 6,
    name: 'Neha Mathur',
    expertise: 'Economics & Accounts',
    experience: '8 yrs',
    boards: ['IB', 'IGCSE', 'CBSE', 'ICSE'],
    subjects: ['Economics HL/SL', 'Business Mgmt', 'Accounts'],
    students: 720,
    rating: 4.7,
    reviews: 195,
    bio: 'MBA + former Deloitte analyst. Teaches IB Economics with real-world case studies that resonate with examiners.',
    avatar: '👩‍🏫',
    badge: 'IB Economics Specialist',
    badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
  },
]

export default function TeacherProfiles() {
  return (
    <section id="teachers" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Meet Our Expert Tutors
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Board-specialist tutors — verified, experienced, and results-driven
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 group flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 p-6 text-white text-center">
                <div className="text-5xl mb-3">{teacher.avatar}</div>
                <h3 className="text-xl font-bold mb-0.5">{teacher.name}</h3>
                <p className="text-primary-100 text-sm mb-3">{teacher.expertise}</p>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${teacher.badgeColor}`}>
                  <Award className="w-3 h-3 inline mr-1" />
                  {teacher.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 italic flex-grow">
                  "{teacher.bio}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 font-bold">{teacher.experience}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 font-bold">{(teacher.students / 1000).toFixed(1)}K</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">{teacher.rating}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rating</p>
                  </div>
                </div>

                {/* Boards */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Boards
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.boards.map((b, i) => (
                      <span key={i} className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded text-xs font-bold">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Subjects
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.subjects.map((s, i) => (
                      <span key={i} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs">
                        <BookOpen className="w-2.5 h-2.5 inline mr-1" />{s}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4">{teacher.reviews} verified reviews</p>

                <a
                  href="/auth/signup"
                  className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm text-center"
                >
                  Book a Session
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            View All Tutors <Users className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
