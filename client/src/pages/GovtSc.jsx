import React from 'react'

export default function GovtSc() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Schemes & Benefits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and access various financial schemes and benefits offered by the Government of India
          </p>
        </div>

        {/* Scheme Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Schemes */}
        <h2 className="text-2xl font-bold mb-8">Popular Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {schemes.map((scheme, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{scheme.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {scheme.tags.map((tag, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Checker */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Check Your Eligibility</h2>
          <p className="text-center text-gray-600 mb-6">
            Answer a few simple questions to find schemes you're eligible for
          </p>
          <div className="flex justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
              Start Eligibility Check
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    icon: "🏠",
    title: "Housing Schemes",
    description: "Affordable housing and home loan schemes including PM Awas Yojana"
  },
  {
    icon: "💼",
    title: "Business Loans",
    description: "MSME loans, Mudra Yojana, and Start-up India schemes"
  },
  {
    icon: "👨‍🌾",
    title: "Agriculture",
    description: "PM Kisan, crop insurance, and agricultural credit schemes"
  },
  {
    icon: "🎓",
    title: "Education",
    description: "Scholarships, education loans, and skill development programs"
  },
  {
    icon: "👴",
    title: "Pension & Insurance",
    description: "Atal Pension Yojana, PM Jeevan Jyoti Bima Yojana"
  },
  {
    icon: "👩",
    title: "Women & Children",
    description: "Schemes for women entrepreneurs and child welfare"
  }
]

const schemes = [
  {
    icon: "🏠",
    title: "PM Awas Yojana (Urban)",
    description: "Get up to ₹2.67 lakhs subsidy on your first home loan for affordable housing in urban areas.",
    tags: ["Housing", "Urban", "Subsidy"]
  },
  {
    icon: "💰",
    title: "PM Mudra Yojana",
    description: "Loans up to ₹10 lakhs for small businesses and entrepreneurs without collateral.",
    tags: ["Business", "Loan", "No Collateral"]
  },
  {
    icon: "👨‍🌾",
    title: "PM Kisan Samman Nidhi",
    description: "Direct income support of ₹6000 per year to eligible farmer families.",
    tags: ["Agriculture", "Direct Benefit", "Income Support"]
  },
  {
    icon: "🛡️",
    title: "Atal Pension Yojana",
    description: "Guaranteed pension scheme for workers in unorganized sector.",
    tags: ["Pension", "Social Security", "Retirement"]
  }
]
