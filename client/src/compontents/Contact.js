import React from 'react'

const Contact = () => {
  const containerStyle = {
    backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)"
  };
  return (
    <>
    
    <div className="bg-gradient-to-br from-purple-400 to-pink-300 min-h-screen flex items-center justify-center" style={containerStyle}>
        <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form action="#" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
