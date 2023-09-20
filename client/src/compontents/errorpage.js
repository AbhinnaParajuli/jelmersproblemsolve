import React from 'react'
import { Link } from 'react-router-dom'

const errorpage = () => {
  return (
    <div>
       <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-semibold text-red-500 mb-4">Error 404</h1>
        <p className="text-gray-700 mb-6">Oops! The page you're looking for does not exist.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
          Go Back Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default errorpage
