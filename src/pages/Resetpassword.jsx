import React from 'react'
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <>
          <div className="login-wrapper py-2 auth-bg d-flex justify-content-center">
          <div className="auth-card mx-2">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <div>
                    <div className="mt-3 d-flex justify-content-center gap-1 align-items-center">
                        <Link to='/login' className="button signup btn btn-outline-dark">OK</Link>
                    </div>
                </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default Resetpassword