import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginbg from "./images/registerbg.png"; // Importing the default export
const About = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch('http://localhost:3000/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });
      
      const data = await res.json();
      console.log(data);
      if (data) {
        setData(data)
      }

      if (res.status !== 200) {
        const error = new Error(data.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
  // Call the function when the component renders
  callAboutPage();
  }, [])

 const logoutUser = async (e) =>{
  e.preventDefault();
  const res = await fetch("http://localhost:3000/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if(res.status!==200){
    window.alert("Failed to logout");
  } else{
    navigate("/login");
  }
 }

  return (
    <>

    <form method='GET' className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center border-4 border-gradient rounded-lg p-8">
          <img src={loginbg} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{data?.name}</h1>
          <p className="text-lg text-gray-700 mb-8">{data?.work}</p>
          <p className="text-gray-700">
            User ID: {data?._id} <br />
            Name: {data?.name} <br />
            Phone: {data?.phone} <br />
            Email: {data?.email} <br />
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
            Edit Profile
          </button>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default About;