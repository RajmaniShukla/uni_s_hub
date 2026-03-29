import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Temporary hardcoded users for development
const hardcodedUsers = [
  {
    id: '1',
    email: 'student@test.com',
    password: 'password123',
    name: 'John Student',
    role: 'student' as const,
  },
  {
    id: '2',
    email: 'teacher@test.com',
    password: 'password123',
    name: 'Sarah Teacher',
    role: 'teacher' as const,
  },
  {
    id: '3',
    email: 'parent@test.com',
    password: 'password123',
    name: 'Mike Parent',
    role: 'parent' as const,
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user in hardcoded list
        const user = hardcodedUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        )

        if (!user) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as 'student' | 'teacher' | 'parent'
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}