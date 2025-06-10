import React from 'react'

export default function Courses() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Financial Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master personal finance and tax planning through our comprehensive courses
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="text-indigo-600 font-medium">{category.courseCount} Courses →</span>
            </div>
          ))}
        </div>

        {/* Popular Courses */}
        <h2 className="text-2xl font-bold mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">₹{course.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    icon: "📊",
    title: "Tax Planning",
    description: "Learn about income tax, deductions, and filing returns",
    courseCount: "8"
  },
  {
    icon: "💰",
    title: "Investment",
    description: "Master stocks, mutual funds, and retirement planning",
    courseCount: "12"
  },
  {
    icon: "🏢",
    title: "Business Finance",
    description: "GST, business accounting, and financial management",
    courseCount: "10"
  }
]

const courses = [
  {
    title: "Income Tax Basics",
    description: "Learn the fundamentals of income tax calculation and filing",
    level: "Beginner",
    duration: "4 weeks",
    price: "1999",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3"
  },
  {
    title: "Stock Market Fundamentals",
    description: "Understanding equity markets and basic trading strategies",
    level: "Intermediate",
    duration: "6 weeks",
    price: "2499",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3"
  },
  {
    title: "GST Masterclass",
    description: "Comprehensive guide to Goods and Services Tax",
    level: "Advanced",
    duration: "8 weeks",
    price: "3999",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
  },
  {
    title: "Personal Finance 101",
    description: "Basic money management and financial planning",
    level: "Beginner",
    duration: "4 weeks",
    price: "1499",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3"
  },
  {
    title: "Mutual Fund Investing",
    description: "Learn to build and manage mutual fund portfolio",
    level: "Intermediate",
    duration: "5 weeks",
    price: "2299",
    image: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?ixlib=rb-4.0.3"
  },
  {
    title: "Business Accounting",
    description: "Master business accounting and financial statements",
    level: "Advanced",
    duration: "10 weeks",
    price: "4999",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3"
  }
]
