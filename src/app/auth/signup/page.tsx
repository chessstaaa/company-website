'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-[#00162b] flex items-center justify-center px-4">
      <div className="bg-[#0a1931] rounded-2xl shadow-xl w-full max-w-md p-8 border border-[#db0a40]/40">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create Account 🚀
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Join the Red Bull Racing community
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0f223f] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#db0a40]"
              placeholder="Max Verstappen"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0f223f] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#db0a40]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#0f223f] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#db0a40]"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#db0a40] hover:bg-[#c3093b] transition-all text-white font-semibold rounded-lg shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{' '}
          <Link
            href="/auth/signin"
            className="text-[#ffd700] hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
