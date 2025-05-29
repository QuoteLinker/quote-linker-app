'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LeadForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    coverageAmount: '250000',
    coverageType: 'term',
    healthStatus: 'excellent',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      router.push('/thank-you')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div id="quote-form" className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Get Your Quote</h2>
        <p className="mt-2 text-sm text-gray-600">
          Takes less than 2 minutes. No medical exam required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            required
            value={formData.zipCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="coverageAmount" className="block text-sm font-medium text-gray-700">
            Coverage Amount
          </label>
          <select
            id="coverageAmount"
            name="coverageAmount"
            required
            value={formData.coverageAmount}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="100000">$100,000</option>
            <option value="250000">$250,000</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="2000000">$2,000,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="coverageType" className="block text-sm font-medium text-gray-700">
            Coverage Type
          </label>
          <select
            id="coverageType"
            name="coverageType"
            required
            value={formData.coverageType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="term">Term Life Insurance</option>
            <option value="whole">Whole Life Insurance</option>
          </select>
        </div>

        <div>
          <label htmlFor="healthStatus" className="block text-sm font-medium text-gray-700">
            Health Status
          </label>
          <select
            id="healthStatus"
            name="healthStatus"
            required
            value={formData.healthStatus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="fair">Fair</option>
          </select>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Getting Your Quote...' : 'Get Your Quote'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-primary-600 hover:text-primary-700">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-primary-600 hover:text-primary-700">
            Terms of Service
          </a>
          .
        </p>
      </form>
    </div>
  )
} 