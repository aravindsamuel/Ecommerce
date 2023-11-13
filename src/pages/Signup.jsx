import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="login-wrapper py-2 auth-bg d-flex justify-content-center">
         <div className="auth-card mx-2">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
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
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <Link to='/login' className="button signup btn btn-outline-dark">Sign Up</Link>
                    </div>
                </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default Signup