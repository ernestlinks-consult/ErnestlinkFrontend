import "@/app/css/index.css";
import "@/app/css/mediaQueries.css";
import Link from "next/link";
import Create_artifact from "../components/Create_artifact";

export default function Create_account() {
  return (
    <div className="main-container">
      <div className="create-account">
        <div className="head">
          <h1>Create Account</h1>
          <p>
            {
              "Enter your email below. We'll send you a code to complete your sign-up."
            }
          </p>
        </div>

        {/* input textboxes */}
        <div className="inputs">
          <input type="text" placeholder="First Name" hidden />
          <input type="text" placeholder="Last Name" hidden />
          <input type="date" placeholder="mm/dd/yyyy" hidden />
          <input type="email" placeholder="✉️ Email" />
          <input type="password" placeholder="Password" hidden />
          <input type="password" placeholder="Confirm Password" hidden />
        </div>

        {/* sign up button */}
        <div className="signup-button">
          <button type="submit">Signup</button>
        </div>
        <div className="text">
          <p>
            Already have an account? <Link href="/">Click here!</Link>
          </p>
        </div>
      </div>
      <Create_artifact />
    </div>
  );
}
