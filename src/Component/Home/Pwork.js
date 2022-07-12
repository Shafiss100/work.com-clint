import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navber from '../Navber/Navber';

const Pwork = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className=' w-full '>
            <Navber></Navber>
            <div className='drop-shadow-2xl  '>
                <form className='w-[600px] mx-auto my-[7%] bg-primary p-10 rounded-3xl'>
                    <h1 className='text-4xl text-center text-secondary mb-10'>Post work</h1>
                    <div className='flex justify-between  '>
                        <h1>Name : </h1><h1>{user.displayName}</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1>Email : </h1><h1>{user.email}</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1>Location : </h1><input className='input input-bordered input-primary w-full max-w-xs' type="text" />
                    </div>
                    <div className='flex justify-between'>
                        <h1>Title : </h1><textarea class="textarea w-[350px] textarea-primary" placeholder="Work title"></textarea>
                    </div>
                    <div className='flex justify-between'>
                        <h1>Describtion : </h1><textarea class="textarea w-[350px] textarea-primary" placeholder="work description"></textarea>
                    </div>
                    <div className='w-full'>
                        <input className='btn btn-secondary mx-[400px] m-9' type="submit" value="Post" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Pwork;