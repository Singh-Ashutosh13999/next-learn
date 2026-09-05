"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password,
        }),
      });
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          "The server returned an unexpected response. Please restart the Next.js server and try again.",
        );
      }
      if (!response.ok) {
        throw new Error(result.error || "Signup failed.");
      }

      router.push("/login?registered=1");
    } catch (signupError) {
      setError(signupError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-md lg:flex-row">
        <div className="flex flex-1 flex-col justify-center bg-slate-950/40 p-8 text-white sm:p-10 lg:p-14">
          <p className="mb-3 w-fit rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
            Get started
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Create your learning account
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            Sign up today, then sign in to access lessons, projects, and your dashboard.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Sign up</h2>
            <p className="mt-2 text-sm text-slate-500">Create your account to continue.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Name <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input id="name" type="text" name="name" autoComplete="name" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input id="email" type="email" name="email" autoComplete="email" required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <input id="password" type={showPassword ? "text" : "password"} name="password" autoComplete="new-password" minLength={8} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">Confirm password</label>
                <input id="confirmPassword" type={showPassword ? "text" : "password"} name="confirmPassword" autoComplete="new-password" minLength={8} required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>

                      {error && (
                        <div
                          className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-lg"
                          role="alert"
                        >
                          {error}
                        </div>
                      )}
              <button disabled={loading} className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
