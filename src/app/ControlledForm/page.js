"use client";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordStrength: "",
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const currentPassword = e.target.value;
    setFormData((prevData) => {
        const updatedData = {...prevData, password: currentPassword}
      if (formData.password.length == 0) {
        updatedData.passwordStrength= ""
      } else if (formData.password.length < 4) {
        updatedData.passwordStrength= "Weak"
      } else if (formData.password.length < 8) {
        updatedData.passwordStrength= "Medium"
      } else {
        updatedData.passwordStrength= "High"
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name is:", formData.name);
    console.log("Email is:", formData.email);
    console.log("Password is:", formData.password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[100vh] flex flex-col justify-center items-center gap-9"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
          className="w-[300px] px-3 py-1 text-black"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          className="w-[300px] px-3 py-1 text-black"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={handlePasswordChange}
          name="password"
          className="w-[300px] px-3 py-1 text-black"
        />
        {formData.password.length > 0 && (
          <p>Password Strength is: {formData.passwordStrength}</p>
        )}
      </div>
      <button
        disabled={!(formData.name && formData.email && formData.password)}
        type="submit"
        className="bg-green-600 disabled:bg-red-600 hover:bg-green-800 transition-all duration-500 ease w-[300px] text-white py-2 px-4"
      >
        Submit
      </button>
    </form>
  );
};

export default page;
