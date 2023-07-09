import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import profileIcon from '../Photos/profile-icon.png';
import { signOut } from "firebase/auth";

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">WORK.com</a>
                </div>
                <div>
                    <NavLink className="mr-5" to={"/"}>Home</NavLink>
                    <NavLink className="mr-5" to={"/"}>Notification</NavLink>
                    <NavLink className="mr-5" to={"/"}>Message</NavLink>
                </div>
                <div class="flex-none">
                   
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {
                                    user.photoURL ? (<img  src={user.photoURL} />):( <img src={profileIcon} />)
                                }
                                
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact bg-slate-200 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={"/profile"} class="justify-between">
                                    Profile
                                </Link>
                            </li>
                           
                            <li><a onClick={() => signOut(auth)}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;