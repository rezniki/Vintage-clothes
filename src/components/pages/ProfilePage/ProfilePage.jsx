import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProfilePage = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    console.log(id);
    
    useEffect(() => {
        fetch(`https://657b3715394ca9e4af13fd34.mockapi.io/profiles/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Load error profile user', error));
    }, [id]);

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className='profile__page'>
                <div className='profile__page__people'>
                    <img className='profile__page__image' src={user.avatar} alt="Avatar" />
                    <div className='profile__fullname__job'>
                        <h1 className='profile__page__fullname'>{user.name}</h1>
                        <p className='profile__page__job'>{user.job}</p>
                    </div>
                    <button className='profile__page__edit'>Edit team</button>
                </div>
                <div className='profile__details__info'>
                    <div className='profile__details__tasks'>
                        <h3 className='profile__task__title'>Tasks</h3>
                        <p className='profile__details__language'>english</p>
                        <p className='profile__english__update'>update english to B2</p>
                        <p className='profile__position__title'>position</p>
                        <p className='profile__details__position'>became S1+</p>
                        <p className='profile__details__salary'>${user.salary}</p>
                    </div>
                    <div className='profile__details__infomation'>
                        <p className='profile__information__title'>Information</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage 