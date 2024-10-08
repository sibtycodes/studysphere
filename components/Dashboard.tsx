import { ArrowRight, Book, Calendar, Users } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8 customs">
      <h1 className="text-3xl font-bold mb-8">Welcome back, Sibtain /Farheen!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Course Recommendations"
          icon={<Book className="w-8 h-8 text-blue-500" />}
          content="Discover new courses tailored just for you."
          action="Explore Courses"
        />
        <DashboardCard
          title="Upcoming Tasks"
          icon={<Calendar className="w-8 h-8 text-green-500" />}
          content="You have 3 assignments due this week."
          action="View Calendar"
        />
        <DashboardCard
          title="Peer Connections"
          icon={<Users className="w-8 h-8 text-purple-500" />}
          content="Connect with 5 new peers in your field."
          action="Browse Peers"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">AI-Driven Course Recommendations</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-900 mb-4">
            Based on your interests and learning history, we've curated a list of courses that might interest you.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Web Development Fundamentals</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">45% Complete</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Data Science Essentials</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">70% Complete</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardCard = ({ title, icon, content, action }:any) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
    <p className="text-gray-900 mb-4">{content}</p>
    <button className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center">
      {action}
      <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  </div>
)

export default Dashboard