import './style.css';
import Profile from '../../../img/profile-1.svg';
import Register from '../Register/Register.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import { useState } from 'react';

const Selector = () => {

    const [showOptions, setshowOptions] = useState(false);

    const toggleOptions = () => {
        if (showOptions === false) {
            setshowOptions(true);
        };

        if (showOptions === true) {
            setshowOptions(false);
        };
    };

    return (
        <>
            <img className='header__register' src={Profile} alt='Profile' onClick={toggleOptions}/>
            {showOptions && (
                <div className='header__register__content'>
                    <Register />
                    <SignIn />
                    <a className='header__profile' href='/members'>Members</a>
                    <a className='header__profile_page' href="/profile/1233">ProfilePage</a>
                </div>
            )}
        </>
    );
}

export default Selector