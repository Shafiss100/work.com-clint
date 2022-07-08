import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const navigare = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.name.value;
        createUserWithEmailAndPassword(email, password)
            .then(async() => {
                await updateProfile({displayName})
                navigare("/")
            })
            .catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <form onSubmit={signup}>
            <div className="hero min-h-screen login-page">

                <div >
                    <div className="card w-full min-w-lg shadow-2xl ">
                        <div className="card-body w-[400px] login-box">
                            <h1 className='text-4xl text-white'>Please Sign up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">User name</span>
                                </label>
                                <input type="text" name='name' placeholder="User Name" className="input input-ghost w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-ghost w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-ghost w-full max-w-xs" />

                            </div>
                            <Link to={"/"} className="label-text-alt link link-hover text-white">Already have an acount/login</Link>
                            {
                                error && <p className='text-2xl text-red-500'>{error.message}</p>
                            }
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value={"signup"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default SignUp;