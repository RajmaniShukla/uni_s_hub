# Universal Study Hub - Full-Stack Learning Management System

A comprehensive online education platform that transforms the static landing page into a complete LMS with authentication, role-based dashboards, and interactive features for Students, Teachers, and Parents.

## 🚀 Features

### Public Website (Before Login)
- **Modern Hero Section** - Clear value proposition with engaging animations
- **Courses Offered** - Categorized courses with details
- **Teacher Profiles** - Photo, expertise, experience, subjects
- **Testimonials** - Student & Parent success stories
- **Call-to-Action Sections** - Enroll Now, Login, Contact
- **Responsive Design** - Mobile-first, student-friendly UI

### 🔐 Authentication System
- **Secure Signup/Login** - JWT-based authentication with NextAuth.js
- **Role-Based Access** - Student, Teacher, Parent roles
- **Password Reset** - Secure password recovery (placeholder)
- **Session Management** - Persistent login sessions

### 🎓 Student Dashboard
- **Personalized Dashboard** - Learning progress overview
- **Enrolled Courses** - View and manage courses
- **Video Lessons** - Interactive video player (placeholder)
- **Online Quizzes** - Instant feedback quizzes
- **Progress Tracking** - Charts and analytics
- **Study Materials** - Notes, recordings, downloads
- **Gamification** - Badges and rewards system
- **Discussion Forum** - Chat and community features
- **Notifications** - Real-time alerts

### 👩‍🏫 Teacher Dashboard
- **Course Management** - Create and manage courses
- **Content Upload** - Videos, materials, assignments
- **Assignment System** - Create, grade, and manage assignments
- **Student Tracking** - Performance monitoring
- **Automated Grading** - AI-assisted grading (placeholder)
- **Attendance System** - Track student participation
- **Live Classes** - Video conferencing integration (placeholder)
- **Communication Tools** - Announcements and messaging
- **Analytics Dashboard** - Performance insights

### 👨‍👩‍👧 Parent Dashboard
- **Child Progress** - View academic performance
- **Performance Reports** - Detailed analytics
- **Attendance Tracking** - Monitor school attendance
- **Teacher Communication** - Direct messaging
- **Notifications/Alerts** - Important updates
- **Multi-Child Support** - Manage multiple children

### ⭐ Common Features
- **LMS Core** - Complete learning management system
- **Cloud Storage** - File upload and management (placeholder)
- **AI Recommendations** - Course suggestions based on performance
- **Certification System** - Digital certificates
- **Multi-Device Support** - Responsive across all devices

## 🧱 Technical Architecture

### Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js with JWT
- **State Management**: React Context (built-in)
- **Charts**: Recharts for analytics
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Project Structure
```
universal-study-hub/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── auth/                 # Authentication endpoints
│   ├── auth/                     # Auth pages (signin/signup)
│   ├── dashboard/                # Protected dashboard routes
│   │   ├── student/              # Student dashboard
│   │   ├── teacher/              # Teacher dashboard
│   │   └── parent/               # Parent dashboard
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Public homepage
├── components/                   # Reusable components
│   ├── ui/                       # UI components
│   ├── auth/                     # Auth components
│   ├── dashboard/                # Dashboard components
│   └── providers/                # Context providers
├── lib/                          # Utility libraries
│   ├── auth.ts                   # NextAuth configuration
│   └── mongodb.ts                # Database connection
├── models/                       # MongoDB models
│   ├── User.ts                   # User schema
│   ├── Course.ts                 # Course schema
│   └── Notification.ts           # Notification schema
├── types/                        # TypeScript types
│   ├── index.ts                  # Main types
│   └── next-auth.d.ts            # NextAuth type extensions
└── public/                       # Static assets
```

### Database Schema

#### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: Enum ['student', 'teacher', 'parent'],
  avatar: String,
  // Role-specific fields...
  enrolledCourses: [ObjectId],     // Students
  courses: [ObjectId],             // Teachers
  children: [ObjectId],            // Parents
  // ... other fields
}
```

#### Course Model
```javascript
{
  title: String,
  description: String,
  subject: String,
  grade: String,
  teacher: ObjectId,
  students: [ObjectId],
  lessons: [{
    title: String,
    videoUrl: String,
    materials: [String],
    quiz: { questions: [...] }
  }],
  assignments: [{
    title: String,
    submissions: [...]
  }]
}
```

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)
- npm/yarn/pnpm

### 1. Clone & Install
```bash
git clone <repository-url>
cd universal-study-hub
npm install
```

### 2. Environment Setup
Create `.env.local` in the root directory:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/universal-study-hub

# NextAuth
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# JWT (optional, for additional security)
JWT_SECRET=your-jwt-secret-here
```

### 3. Database Setup
```bash
# Start MongoDB locally or use MongoDB Atlas
# The app will create collections automatically
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### 5. Build for Production
```bash
npm run build
npm start
```

## 🎯 Usage Guide

### For Students
1. **Sign Up** as a Student
2. **Browse Courses** on the homepage
3. **Enroll** in courses from your dashboard
4. **Watch Lessons** and complete quizzes
5. **Track Progress** with charts and analytics
6. **Earn Badges** through achievements

### For Teachers
1. **Sign Up** as a Teacher
2. **Create Courses** with lessons and materials
3. **Upload Content** (videos, documents)
4. **Create Assignments** and quizzes
5. **Monitor Students** progress
6. **Grade Submissions** and provide feedback

### For Parents
1. **Sign Up** as a Parent
2. **Add Children** to your account
3. **Monitor Progress** across subjects
4. **Communicate** with teachers
5. **Receive Alerts** about important updates

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login (NextAuth)
- `POST /api/auth/signout` - User logout (NextAuth)

### Dashboard APIs (Planned)
- `GET /api/courses` - List courses
- `POST /api/courses` - Create course (Teachers)
- `GET /api/courses/:id` - Course details
- `GET /api/users/profile` - User profile
- `PUT /api/users/profile` - Update profile

## 🎨 UI/UX Design

- **Modern Design** - Clean, card-based layout
- **Student-Friendly** - Intuitive navigation and interactions
- **Responsive** - Works perfectly on all devices
- **Accessible** - WCAG compliant
- **Dark Mode** - Built-in theme switching
- **Charts & Analytics** - Visual progress tracking

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Railway**: Full-stack deployment
- **AWS/DigitalOcean**: Manual setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: support@universalstudyhub.com
- Website: https://universalstudyhub.com

---

**Built with ❤️ for students, teachers, and parents worldwide**
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
universal/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── HowItWorks.tsx   # How it works section
│   ├── SubjectsStandards.tsx  # Subjects & standards
│   ├── WhyChoose.tsx    # Why choose section
│   ├── StudentsParents.tsx    # Students & parents section
│   ├── CTASection.tsx   # Call to action section
│   └── Footer.tsx       # Footer component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the primary color scheme. The current theme uses a blue color palette.

### Content

All content can be customized in the respective component files in the `components/` directory.

## Future Enhancements

- Login/Dashboard functionality
- Tutor onboarding system
- Query submission form
- Testimonials section
- Multilingual support
- Chat/Query popup

## License

© Universal Study Hub – All Rights Reserved

