"use client";
import Link from "next/link";
import { useState } from "react";
import { login as loginApi } from "../../services/api";
import "../css/index.css";
import "../css/mediaQueries.css";
import Create_artifact from "../components/Create_artifact";
// import { MdOutlineEmail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  
  // Use the login function from services/api.js
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Call the login API function
      const data = await loginApi(email, password);
    
      // Store tokens in localStorage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      
      // Redirect or update auth state
      router.push("/dashboard/facilitator");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="create-account">
        <div className="head">
          <h1>Login</h1>
          <p>
            {"Enter your email and password to sign in."}
          </p>
        </div>
        <form className="inputs" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
          <div className="signup-button">
            <button type="submit" className="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="text">
          <p>
            Don't have an account? <Link href="/signup">Sign up here!</Link>
          </p>
        </div>
      </div>
      <Create_artifact />
    </div>
  );
}
