import type React from "react"
import { FcGoogle } from "react-icons/fc"
import "./SignInForm.css"

const SignInForm: React.FC = () => {
  return (
    <div className="sign-in-form">
      <h2>Welcome Back!</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="sign-in-button">Sign In</button>
      <button className="sign-up-button">Create Account</button>
      <div className="divider">
        <span>Or</span>
      </div>
      <button className="google-button">
        <FcGoogle />
        Continue with Google
      </button>
    </div>
  )
}

export default SignInForm

