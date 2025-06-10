import React from 'react'

export default function Mentors() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from Expert Financial Mentors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced professionals who will guide you through your financial journey
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white hover:bg-indigo-50 p-6 rounded-lg shadow-md transition duration-300">
              <img 
                src={mentor.image} 
                alt={mentor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{mentor.name}</h3>
              <p className="text-indigo-600 text-center mb-3">{mentor.specialization}</p>
              <p className="text-gray-600 text-center mb-4">{mentor.description}</p>
              <div className="flex justify-center space-x-4">
                {mentor.expertise.map((skill, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Book Session
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Our Mentors Section */}
        <div className="bg-white hover:bg-indigo-50 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Mentors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mentors = [
  {
    name: "Rajesh Kumar",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    specialization: "Tax Planning Expert",
    description: "15+ years of experience in corporate tax planning and personal finance.",
    expertise: ["Tax", "Investment"]
  },
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    specialization: "Investment Advisor",
    description: "Certified financial planner specializing in mutual funds and equity.",
    expertise: ["Stocks", "MF"]
  },
  {
    name: "Amit Patel",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    specialization: "Startup Finance",
    description: "Helps entrepreneurs manage finances and optimize business growth.",
    expertise: ["Business", "GST"]
  },
  {
    name: "Sneha Reddy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    specialization: "Personal Finance",
    description: "Expert in debt management and personal budgeting strategies.",
    expertise: ["Savings", "Debt"]
  },
  {
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    specialization: "Retirement Planning",
    description: "Specializes in long-term wealth creation and retirement planning.",
    expertise: ["Planning", "Investment"]
  },
  {
    name: "Meera Iyer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    specialization: "GST Expert",
    description: "Helps businesses navigate GST compliance and optimization.",
    expertise: ["GST", "Tax"]
  }
]

const benefits = [
  {
    icon: "🎓",
    title: "Verified Experts",
    description: "All mentors are verified professionals with proven track records"
  },
  {
    icon: "🎯",
    title: "Personalized Guidance",
    description: "Get advice tailored to your specific financial situation"
  },
  {
    icon: "💡",
    title: "Practical Knowledge",
    description: "Learn from real-world experience and practical insights"
  }
]
