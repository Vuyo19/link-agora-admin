import React, { useState }from "react";
import LoginLayout from "../LoginLayout";
import loginRequestResponse from "./Response/LoginResponse";


// Import Web logo image
import logo from "../../assets/link-agora-logo-variation-4.png";

const Login = () => {  
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  }); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Button to sign the user in. 
  const handleSignInClick = async () => {  

    const { email, password } = formData; 

    const admin_login = await loginRequestResponse(email, password)  
    
    if(admin_login.authenticated) {  
      
      window.location.href = "/"; // Replace with your desired path
      alert("Admin can now log in.") 
    } else {
        alert("Email or password is not correct") 

    }

  }

  return (
    <LoginLayout>
      <div>
        <section className="bg-black h-screen">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {/* Logo Image */}
            <div className="w-76 h-44 m-4">
              <img src={logo} className="h-full" alt="Logo" />
            </div>
            {/* //---- endof ----// */}

            {/* Sign In Form */}
            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/* Form Heading */}
                <h1 className="flex items-center justify-center text-md font-bold leading-tight tracking-tight text-white md:text-lg">
                  Sign in to your account
                </h1>
                  {/* Email Email-field */}
                  <div className="mt-8">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-black border-2 border-[#2A805D] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@bmf.com" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* //---- endof Text-field ----// */}

                  {/* Password Password-field */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-black border-2 border-[#2A805D] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* //---- endof Text-field ----// */}

                  <div className="flex items-center justify-between">

                    {/* Forgot Password Link-Action */}
                    <a
                      href="#"
                      className="text-sm font-medium text-white hover:underline"
                    >
                      Forgot password? Please contact IT support.
                    </a>
                    {/* //---- endof Link-Action ----// */}
                  </div>
                  {/* Sign-In Button */}
                  <button
                    type="button"
                    className="w-full text-white bg-[#8A2623] hover:bg-[#01663E]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleSignInClick}
                  >
                    Sign in 

                  </button>
                  {/* //---- endof Button ----// */}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
              </div>
            </div>
            {/* ///---- end of ----/// */}
          </div>
        </section>
      </div>
    </LoginLayout>
  );
};

export default Login;
