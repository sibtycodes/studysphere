'use client'

import { useState } from 'react'
import { Bell, Home, BookOpen, User, Settings, LogOut, Menu } from 'lucide-react'
import Link from 'next/link'
import logo from "@/public/logo.png"
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md text-gray-900">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <h2 className="text-xl font-semibold text-gray-800">Study Sphere</h2>
          </div>
            <div className="flex-shrink-0">
              <svg className=" size-5 ml-2 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/" icon={<Home className="w-5 h-5" />} text="Home" />
                <NavLink href="/courses" icon={<BookOpen className="w-5 h-5" />} text="Courses" />
                <NavLink href="/profile" icon={<User className="w-5 h-5" />} text="Profile" />
                <NavLink href="/settings" icon={<Settings className="w-5 h-5" />} text="Settings" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" icon={<Home className="w-5 h-5" />} text="Home" mobile />
            <NavLink href="/courses" icon={<BookOpen className="w-5 h-5" />} text="Courses" mobile />
            <NavLink href="/profile" icon={<User className="w-5 h-5" />} text="Profile" mobile />
            <NavLink href="/settings" icon={<Settings className="w-5 h-5" />} text="Settings" mobile />
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, icon, text, mobile = false }:any) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${
        mobile
          ? 'block px-3 py-2 rounded-md text-base font-medium'
          : 'px-3 py-2 rounded-md text-sm font-medium'
      } flex items-center relative ${
        isActive ? 'text-orange-700' : 'text-gray-500 hover:text-gray-700'
      } transition-colors duration-200`}
    >
      <span className={`${isActive ? 'opacity-100' : 'opacity-70'}`}>
        {icon}
      </span>
      <span className={`ml-2 ${isActive ? 'opacity-100' : 'opacity-70'}`}>{text}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-700 transform origin-left transition-transform duration-300 ease-out"></span>
      )}
    </Link>
  )
}

export default Navbar