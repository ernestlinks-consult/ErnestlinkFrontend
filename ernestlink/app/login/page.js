"use client";
import Link from "next/link";
import "@/app/css/index.css";
import "@/app/css/mediaQueries.css";
import Create_artifact from "@/app/components/Create_artifact";
import {Envelope,Lock,Eye} from 'react-bootstrap-icons';
import {useState} from "react";
// import { MdOutlineEmail } from "react-icons/fa";


export default function Login() {
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');
  const [visible,setVisible]=useState(false);

  function handleVisiblePassword() {

  }

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
        <form method="post" onSubmit={(e) => {
          e.preventDefault();
          const x={mail,password};
          console.log(x);
          setMail('');
          setPassword('');
        }}>

          <div className="inputs">
            <div className="input-group">
              {!mail&&<Envelope fontSize={32} fontWeight={500} color="#878484" />}
              <input type="email" placeholder="E-mail" value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="input-group">
              {!password&&<Lock fontSize={32} fontWeight={500} color="#878484" />}
              {password&&<Eye fontSize={32} fontWeight={500} color="#878484" onClick={() => setVisible(!visible)} />}
              <input type={visible} value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </div>
          </div>


          <div className="signup-button">
            <button type="submit" className="submit">
              Login
            </button>
          </div>

        </form>
      </div>
      <Create_artifact page="login" />
    </div>
  );
}
