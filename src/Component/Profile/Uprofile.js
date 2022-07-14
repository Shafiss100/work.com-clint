import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Navber from '../Navber/Navber';

const Uprofile = () => {
    const [user, loading, error] = useAuthState(auth);


    const uLocation = (event) => {
        event.preventDefault();
        const userLocation = event.target.locationName.value;
        fetch('http://localhost:5000/ulocation', {
            method: 'PATCH',
            body: JSON.stringify({
                userLocation: userLocation,
                userEmail : user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => 
                alert(`Your update is save ${data.message}`)
            );
        
    }
    const uEducation = (event) => {
        event.preventDefault();
        const userEducation = event.target.education.value;
        fetch('http://localhost:5000/ueducation', {
            method: 'PATCH',
            body: JSON.stringify({
                userEducation: userEducation,
                userEmail: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => alert(`Your update is save ${data.message}`));
    }
    const uExperience = (event) => {
        event.preventDefault();
        const userExperience = event.target.experience.value;
        fetch('http://localhost:5000/uexperience', {
            method: 'PATCH',
            body: JSON.stringify({
                userExperience: userExperience,
                userEmail: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => alert(`Your update is save ${data.message}`));
    }
    const uExpart = (event) => {
        event.preventDefault();
        const userExpart = event.target.expart.value;
        fetch('http://localhost:5000/uexpart', {
            method: 'PATCH',
            body: JSON.stringify({
                userExpart: userExpart,
                userEmail: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => alert(`Your update is save ${data.message}`));
    }



    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));


    return (
        <div>
            <Navber></Navber>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-3xl text-primary-focus mx-auto my-5'>update your profile</h1>
                        <div class="card-body mx-5">
                            <h1>Name : {user.displayName}</h1>
                            <h1>Email : {user.email}</h1><br />
                            <div className='flex justify-between align-item-middle'>
                                <h1>Location : </h1><label for="modal-for-location" class="btn btn-primary">Edit</label>
                            </div>
                            <div className='flex justify-between align-item-middle'>
                                <h1>Education : </h1><label for="modal-for-education" class="btn btn-primary">Edit</label>
                            </div>
                            <div className='flex justify-between align-item-middle'>
                                <h1>Experience : </h1><label for="modal-for-experience" class="btn btn-primary">Edit</label>
                            </div>
                            
                            <div className='flex justify-between'>
                                <h1>Expart in : </h1><label for="modal-for-expart" class="btn btn-primary">Edit</label>
                            </div>
                            <Link className=' btn btn-accent mx-10 mt-5' to={"/profile"}>Done</Link>

                        </div>
                        <form onSubmit={uLocation}>
                            <input type="checkbox" id="modal-for-location" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <h1>Location</h1>
                                    <input type="text" name='locationName' className='input input-bordered input-secondary w-full mt-5 max-w-xs' />
                                    <div class="modal-action">
                                        <input className='btn btn-primary' type="submit" value={"save"} />
                                        <label for="modal-for-location" class="btn btn-primary" >next</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={uEducation}>
                            <input type="checkbox" id="modal-for-education" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <h1>Education</h1>
                                    <input type="text" name='education' className='input input-bordered input-secondary w-full mt-5 max-w-xs' />
                                    <div class="modal-action">
                                        <input className='btn btn-primary' type="submit" value={"save"} />
                                        <label for="modal-for-education" class="btn btn-primary">next</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={uExperience}>
                            <input type="checkbox" id="modal-for-experience" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <h1>Experience</h1>
                                    <input type="text" name='experience' className='input input-bordered input-secondary w-full mt-5 max-w-xs' />
                                    <div class="modal-action">
                                        <input className='btn btn-primary' type="submit" value={"save"} />
                                        <label for="modal-for-experience" class="btn btn-primary">next</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={uExpart}>
                            <input type="checkbox" id="modal-for-expart" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <h1>Expart</h1>
                                    <input type="text" name='expart' className='input input-bordered input-secondary w-full mt-5 max-w-xs' />
                                    <div class="modal-action">
                                        <input className='btn btn-primary' type="submit" value={"save"} />
                                        <label for="modal-for-expart" class="btn btn-primary">next</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uprofile;