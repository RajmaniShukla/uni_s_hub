'use client'

import Image from 'next/image'
import { Star, Quote, Trophy, Award } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      type: 'student',
      name: 'Aisha Patel',
      role: 'Grade 11 Student',
      course: 'Mathematics - JEE Preparation',
      content:
        'The personalised approach from Dr. Sarah Johnson completely changed how I understand math. My score improved from 65% to 92% in just 3 months!',
      rating: 5,
      avatar: '👧',
      school: 'Delhi Public School',
    },
    {
      id: 2,
      type: 'parent',
      name: 'Rajesh Kumar',
      role: 'Parent',
      children: 'Arjun (Grade 10) & Priya (Grade 8)',
      content:
        'As a parent working abroad, I was worried about my children\'s studies. Universal Study Hub connected them with amazing teachers. I see remarkable improvement in their grades and confidence!',
      rating: 5,
      avatar: '👨',
      location: 'Dubai, UAE',
    },
    {
      id: 3,
      type: 'student',
      name: 'Marcus Johnson',
      role: 'High School Student',
      course: 'English Literature & Spanish',
      content:
        'Ms. Emily Davis makes language learning so engaging! I went from struggling with Spanish grammar to actually enjoying the classes. Highly recommended!',
      rating: 4.8,
      avatar: '👦',
      school: 'St. Xavier\'s Academy',
    },
    {
      id: 4,
      type: 'parent',
      name: 'Dr. Meera Sharma',
      role: 'Parent',
      children: 'Isha (Grade 9)',
      content:
        'My daughter was struggling with Chemistry. After 2 months with Prof. Chen, she\'s not only passing but actually interested in pursuing biology! The teachers are world-class.',
      rating: 5,
      avatar: '👩',
      location: 'Bangalore, India',
    },
    {
      id: 5,
      type: 'student',
      name: 'James Chen',
      role: 'Grade 12 Student',
      course: 'Computer Science & Programming',
      content:
        'Robert Martinez teaches coding like no one else. His practical approach made me build 3 real projects. Got selected for Google internship because of skills learned here!',
      rating: 5,
      avatar: '👨‍💻',
      school: 'Tech Academy',
    },
    {
      id: 6,
      type: 'parent',
      name: 'Sofia Rodriguez',
      role: 'Parent',
      children: 'Diego (Grade 7)',
      content:
        'The platform is so user-friendly! I can track Diego\'s progress in real-time. Great communication from teachers. This is the future of education!',
      rating: 4.9,
      avatar: '👩',
      location: 'Mexico City, Mexico',
    },
  ]

  const studentTestimonials = testimonials.filter((t) => t.type === 'student')
  const parentTestimonials = testimonials.filter((t) => t.type === 'parent')

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 dark:border-slate-700 flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(testimonial.rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-slate-300 dark:text-slate-600'
            }`}
          />
        ))}
        <span className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {testimonial.rating}
        </span>
      </div>

      {/* Quote */}
      <Quote className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3 opacity-50" />

      {/* Content */}
      <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-grow italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{testimonial.avatar}</div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-0.5">
              {testimonial.type === 'student'
                ? testimonial.course
                : `Parent of ${testimonial.children}`}
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
              {testimonial.type === 'student'
                ? testimonial.school
                : testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const topPerformers = [
    {
      name: 'Udaiivir Singh Aulakh',
      grade: 'A*',
      photo: '/students/udaiivir.png',
      subject: 'Cambridge IGCSE',
      description: 'Achieved top grade with consistent dedication and expert mentorship.',
    },
    {
      name: 'Aaryan Gupta',
      grade: 'A*',
      photo: '/students/aaryan.png',
      subject: 'Cambridge IGCSE',
      description: 'Outstanding performance driven by personalised learning and hard work.',
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Join thousands of students and parents transforming their academic journey
          </p>
        </div>

        {/* Top Performers */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
            <Trophy className="w-7 h-7 text-yellow-500" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Our Best Performers
            </h3>
            <Trophy className="w-7 h-7 text-yellow-500" />
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch max-w-3xl mx-auto">
            {topPerformers.map((performer, idx) => (
              <div
                key={idx}
                className="flex-1 relative bg-gradient-to-br from-yellow-50 via-white to-primary-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 rounded-2xl shadow-xl border-2 border-yellow-300 dark:border-yellow-500/40 p-6 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gold badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Top Result
                </div>

                {/* Photo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-yellow-400 ring-offset-4 ring-offset-white dark:ring-offset-slate-800 shadow-lg mb-4 mt-3">
                  <Image
                    src={performer.photo}
                    alt={performer.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Grade badge */}
                <div className="bg-green-600 text-white text-xl font-extrabold px-5 py-1 rounded-lg mb-3 tracking-wide shadow">
                  {performer.grade}
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {performer.name}
                </h4>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {performer.subject}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {performer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Students Testimonials */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            📚 What Students Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Parents Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">
            👨‍👩‍👧‍👦 What Parents Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              98%
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Student Satisfaction Rate
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              Based on 5,000+ reviews
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              47%
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Average Grade Improvement
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              Within first semester
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border border-slate-100 dark:border-slate-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              12K+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Lives Transformed
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
              Students & families
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}