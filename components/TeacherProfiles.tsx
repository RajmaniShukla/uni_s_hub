'use client'

import { Star, BookOpen, Award, Users } from 'lucide-react'

export default function TeacherProfiles() {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'Mathematics & Physics',
      experience: '12 years',
      subjects: ['Algebra', 'Calculus', 'Mechanics'],
      students: 1250,
      rating: 4.9,
      reviews: 342,
      bio: 'PhD in Applied Mathematics, specialized in making complex concepts simple.',
      avatar: '👩‍🏫',
      specialization: 'Competitive Exams Preparation',
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      expertise: 'Science & Chemistry',
      experience: '15 years',
      subjects: ['Organic Chemistry', 'Physics', 'Lab Techniques'],
      students: 980,
      rating: 4.8,
      reviews: 287,
      bio: 'MIT graduate with extensive research experience in chemistry.',
      avatar: '👨‍🏫',
      specialization: 'Research-Based Learning',
    },
    {
      id: 3,
      name: 'Emily Davis',
      expertise: 'English Literature & Languages',
      experience: '10 years',
      subjects: ['English', 'Spanish', 'French'],
      students: 1510,
      rating: 4.9,
      reviews: 428,
      bio: 'Native speaker with passion for interactive language learning.',
      avatar: '👩‍🏫',
      specialization: 'Language Immersion',
    },
    {
      id: 4,
      name: 'James Wilson',
      expertise: 'Economics & Social Studies',
      experience: '8 years',
      subjects: ['Economics', 'History', 'Civics'],
      students: 720,
      rating: 4.7,
      reviews: 195,
      bio: 'Economics expert making real-world concepts engaging and relevant.',
      avatar: '👨‍🏫',
      specialization: 'Real-World Applications',
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      expertise: 'Biology & Environmental Science',
      experience: '14 years',
      subjects: ['Biology', 'Genetics', 'Ecology'],
      students: 890,
      rating: 4.8,
      reviews: 256,
      bio: 'Research scientist committed to interactive biology education.',
      avatar: '👩‍🏫',
      specialization: 'STEM Excellence',
    },
    {
      id: 6,
      name: 'Robert Martinez',
      expertise: 'Computer Science & coding',
      experience: '11 years',
      subjects: ['Programming', 'Web Dev', 'Algorithms'],
      students: 1100,
      rating: 4.9,
      reviews: 380,
      bio: 'Full-stack developer teaching practical coding skills.',
      avatar: '👨‍💻',
      specialization: 'Tech Innovation',
    },
  ]

  return (
    <section id="teachers" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Meet Our Expert Teachers
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Learn from experienced educators passionate about student success
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 group"
            >
              {/* Header with Avatar */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 p-8 text-white text-center">
                <div className="text-6xl mb-3">{teacher.avatar}</div>
                <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                <p className="text-primary-100 font-semibold text-sm mb-2">
                  {teacher.expertise}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full w-fit mx-auto">
                  <Award className="w-4 h-4" />
                  {teacher.specialization}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 italic">
                  "{teacher.bio}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {teacher.experience}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {(teacher.students / 1000).toFixed(1)}K
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Students
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-primary-600 dark:text-primary-400 font-bold">
                        {teacher.rating}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Rating
                    </p>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    SUBJECTS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review Count */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {teacher.reviews} verified reviews
                </p>

                {/* CTA Button */}
                <a
                  href="/auth/signup"
                  className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm"
                >
                  Learn with {teacher.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Teachers
            <Users className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}