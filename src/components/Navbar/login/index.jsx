import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user")); //localstorage only holds the string so we have to convert in object while getting//string to object json.parse
    if (
      formData.email === loggeduser.email &&
      formData.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="p-10 md:flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 h-90">
        <h2 className="text-xl font-bold text-center mb-4 underline">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className="text-sm w-full p-1 border border-amber-800 rounded outline-none"
            required
          />
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className=" text-sm w-full p-1 border border-amber-800 rounded outline-none"
            required
          />
          <button
            type="submit"
            className=" mt-5 w-full bg-amber-900 text-white p-2 rounded hover:bg-amber-900"
          >
            Login
          </button>
          <div className="flex  justify-evenly items-center mt-4">
            <p className=" text-gray-600 text-sm ">Don't have an account? </p>
            <Link to="/register">
              <button className="font-bold gap-0 hover:underline">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
