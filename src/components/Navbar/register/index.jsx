import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    let errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email.includes("@")) errors.email = "Valid email is required";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Registered User:", formData);
    setSuccessMessage("Registration successful!");
    setErrors({});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full   bg-gradient-to-r from-amber-500 to-amber-800 text-white p-2 rounded"
          >
            Register
          </button>
          <button
            type="button"
            className=" bg-gray-400 text-white p-2 rounded mt-2"
            onClick={() =>
              setFormData({ username: "", email: "", password: "" })
            }
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
