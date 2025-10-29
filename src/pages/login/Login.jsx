

import { useState } from 'react';
import { Heart, Mail, Lock, User, CheckCircle, Phone } from 'lucide-react';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email: formData.email, password: formData.password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center items-center space-y-6 px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-full p-12 shadow-xl">
              <Heart className="w-32 h-32 text-green-500" strokeWidth={1.5} />
              <div className="absolute top-0 right-0 bg-blue-500 rounded-full p-3">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              MediNest
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Your trusted partner in healthcare. Access quality medicines and healthcare products with ease.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">10k+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">50k+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center pt-8 pb-4">
              <Heart className="w-10 h-10 text-green-500 mr-2" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                MediNest
              </h1>
            </div>

            {/* Tab Switcher */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === 'login'
                    ? 'text-[#1193d4] border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === 'register'
                    ? 'text-[#1193d4] border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                Register
              </button>
            </div>

            <div className="p-8">
              {/* Login Form */}
              {activeTab === 'login' && (
                <form onSubmit={handleLogin} className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Welcome back!
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Login to access your MediNest account
                    </p>
                  </div>

                <div className="space-y-3">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Email Address
    </label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="you@example.com"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Password
    </label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>
</div>


                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1193d4] to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Login to MediNest
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('register')}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Register now
                    </button>
                  </p>
                </form>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegister} className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Create Account
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Join MediNest for better healthcare access
                    </p>
                  </div>

                  <div className="space-y-3">
  {/* Full Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Full Name
    </label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="John Doe"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>

  {/* Phone Number */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Phone Number
    </label>
    <div className="relative">
      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="123-456-7890"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Email Address
    </label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="you@example.com"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500  focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>

  {/* Password */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Password
    </label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Create a strong password"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500  focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>

  {/* Confirm Password */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      Confirm Password
    </label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        placeholder="Re-enter your password"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
        required
      />
    </div>
  </div>
</div>


                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                        Privacy Policy
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1193d4] to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Create MediNest Account
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Login here
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex items-center justify-center space-x-6 text-gray-500 text-xs">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span>Verified</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span>Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
