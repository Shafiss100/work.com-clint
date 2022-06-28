import React from 'react';
import "./Login.css"

const Login = () => {
  return (
    <div class="hero min-h-screen login-page">
      <div >
        <div class="card w-full min-w-lg shadow-2xl ">
          <div class="card-body w-[400px] login-box">
            <h1 className='text-4xl text-white'>Please Login</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-ghost w-full max-w-xs" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-ghost w-full max-w-xs" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover text-white">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;