import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logingb from "./images/registerbg.png"; // Change the path to match your actual image location

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e, key) => {
    const newUser = { ...user };
    const value = e.target.value;
    newUser[key] = value;
    setuser(newUser);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    let res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Registration Failed, Please Try Again.");
      console.log("reg failed");
    } else {
      window.alert("Registration Successfull, Please Login");
      console.log("reg suc");
      navigate("/login");
    }
  };
  const containerStyle = {
    backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%", // Ensures the container takes the full height
    background: `url(${logingb}) no-repeat center center`,
    backgroundSize: "cover",
    // Conditional style to hide the image below 768px viewport width
    display: windowWidth < 1024 ? "none" : "block",
  };
  return (
    <>
      <div className="min-h-screen py-16" style={containerStyle}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12"
              style={imageStyle}
            ></div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form method="POST" action="#">
                <div className="mt-5">
                  <input
                    value={user.name}
                    onChange={(e) => handleInput(e, "name")}
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    value={user.email}
                    onChange={(e) => handleInput(e, "email")}
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
               
                <div className="mt-5">
                  <input
                    value={user.phone}
                    onChange={(e) => handleInput(e, "phone")}
                    type="text"
                    placeholder="Phone"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    value={user.work}
                    onChange={(e) => handleInput(e, "work")}
                    type="text"
                    placeholder="Profession"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => handleInput(e, "password")}
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    value={user.cpassword}
                    onChange={(e) => handleInput(e, "cpassword")}
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="text-left pt-5 text-gray-400">
                  Have an account?
                  <Link to="/login" classNameName="font-bold text-black">
                    Sign In
                  </Link>
                </div>
                <div className="mt-5">
                  <button
                    onClick={PostData}
                    className="w-full bg-purple-500 py-3 text-center text-white"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
