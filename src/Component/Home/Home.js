import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import Navber from '../Navber/Navber';
import Work from './Work';
import Worker from './Worker';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div >
            <Navber></Navber>
            <div className='flex'>
                <div className='w-[50%]'>
                    <Work></Work>
                </div>


                <div class="divider divider-horizontal"></div>


                <div className='w-[50%]'>
                    <Worker></Worker>
                </div>

            </div>
        </div>
    );
};

export default Home;