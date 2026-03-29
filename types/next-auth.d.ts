import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role: 'student' | 'teacher' | 'parent'
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role: 'student' | 'teacher' | 'parent'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'student' | 'teacher' | 'parent'
  }
}