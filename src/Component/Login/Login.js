import React, { useState } from 'react';
import "./Login.css";
import facebook from "../Photos/facebook.png";
import google from "../Photos/google.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";


const Login = () => {
  const navigare = useNavigate();
  const [user, userLoading, userError] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    users,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const dlogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigare("/home")
      })
      .catch((error) => {
        console.log(error.message);
      });

  }
  return (
    <form onSubmit={dlogin}>
      <div className="hero min-h-screen login-page">
        <div >
          <div className="card w-full min-w-lg shadow-2xl ">
            <div className="card-body w-[400px] login-box">
              <h1 className='text-4xl text-white'>Please Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-ghost w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-ghost w-full max-w-xs" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover text-white">create a new acount/signup</Link>
                </label>
                {
                  error && <p className='text-2xl text-red-500'>{error.message}</p>
                }
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value={"Login"} />
                <div className='login-icons'>
                  <img src={google} alt="google" />
                  <img src={facebook} alt="facebook" />
                  {
                    user && <li>
                      <button className='border text-green-600' onClick={() => signOut(auth)}>sign out</button>
                    </li>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;