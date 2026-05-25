'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const result = await signIn('credentials', { email, password, redirect: false })
      if (result?.error) { setError('Invalid credentials') }
      else {
        const session = await getSession()
        if (session?.user?.role) { router.push(`/dashboard/${session.user.role}`) }
      }
    } catch (error) { setError('An error occurred') }
    finally { setIsLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Universal Study Hub" width={80} height={80} className="rounded-full object-contain drop-shadow-lg" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Sign in to your account</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Or <Link href="/auth/signup" className="font-medium text-primary-600 hover:text-primary-500">create a new account</Link></p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-slate-400" /></div>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-t-md relative block w-full px-10 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-slate-700" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-slate-400" /></div>
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required className="appearance-none rounded-b-md relative block w-full px-10 pr-10 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-slate-700" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-500" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button>
            </div>
          </div>
          {error && <div className="text-red-600 dark:text-red-400 text-sm text-center">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">{isLoading ? 'Signing in...' : 'Sign in'}</button>
          <div className="text-center"><Link href="/" className="text-sm text-primary-600 hover:text-primary-500">Back to home</Link></div>
        </form>
      </div>
    </div>
  )
}
