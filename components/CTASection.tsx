import { ArrowRight, MessageSquare, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-primary-100 dark:text-primary-200 max-w-2xl mx-auto">
            Join thousands of students and parents who are already experiencing quality education 
            with personalized support from verified tutors worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="/auth/signup"
              className="w-full sm:w-auto group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/919876541177?text=Hi%21%20I%20have%20a%20query%20about%20Universal%20Study%20Hub."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Raise a Query Now
            </a>

            <a
              href="tel:+919876541177"
              className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <p className="mt-6 text-primary-200 text-sm">
            📍 SCO 43, Sector 20C, Chandigarh &nbsp;|&nbsp; 📞 +91 98765 41177
          </p>
        </div>
      </div>
    </section>
  )
}
