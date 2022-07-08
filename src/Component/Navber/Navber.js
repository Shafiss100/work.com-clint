import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import profileIcon from '../Photos/profile-icon.png';
import { signOut } from "firebase/auth";

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="flex-none">
                    
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {
                                    user.photoURL ? (<img src={user.photoURL} />):( <img src={profileIcon} />)
                                }
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={"profile"} class="justify-between">
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