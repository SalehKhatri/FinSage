import React, { useEffect } from "react";
import "./Settings.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, user } from "../../utilities/Redux/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
function Settings() {
  const dispatch = useDispatch();
  const userDetails = useSelector(user);

  useEffect(() => {
    dispatch(fetchUserDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      <div className="settings_heading">
        <p>Your Account</p>
      </div>

      {userDetails.isLoading ? (
        <ClipLoader
          color={"#37689A"}
          loading={userDetails.isLoading}
          cssOverride={{
            display: "flex",
            margin: "50px auto",
          }}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
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
                  value={
                    userDetails?.user?.firstname +
                      " " +
                      userDetails?.user?.lastname || ""
                  }
                  name="name"
                  readOnly
                />
              </div>
              <div className="settings_fields">
                <label htmlFor="username">User Name</label>
                <input
                  className="settings_userFields"
                  type="text"
                  value={userDetails?.user?.username || ""}
                  name="username"
                  readOnly
                />
              </div>
              <div className="settings_fields">
                <label htmlFor="email">Email</label>
                <input
                  className="settings_userFields"
                  type="email"
                  value={userDetails?.user?.email || ""}
                  name="email"
                  readOnly
                />
              </div>
              <div className="settings_fields">
                <label htmlFor="password">Password</label>
                <input
                  className="settings_userFields"
                  type="password"
                  value={"password"}
                  name="password"
                  readOnly
                />
              </div>
              <div className="settings_fields">
                <label htmlFor="created at">Created at</label>
                <input
                  className="settings_userFields"
                  type="text"
                  value={userDetails?.user?.createdAt.slice(0, 10) || ""}
                  name="Created at"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
