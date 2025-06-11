import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Personal</span>
                <span className="block text-indigo-600">Finance Assistant</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
                Simplify taxes, track expenses, and grow your wealth with AI-powered financial guidance
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get Started Free
                </Link>
                <Link to="/about" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img src="/public/main_assets/Personal-Finance-Management-scaled-1.webp" alt="Financial Management" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Everything you need to manage finances</h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:py-20 md:px-12 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to take control of your finances?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-100">
                Join thousands of users who have simplified their financial life
              </p>
              <Link
                to="/register"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Assistant",
    description: "Get personalized financial advice and tax-saving recommendations"
  },
  {
    icon: "📊",
    title: "Smart Tax Planning",
    description: "Auto-calculate taxes and get regime optimization suggestions"
  },
  {
    icon: "📱",
    title: "Easy Tracking",
    description: "Monitor income, expenses, and deadlines in one place"
  },
  {
    icon: "🎓",
    title: "Financial Education",
    description: "Learn finance through courses in multiple languages"
  },
  {
    icon: "🏛️",
    title: "Government Schemes",
    description: "Discover and access various financial benefits"
  },
  {
    icon: "👥",
    title: "Expert Mentorship",
    description: "Connect with experienced financial advisors"
  }
]

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "₹50Cr+", label: "Tax Savings" },
  { value: "1000+", label: "Expert Mentors" },
  { value: "24/7", label: "AI Support" }
]
