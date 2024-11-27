"use client";

import { useState } from "react";

export default function RegistrationForm() {
  // Add state for username and usernameErrorText
  const [userName, setUserName] = useState("");
  const [userNameErrorText, setUserNameErrorText] = useState("");

  // Add state for email and emailErrorText
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  // Add state to set formData
  const [formData, setFormData] = useState(null); // For storing and displaying results

  // Add function to validateForm
  const validateForm = () => {
    const userNameValidatity = userName.length >= 3;
    const emailValidatity = email.length === 0 || /\S+@\S+\.\S+/.test(email);

    setIsFormValid(userNameValidatity && emailValidatity);
  };

  // Add function to validate username
  const validateUserName = (value) => {
    if (value.length === 0) {
      setUserNameErrorText("Name is required");
    } else if (value.length > 0 && value.length < 3) {
      setUserNameErrorText(
        "Name must be greater then or equal to 3 characters"
      );
    } else {
      setUserNameErrorText("");
    }
    validateForm();
  };

  // Add function to validate email
  const validateEmail = (value) => {
    if (value.length > 0 && !/\S+@\S+\.\S+/.test(value)) {
      setEmailErrorText("Email must be a valid email address");
    } else {
      setEmailErrorText("");
    }
    validateForm();
  };

  // Add function to handle username change
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    validateUserName(value);
  };

  // Add function to handle email value change
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  // Create a handleSubmitFunction
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: userName,
      email: email || "N/A",
    });
    validateForm();
  };

  return (
    <div className="bg-orange-200 text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-yellow-900 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
            Contact Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                className={`w-full p-2 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    userNameErrorText
                      ? "border-red-500"
                      : userName && !userNameErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleUsernameChange}
              />
              {userNameErrorText && (
                <p className="text-red-500 text-sm mt-2">{userNameErrorText}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className={`w-full p-2 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    emailErrorText
                      ? "border-red-500"
                      : email && !emailErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleEmail}
              />
              {emailErrorText && (
                <p className="text-red-500 text-sm mt-2">{emailErrorText}</p>
              )}
            </div>

            {/* Make sure to change this all to question */}
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Question/Comment:
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                className={`w-full p-2 bg-white text-black border rounded focus:outline-none focus:ring focus:ring-blue-500 
                  ${
                    userNameErrorText
                      ? "border-red-500"
                      : userName && !userNameErrorText
                      ? "border-green-500"
                      : "border-gray-700"
                  }`}
                onChange={handleUsernameChange}
              />
              {userNameErrorText && (
                <p className="text-red-500 text-sm mt-2">{userNameErrorText}</p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded ${
                isFormValid
                  ? "bg-green-400 text-black cursor-pointer"
                  : " bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Register
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-blue-500 mb-4">
            Contact Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                {formData.email || "N/A"}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No registration details to show.</p>
          )}
        </div>
      </div>
    </div>
  );
}
