import React from 'react'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <>
    <div className="login-wrapper py-2 auth-bg d-flex justify-content-center">
    <div className="auth-card mx-2">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                    <div className="mt-4 d-flex justify-content-center gap-3 align-items-center">
                        <Link to='/reset-password' className="button btn btn-outline-dark signup">Submit</Link>
                        <Link to='/login' className="button btn btn-outline-dark">Cancel</Link>
                    </div>
                </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default Forgotpassword