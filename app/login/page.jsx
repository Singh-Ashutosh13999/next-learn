"use client";
import Link from "next/link";
 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

 
export default function LoginPage() {
   
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRegistered(params.get("registered") === "1");

    const reason = params.get("reason");
    if (reason === "logged-out") {
      setNotice("You have been logged out Successfully. Please sign in again.");
    } else if (reason === "auth-required") {
      setNotice("Please sign in to continue.");
    }
  }, []);

  useEffect(() => {
    if (!error && !registered && !notice) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setError("");
      setRegistered(false);
      setNotice("");
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [error, registered, notice]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
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
        throw new Error(result.error || "Login failed.");
      }
      router.push("/home");
      router.refresh();
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-160px)] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-md lg:flex-row">
        <div className="flex flex-1 flex-col justify-center bg-slate-950/40 p-8 text-white sm:p-10 lg:p-14">
          <p className="mb-3 w-fit rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
            Welcome back
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Sign in to continue your learning journey
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            Access lessons, projects, and your dashboard in one place.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Login</h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your details to access your account.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              {error && (
                <div
                  className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-lg"
                  role="alert"
                >
                  {error}
                  {error.startsWith("No account found") && (
                    <>
                      {" "}
                      <Link href="/signup" className="font-semibold underline">
                        Sign up now
                      </Link>
                    </>
                  )}
                </div>
              )}
              {(registered || notice) && (
                <div
                  className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 shadow-lg"
                  role="status"
                >
                  {registered ? "Account created. Sign in to continue." : notice}
                </div>
              )}
              <button disabled={loading} className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              Don’t have an account?{" "}
              <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
