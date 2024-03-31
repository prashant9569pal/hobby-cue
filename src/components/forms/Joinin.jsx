// Importing useState hook from React
import { useState } from "react";
// Importing styles and icons
import "./forms.style.css"; // Importing form styles
import IconGoogleColor from "../icons/IconGoogleColor"; // Importing Google icon component
import IconFacebookColor from "../icons/IconFacebookColor"; // Importing Facebook icon component

// Joinin component function
function Joinin() {
  // State to manage password visibility
  const [show, setShow] = useState(false);

  // Rendering JSX for the Joinin component
  return (
    <div className="d-flex flex-md-column flex-column-reverse">
      {/* Authentication buttons */}
      <div className="auth-btns-group d-grid gap-3">
        {/* Button to continue with Google */}
        <button className="btn btn-outline" type="button">
          <IconGoogleColor /> Continue with Google
        </button>
        {/* Button to continue with Facebook */}
        <button className="btn btn-outline" type="button">
          <IconFacebookColor /> Continue with Facebook
        </button>
      </div>
      {/* Divider */}
      <div className="divider mb-3 mt-3">
        {/* Horizontal line */}
        <hr className="border-2" />
        <span>Or connect with</span>
      </div>
      {/* Form */}
      <form>
        {/* Email input */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {/* Password input */}
        <div className="mb-3 position-relative d-flex align-items-center">
          <input
            type={`${show ? "text" : "password"}`}
            className="form-control"
            placeholder="Password"
            id="exampleInputPassword1"
          />
          {/* Eye icon to toggle password visibility */}
          <i
            className={`bi bi-eye${
              show ? "-slash" : ""
            } position-absolute end-0 m-3`}
            id="togglePassword"
            onClick={() => setShow(!show)}
          ></i>
        </div>
        {/* Terms of service and privacy policy */}
        <small className="d-block  text-center mb-3">
          By continuing, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </small>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-100">
          Agree and Continue
        </button>
      </form>
    </div>
  );
}

// Exporting the Joinin component as the default export
export default Joinin;
