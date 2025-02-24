import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    emailUsername: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute -left-20 -top-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6)">
                <rect width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#a)" />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute -right-20 -bottom-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="b" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.5)">
                <rect width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#b)" />
          </svg>
        </div>
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            <div className="mb-10 flex items-center justify-center">
              <a href="#" className="flex items-center gap-2 text-primary no-underline hover:text-blue-900">
                <span className="text-3xl font-black  tracking-tight">Scribbly.</span>
              </a>
            </div>
            <h4 className="mb-2 font-medium text-center text-gray-700 xl:text-xl">Welcome to Scribbly!</h4>
            <p className="mb-8 text-gray-500 text-center">Please sign-in to access your account</p>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label className="mb-2 block text-md font-bold text-gray-700">Email</label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  name="emailUsername"
                  value={formData.emailUsername}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="mb-2 block text-md font-semibold  text-gray-700">Password</label>
                  <a href="#" className="text-indigo-500 no-underline hover:text-indigo-500">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <input
                  type="password"
                  className="block w-full rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  className="h-5 w-5 rounded border border-gray-300 text-indigo-500 focus:border-indigo-500 focus:shadow"
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="ml-2">Remember Me</label>
              </div>
              <div className="mb-4">
                <button
                  className="w-full rounded-md border border-indigo-500 bg-primary py-2 px-5 text-md text-white shadow hover:border-indigo-600 hover:bg-indigo-600 focus:border-indigo-600 focus:bg-indigo-600 focus:shadow-none"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mb-4 text-center">
              New on Scribbly? <a href="#" className="text-indigo-500 no-underline hover:text-indigo-500">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
