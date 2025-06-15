"use client";
import Link from "next/link";
import "../css/index.css";
import "../css/mediaQueries.css";
import Create_artifact from "../components/Create_artifact";
// import { Envelope, Lock, Eye } from "react-bootstrap-icons";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
// import { MdOutlineEmail } from "react-icons/fa";
import { login as loginApi } from "../../services/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginApi(mail, password);

      // ✅ Store token and user info in cookies
      Cookies.set("token", data.token, { expires: 7 }); // store token for 7 days
      Cookies.set(
        "user",
        JSON.stringify({
          email: data.email,
          name: data.name,
          role: data.role,
        }),
        { expires: 7 }
      );

      // ✅ Redirect user based on role
      if (data.role === "ADMIN") {
        router.push("/dashboard/facilitator");
      } else if (data.role === "FACILITATOR") {
        router.push("/dashboard/facilitator");
      } else {
        router.push("/adminlogin");
      }
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
            {
              " Enter your phone number below.We'll send you a code to complete your sign-in"
            }
          </p>
        </div>
        <form method="post" onSubmit={handleAdminLogin}>
          <div className="inputs">
            <div className="input-group">
              {!mail && (
                <EmailIcon
                  fontSize="large"
                  sx={{ color: "#878484", fontWeight: 500 }}
                />
              )}
              <input
                type="email"
                placeholder="E-mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="input-group">
              {!password && (
                <LockIcon
                  fontSize="large"
                  sx={{ color: "#878484", fontWeight: 500 }}
                />
              )}
              {password && (
                <VisibilityIcon
                  fontSize="large"
                  sx={{ color: "#878484", fontWeight: 500, cursor: "pointer" }}
                  onClick={() => setVisible(!visible)}
                />
              )}
              <input
                type={visible ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: 8 }}>{error}</div>
          )}
          <div className="signup-button">
            <button type="submit" className="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
      <Create_artifact page="login" />
    </div>
  );
}
