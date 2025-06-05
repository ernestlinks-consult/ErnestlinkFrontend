import Link from "next/link";
import "../css/index.css";
import "../css/mediaQueries.css";
import Create_artifact from "../components/Create_artifact";
// import { MdOutlineEmail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Login() {
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
        <div className="inputs">
          <input type="text" placeholder="First Name" hidden />
          <input type="text" placeholder="Last Name" hidden />
          <input type="date" placeholder="mm/dd/yyyy" hidden />
          <input type="email" placeholder={<MdOutlineEmail /> + "Email"} />
          <input type="password" placeholder="Password" hidden />
          <input type="password" placeholder="Confirm Password" hidden />
        </div>
        <div className="buttons">
          <button className="one">Verify with Phone</button>
          <button className="two">Verify with Email</button>
          {/* <div className="text resend">
          <p>Resend passcode</p>
        </div> */}
        </div>

        <div className="signup-button">
          <button type="submit" className="submit">
            Signup
          </button>
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
