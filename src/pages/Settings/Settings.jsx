import React from "react";
import "./Settings.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
function Settings() {
  return (
    <div className="body">
      <div className="settings_heading">
        <p>Your Account</p>
      </div>
      <div className="settings_mainContainer">
        <div className="settings_container">
          <div className="settings_pfp">
            <PersonOutlineOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
          </div>
          <div className="settings_fieldsContainer">
            <div className="settings_fields">
              <label htmlFor="name">Your Name</label>
              <input
                className="settings_userFields"
                type="text"
                value={"Saleh khatri"}
                name="name"
                readOnly
              />
            </div>
            <div className="settings_fields">
              <label htmlFor="username">User Name</label>
              <input
                className="settings_userFields"
                type="text"
                value={"salehkhatri29"}
                name="username"
                readOnly
              />
            </div>
            <div className="settings_fields">
              <label htmlFor="email">Email</label>
              <input
                className="settings_userFields"
                type="email"
                value={"salehkhatri29@gmail.com"}
                name="email"
                readOnly
              />
            </div>
            <div className="settings_fields">
              <label htmlFor="password">Password</label>
              <input
                className="settings_userFields"
                type="password"
                value={"29@January"}
                name="password"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
