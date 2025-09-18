"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (password !== "stayindigital@786") {
        throw new Error("Invalid credentials");
      }
      router.push("/admin/blogs/new");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="common-padding min-h-[60vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black/40 rounded-xl p-6 shadow-md shadow-white/30"
      >
        <h1 className="text-2xl text-white font-semibold mb-4">Admin Login</h1>
        <label className="block text-white/80 text-sm mb-2">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded bg-black/60 border border-white/20 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-primary text-white py-2 rounded disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}


