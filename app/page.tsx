import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import CoursesOffered from '@/components/CoursesOffered'
import TeacherProfiles from '@/components/TeacherProfiles'
import Testimonials from '@/components/Testimonials'
import SubjectsStandards from '@/components/SubjectsStandards'
import WhyChoose from '@/components/WhyChoose'
import StudentsParents from '@/components/StudentsParents'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <CoursesOffered />
      <TeacherProfiles />
      <Testimonials />
      <SubjectsStandards />
      <WhyChoose />
      <StudentsParents />
      <CTASection />
      <Footer />
    </main>
  )
}

