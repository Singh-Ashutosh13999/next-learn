"use client";

import { useState } from "react";

export default function LogoutButton({ className = "" }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (!response.ok) {
        throw new Error("Logout failed.");
      }

      // Force a fresh request so protected pages cannot remain visible from the
      // client router cache after the auth cookie has been removed.
      window.location.replace("/login?reason=logged-out");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className={`${className} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
      {error && <p className="mt-2 text-center text-xs text-red-600">{error}</p>}
    </div>
  );
}
