import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
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

  // Handle form submit
  //to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();

    // first validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    //localstorage holds string only so we have to convert into string  //to string json.stringyfy
    localStorage.setItem("user", JSON.stringify(formData));
    setSuccessMessage("Registration successful!");
    setErrors({});
    navigate("/login");

    console.log("Registered User:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-50 bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className=" text-2xl font-bold mb-4">Create An Account</h2>

        {successMessage && <p className="text-green-600">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className=" text-sm w-full p-2 border border-gray-500 rounded outline-none"
              placeholder="Enter your name"
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
              className=" text-sm w-full p-2 border border-gray-500 rounded"
              placeholder="Enter your email"
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
              className=" text-sm w-full p-2 border border-gray-500 rounded"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full   bg-gradient-to-r from-amber-500 to-amber-800 text-white p-2 rounded"
          >
            Create
          </button>
          <button
            type="button"
            className=" ml-60 mt-3 p-1 underline "
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
