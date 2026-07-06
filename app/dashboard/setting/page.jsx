
"use client";
import { useState } from "react";
import { Eye, EyeOff, Bell, Moon, Sun, Check } from "lucide-react";

export default function Setting() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className={`min-h-screen p-4 md:p-8 ${isDarkMode ? "bg-slate-900 text-slate-100" : "bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 text-gray-900"}`}>
      <div className={`mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] ${isDarkMode ? "border-slate-700 bg-slate-800" : "border-gray-200 bg-white"}`}>

        {/* Heading */}
        <div className={`border-b px-6 py-8 md:px-8 ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-gray-200 bg-slate-50"}`}>
          <h1 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Account Settings
          </h1>
          <p className={`mt-2 text-sm md:text-base ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
            Manage your profile and account preferences.
          </p>
        </div>

        {/* Profile */}
        <div className={`mb-8 flex flex-col items-center gap-5 rounded-2xl border p-6 md:flex-row md:items-center md:justify-between ${isDarkMode ? "border-slate-700 bg-slate-900/70" : "border-gray-200 bg-gradient-to-r from-blue-50 to-slate-50"}`}>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <img
              src="https://i.pravatar.cc/120"
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-blue-500 object-cover shadow-md"
            />

            <div className="text-center md:text-left">
              <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Ashutosh Singh</h2>
              <p className={`${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Frontend Developer</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <button className={`rounded-lg border px-4 py-2 font-medium shadow-sm transition ${isDarkMode ? "border-slate-600 bg-slate-700 text-slate-100 hover:bg-slate-600" : "border-blue-200 bg-white text-blue-600 hover:bg-blue-50"}`}>
              Change Photo
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-pressed={emailNotifications}
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition ${emailNotifications ? "bg-blue-600 text-white" : isDarkMode ? "bg-slate-700 text-slate-100 border border-slate-600" : "bg-white text-blue-600 border border-gray-200"}`}
              >
                {emailNotifications ? <Check size={16} /> : <Bell size={16} />}
              </button>

              <button
                type="button"
                aria-pressed={isDarkMode}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition ${isDarkMode ? "bg-indigo-600 text-white" : "bg-white text-slate-700 border border-gray-200"}`}
              >
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-6 px-6 md:grid-cols-2 md:px-8">

          <div>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-slate-200" : "text-gray-700"}`}>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Ashutosh Singh"
              className={`w-full rounded-xl border p-3 shadow-sm transition focus:border-blue-500 focus:outline-none ${isDarkMode ? "border-slate-700 bg-slate-900 text-slate-100 focus:bg-slate-900" : "border-gray-300 bg-gray-50 focus:bg-white"}`}
            />
          </div>

          <div>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-slate-200" : "text-gray-700"}`}>
              Email
            </label>

            <input
              type="email"
              placeholder="ashutosh@gmail.com"
              className={`w-full rounded-xl border p-3 shadow-sm transition focus:border-blue-500 focus:outline-none ${isDarkMode ? "border-slate-700 bg-slate-900 text-slate-100 focus:bg-slate-900" : "border-gray-300 bg-gray-50 focus:bg-white"}`}
            />
          </div>

          <div>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-slate-200" : "text-gray-700"}`}>New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full rounded-lg border p-3 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDarkMode ? "border-slate-700 bg-slate-900 text-slate-100" : "border-gray-300 bg-gray-50"}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-slate-200" : "text-gray-700"}`}>Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full rounded-lg border p-3 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${isDarkMode ? "border-slate-700 bg-slate-900 text-slate-100" : "border-gray-300 bg-gray-50"}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-blue-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

        </div>

        {/* Switches */}
       

        {/* Button */}
        <div className="mt-8 px-6 pb-6 md:px-8">
          <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 md:w-auto md:px-10">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}