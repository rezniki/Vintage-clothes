import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../../common/Profile/Profile.jsx';

const ProfilePage = () => {

    const [cardsUser, setCardsUser] = useState([]);

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await axios.get('https://657b3715394ca9e4af13fd34.mockapi.io/profiles');

                setCardsUser(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        
        fetchUser();
    }, []);

    return (
        <>
            <div className='profile'>
                <div className='profile__content'>
                    <h1 className='profile__title'>Awesome team</h1>
                    <p className='profile__text'>May the force be with you</p>
                </div>

                <div className='profile__peoples'>
                    <Profile cardsUser={cardsUser} />
                    {
                        console.log(cardsUser)
                    }
                </div>
            </div>
        </>
    );
}

export default ProfilePage