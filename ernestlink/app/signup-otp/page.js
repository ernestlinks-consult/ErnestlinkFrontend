import Bubble from "@/app/Images/Signup/bubble.png";
import Image from "next/image";
import Link from "next/link";
import "@/app/css/index.css";
import "@/app/css/mediaQueries.css";
import Create_artifact from "../components/Create_artifact";

export default function DesktopOtp() {
  return (
    <div className="main-container">
      <div className="create-account">
        <div className="signupotpConttainer">
          <h1>{"We can’t wait to set you up"}</h1>
          <div className="bubble-img">
            <Image
              src={Bubble}
              alt="bubble"
              width={150}
              className="bubbleico"></Image>
          </div>
          <div className="text">
            <p>We just sent you a passcode.</p>
            <p>
              Please enter the passcode we sent to {"e*********2@gmail.com"}
            </p>
          </div>
          <div className="otp-numbers">
            <input className="otpNum" maxLength={1}></input>
            <input className="otpNum" maxLength={1}></input>
            <input className="otpNum" maxLength={1}></input>
            <input className="otpNum" maxLength={1}></input>
          </div>
          <div className="buttons">
            <button className="one">Verify with Phone</button>
            <div className="text resend">
              <button className="two">Resend passcode</button>
            </div>
          </div>
          <div className="text">
            <p>
              Already have an account? <Link href="/">Click here!</Link>
            </p>
          </div>
        </div>
      </div>
      <Create_artifact />
    </div>
  );
}
