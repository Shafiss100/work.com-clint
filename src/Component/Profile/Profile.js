import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Navber from '../Navber/Navber';
import profileIcon from "../Photos/profile-icon.png"

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
   useEffect(()=>{
       fetch(`http://localhost:5000/user?email=${user.email}`)
           .then((response) => response.json())
           .then((data) => console.log(data));
   },[user])
    return (
        <div>
            <Navber></Navber>
            <div>
                <div class="hero-content hero min-w-full min-h-screen bg-base-200">
                    <div class="">
                        <div class="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <div class="card-body ">
                                <h1 className='text-5xl underline text-center mb-5'>Profile</h1>
                                <div className='w-20 mx-auto'>
                                    {
                                        user.photoURL ? <img class="mask mask-circle" src={user.photoURL} alt="" /> : <img class="mask mask-circle" src={profileIcon} alt="" />
                                    }
                                </div>
                                <h1>Name :  <span className='text-xl '>{user.displayName }</span></h1>
                                <h1>Email : <span className='text-xl'>{user.email }</span> </h1>
                                <h1>Location (<span className='text-base-400'>district</span>) : { }</h1>
                                <h1>Experince : { }</h1>
                                <div className=''>
                                    <Link className='mx-auto btn btn-primary' to={"/uprofile"}>Update</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;


// for edit (form)

// <div class="hero min-h-screen bg-base-200">
//     <div class="hero-content flex-col lg:flex-row-reverse">
//         <div class="text-center lg:text-left">
//             <h1 class="text-5xl font-bold">Login now!</h1>
//             <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//         </div>
//         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <div class="card-body">
//                 <div class="form-control">
//                     <label class="label">
//                         <span class="label-text">Email</span>
//                     </label>
//                     <input type="text" placeholder="email" class="input input-bordered" />
//                 </div>
//                 <div class="form-control">
//                     <label class="label">
//                         <span class="label-text">Password</span>
//                     </label>
//                     <input type="text" placeholder="password" class="input input-bordered" />
//                     <label class="label">
//                         <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
//                     </label>
//                 </div>
//                 <div class="form-control mt-6">
//                     <button class="btn btn-primary">Login</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>