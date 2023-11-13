import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-wrapper py-2 auth-bg d-flex justify-content-center">
      <div className="auth-card mx-2">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                    <Link to='/forgot-password'>Forgot Password ?</Link>
                    <div className="mt-4 d-flex justify-content-center gap-5 align-items-center">
                        <Link type="submit" className="button btn btn-outline-dark">Login</Link>
                        <Link to='/signup' className="button signup btn btn-outline-dark">Signup</Link>
                    </div>
                </div>
              </form>
            </div>
      </div>
    </>
  );
};

export default Login;
