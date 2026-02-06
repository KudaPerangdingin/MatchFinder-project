// app/dashboard/page.js
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard MatchFinder</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Matches</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pending Requests</h3>
          <p className="text-3xl font-bold text-yellow-600">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Win Rate</h3>
          <p className="text-3xl font-bold text-green-600">75%</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link href="/dashboard/find-match" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Find Match
          </Link>
          <Link href="/dashboard/profile" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Edit Profile
          </Link>
          <Link href="/dashboard/history" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Match History
          </Link>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2 text-yellow-800">⚠️ Complete Your Profile</h2>
        <p className="mb-4 text-yellow-700">Your profile is only 40% complete. Fill in more details to get better matches!</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
        </div>
        <Link href="/dashboard/profile" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Update Profile →
        </Link>
      </div>
    </div>
  )
}