'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LayoutDashboard, Bell, BookOpen, Calendar, FolderOpen, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import logo from "@/public/logo2.png"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className={`bg-white text-gray-800 transition-all duration-300  absolute sm:static ease-in-out  ${isCollapsed ? ' w-16 sm:w-20 h-full' : 'w-64 absolute  h-full sm:static'}`}>
 <img 
          src={logo.src} 
          alt="Study Sphere Logo" 
          width={232} 
          height={15} 
          className={` z-50 mt-4 ${isCollapsed ? 'mx-auto' : 'mr-2'}`} 
        />

      <div className="flex items-center justify-between px-4 relative">
        {!isCollapsed && <h2 className="text-2xl font-semibold"></h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${isCollapsed && "absolute top-52  -right-3"} p-1 rounded-full hover:bg-gray-200 focus:outline-none  focus:ring-2 focus:ring-gray-300`}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4 " /> : <ChevronLeft className="w-6 h-6" />}
        </button>
      </div>
      <nav className="mt-0">
        <SidebarLink href="/dashboard" icon={<LayoutDashboard />} text="Dashboard" isCollapsed={isCollapsed} />
        <SidebarLink href="/notifications" icon={<Bell />} text="Notifications" isCollapsed={isCollapsed} />
        <SidebarLink href="/assignments" icon={<BookOpen />} text="Assignments" isCollapsed={isCollapsed} />
        <SidebarLink href="/calendar" icon={<Calendar />} text="Calendar" isCollapsed={isCollapsed} />
        <SidebarLink href="/resources" icon={<FolderOpen />} text="Resources" isCollapsed={isCollapsed} />
        <SidebarLink href="/help" icon={<HelpCircle />} text="Help" isCollapsed={isCollapsed} />
      </nav>
    </div>
  )
}

const SidebarLink = ({ href, icon, text, isCollapsed }:any) => (
  <Link href={href} className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
    <span className="inline-flex items-center justify-center h-10 w-10 text-lg text-gray-600">{icon}</span>
    {!isCollapsed && <span className="ml-2">{text}</span>}
  </Link>
)

export default Sidebar