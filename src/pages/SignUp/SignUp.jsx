import React from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setLoader } from "../../utilities/Redux/loadingSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit = async (data) => {
    dispatch(setLoader(30));
    const rawResponse = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    dispatch(setLoader(70));
    const resposne = await rawResponse.json();
    if (resposne.error) {
      toast.error(resposne.error);
    } else {
      localStorage.setItem("auth-token", resposne.token);
      toast.success("Welcome!");
      navigate("/");
    }
    dispatch(setLoader(100));
    console.log(data);
  };

  return (
    <div className="signup_body">
      <div className="signup_container">
        <div className="logo">
          <img src="/FinSage_Logo.png" />
          <p>Create Account</p>
        </div>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="signup_form"
        >
          <div className="grid_field">
            <div className="child">
              <label className="label">First Name</label>
              <input
                required
                type="text"
                name="FirstName"
                className="signup_input_field"
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                  minLength: {
                    value: 2,
                    message: "min length is 2",
                  },
                })}
              />
              {errors.firstname?.message && (
                <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
                  <img
                    style={{ height: "18px", color: "red" }}
                    src="/error_icons/caution.svg"
                    alt=""
                  />
                  <p
                    role="alert"
                    style={{ color: "red" }}
                    className="login_error_message"
                  >
                    {errors.firstname?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="child">
              <label className="label">Last Name</label>
              <input
                required
                type="text"
                name="LastName"
                className="signup_input_field"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                  minLength: {
                    value: 2,
                    message: "min length is 2",
                  },
                })}
              />
              {errors.lastname?.message && (
                <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
                  <img
                    style={{ height: "18px", color: "red" }}
                    src="/error_icons/caution.svg"
                    alt=""
                  />
                  <p
                    role="alert"
                    style={{ color: "red" }}
                    className="login_error_message"
                  >
                    {errors.lastname?.message}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="label">Email</label>
            <input
              required
              name="Email"
              className="signup_input_field"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email?.message && (
              <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
                <img
                  style={{ height: "18px", color: "red" }}
                  src="/error_icons/caution.svg"
                  alt=""
                />
                <p
                  role="alert"
                  style={{ color: "red" }}
                  className="login_error_message"
                >
                  {errors.email?.message}
                </p>
              </div>
            )}
          </div>
          <label className="label">Username</label>
          <input
            type="text"
            name="Username"
            id="Username"
            className="signup_input_field"
            required
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 2,
                message: "min length is 2",
              },
            })}
          />
          {errors.username?.message && (
            <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
              <img
                style={{ height: "18px", color: "red" }}
                src="/error_icons/caution.svg"
                alt=""
              />
              <p
                role="alert"
                style={{ color: "red" }}
                className="login_error_message"
              >
                {errors.username?.message}
              </p>
            </div>
          )}
          <label className="label">Password</label>
          <div className="password">
            <input
              maxLength="100"
              type={isPassVisible ? "text" : "password"}
              name="Password"
              id="Password"
              required
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message: "Password does't meet requirements",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <div
              className="eye_icon"
              onClick={() => setIsPassVisible((state) => !state)}
            >
              {!isPassVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          {errors.password?.message && (
            <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
              <img
                style={{ height: "18px", color: "red" }}
                src="/error_icons/caution.svg"
                alt=""
              />
              <p
                role="alert"
                style={{ color: "red" }}
                className="login_error_message"
              >
                {errors.password?.message}
              </p>
            </div>
          )}
          <label className="pass_pattern">
            Your password must include the following:
            <ul>
              <li>8-100 characters</li>
              <li>Uppercase & lowercase letters</li>
              <li>Atleast one number or special symbol</li>
            </ul>
          </label>
          <label className="label">Confirm Password</label>
          <div className="password">
            <input
              maxLength="100"
              type={isConfirmPassVisible ? "text" : "password"}
              name="Confirm_Password"
              id="Confirm_Password"
              className="signup_input_field"
              required
              {...register("confirmpassword", {
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            <div
              className="eye_icon"
              onClick={() => setIsConfirmPassVisible((state) => !state)}
            >
              {!isConfirmPassVisible ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </div>
          </div>
          {errors.confirmpassword?.message && (
            <div style={{ display: "flex", gap: "6px", margin: "4px 0px" }}>
              <img
                style={{ height: "18px", color: "red" }}
                src="/error_icons/caution.svg"
                alt=""
              />
              <p
                role="alert"
                style={{ color: "red" }}
                className="login_error_message"
              >
                {errors.confirmpassword?.message}
              </p>
            </div>
          )}

          <div className="buttons">
            <button className="create_account" type="submit">
              Create Account
            </button>
            <NavLink to="/login">
              <p>Already have an account?log in</p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
