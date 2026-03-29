import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'parent'],
    required: true,
  },
  avatar: {
    type: String,
  },
  // Student specific
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  progress: [{
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
    completedLessons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    }],
    score: {
      type: Number,
      default: 0,
    },
  }],
  badges: [{
    type: String,
  }],
  // Teacher specific
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  qualifications: [{
    type: String,
  }],
  experience: {
    type: Number, // years
  },
  subjects: [{
    type: String,
  }],
  // Parent specific
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
})

export default mongoose.models.User || mongoose.model('User', UserSchema)