/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoader } from "../../utilities/Redux/loadingSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit = (data) => {
    const toastId = toast.loading("Please wait...");
    dispatch(setLoader(30));
    fetch(`${import.meta.env.VITE_API_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("auth-token", response.token);
          toast.success("Welcome back!", {
            id: toastId,
          });
          navigate("/");
        } else {
          console.log(response);
          toast.error(response.error, {
            id: toastId,
          });
        }
        console.log(response);
        dispatch(setLoader(100));
      })
      .catch((e) => {
        console.log(e);
        toast.error("Oops an error occured", {
          id: toastId,
        });
      });
    // dispatch(setLoader(70));
    // const resposne = await rawResponse.json();
    // if (resposne.error) {
    //   toast.error(resposne.error);
    // } else {
    //   localStorage.setItem("auth-token", resposne.token);
    //   toast.success("Welcome back!");
    //   navigate("/");
    // }
  };

  return (
    <div className="login_body">
      <div className="login_container">
        <div className="logo">
          <img src="/FinSage_Logo.png" />
        </div>
        <div className="login_form_container" onSubmit={handleSubmit(onSubmit)}>
          <form className="login_form" method="post">
            <input
              type="text"
              name="email"
              className="login_input_field"
              placeholder="Email address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
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
            <div className="password_div">
              <input
                type={isPassVisible ? "text" : "password"}
                name="Password"
                className="login_input_field"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <div
                className="eye_icon"
                onClick={() => setIsPassVisible((state) => !state)}
              >
                {!isPassVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="login_error_div">
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
            </div>
            <div className="login_utils">
              <p>Forgot password?</p>
              <NavLink to="/signup">
                <p>Create Account</p>
              </NavLink>
            </div>
            <div className="login_button">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
