import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup_body">
      <div className="signup_container">
        <div className="logo">
          <img src="/FinSage_Logo.png" />
          <p>Create Account</p>
        </div>
        <div className="signup_form">
          <div className="grid_field">
            <div className="child">
              <label className="label">First Name</label>
              <input
                type="text"
                name="FirstName"
                className="signup_input_field"
              />
            </div>
            <div className="child">
              <label className="label">Last Name</label>
              <input
                type="text"
                name="LastName"
                className="signup_input_field"
              />
            </div>

            
            {/* <div>
              <label className="label">Birthdate</label>
              <input
                type="date"
                name="BirthDate"
                className="signup_input_field"
              />
            </div> */}
          </div>
          <div>
              <label className="label">Email</label>
              <input type="email" name="Email" className="signup_input_field" />
            </div>
          <label className="label">Username</label>
          <input
            type="text"
            name="Username"
            id="Username"
            className="signup_input_field"
            required
          />
          <label className="label">Password</label>
          <input
            pattern="^(?=.*([A-Z].*[a-z].*[\d+_%@!$*~-]|\d.*[a-z+_%@!$*~-]|[+_%@!$*~-].*[a-z\d])|[a-z].*([A-Z].*[\d+_%@!$*~-]|\d.*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Z\d])|\d.*([A-Z].*[a-z+_%@!$*~-]|[a-z].*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Za-z])|[+_%@!$*~-].*([A-Z].*[a-z\d]|[a-z].*[A-Z\d]|\d.*[A-Za-z])))(?!.*{{escapeRegExp(username)}})[\w+_%@!$*~]+$"
            minLength="8"
            maxLength="100"
            type="password"
            name="Password"
            id="Password"
            className="signup_input_field"
            required
          />
          <label className="pass_pattern">
            Your password must include the following:
            <ul>
              <li>8-100 characters</li>
              <li>Uppercase & lowercase letters</li>
              <li>Atleast one number or special symbol</li>
            </ul>
          </label>
          <label className="label">Confirm Password</label>
          <input
            pattern="^(?=.*([A-Z].*[a-z].*[\d+_%@!$*~-]|\d.*[a-z+_%@!$*~-]|[+_%@!$*~-].*[a-z\d])|[a-z].*([A-Z].*[\d+_%@!$*~-]|\d.*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Z\d])|\d.*([A-Z].*[a-z+_%@!$*~-]|[a-z].*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Za-z])|[+_%@!$*~-].*([A-Z].*[a-z\d]|[a-z].*[A-Z\d]|\d.*[A-Za-z])))(?!.*{{escapeRegExp(username)}})[\w+_%@!$*~]+$"
            minLength="8"
            maxLength="100"
            type="password"
            name="Confirm_Password"
            id="Confirm_Password"
            className="signup_input_field"
            required
          />

          {/* <input type="checkbox" name="form_sign" id="form_sign" />
          <label className="label">
            By ticking the box, you acknowledge you have read and agreed to our
            Terms of Use and Privacy Policy.
          </label> */}
          <div className="buttons">
            <button className="create_account" type="button">
              Create Account
            </button>
            <NavLink to="/login"><p>Already have an account?log in</p></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
