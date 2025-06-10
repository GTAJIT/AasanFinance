import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart, Simple, Stress-Free Finance & Tax Help
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AasanFinance is an AI-powered personal finance and tax assistant designed to simplify your financial journey.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white hover:bg-indigo-50 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Target Audience Section */}
        <div className="bg-white hover:bg-indigo-50 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <p>{audience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact Section */}
        <div className="bg-white hover:bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Social Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">📚</div>
              <p className="text-gray-700">Increases financial literacy among youth and low-income groups</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">📈</div>
              <p className="text-gray-700">Reduces errors in tax filing and boosts early financial planning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const coreFeatures = [
  {
    icon: "📊",
    title: "Smart Tax Estimator",
    description: "Auto-calculates tax liability and suggests optimal tax regime based on your income and deductions."
  },
  {
    icon: "📆",
    title: "Deadline Reminders",
    description: "Never miss important ITR, GST, and TDS due dates with personalized notifications."
  },
  {
    icon: "🧾",
    title: "Income & Expense Tracker",
    description: "Track finances automatically via bank SMS parsing and smart expense categorization."
  },
  {
    icon: "🤖",
    title: "AI Finance Advisor",
    description: "Get personalized tax-saving recommendations and financial tips through our smart chatbot."
  },
  {
    icon: "📚",
    title: "EduFinance Zone",
    description: "Learn finance through mini-courses and quizzes in multiple regional languages."
  },
  {
    icon: "🧠",
    title: "Document Organizer",
    description: "Securely store and organize all your financial documents in one place."
  }
]

const targetAudience = [
  "College passouts filing ITR for the first time",
  "Freelancers, YouTubers, and Content Creators",
  "Shopkeepers and local business owners",
  "Salaried employees confused between tax regimes"
]
