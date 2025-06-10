import React, { useState } from 'react'
import {Logo, Container} from "./component"
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "About",
      slug: "/about",
      active: true
    },
    {
      name: "Features",
      slug: "/features",
      active: true,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Mentors",
          slug: "/features/mentors"
        },
        {
          name: "Govt Scheme",
          slug: "/features/govt-scheme"
        },
        {
          name: "Courses",
          slug: "/features/courses"
        }
      ]
    },
    {
      name: "Chatbot",
      slug: "/chatbot",
      active: true
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true
    }
  ]
  return (
    <>
      <div>
        <Container>
          <nav className="flex justify-between pt-5 px-5 items-center">
            <Link to="/">
              <Logo/>
            </Link>
            <ul className='flex ml-auto gap-5'>
              {navItems.map((item)=> item.active ? (
                <li key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <button className='cursor-pointer'>{item.name}</button>
                      {showDropdown && (
                        <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 min-w-[150px]">
                          {item.dropdownItems.map((dropItem) => (
                            <button
                              key={dropItem.name}
                              onClick={() => navigate(dropItem.slug)}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              {dropItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button 
                      onClick={() => navigate(item.slug)} 
                      className='cursor-pointer'
                    >
                      {item.name}
                    </button>
                  )}
                </li>
                ):null
              )}
            </ul>
          </nav>
        </Container>
      </div>
    </>
  )
}
