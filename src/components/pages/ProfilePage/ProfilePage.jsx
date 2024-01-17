import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Star from '../../../img/icon-star.png';
import JavaScript from '../../../img/icon-javascript.png';
import ReactIcon from '../../../img/icon-react.png';

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
                <div className="profile__details__info">
                    <div className='profile__tasks__xobbies'>
                        <div className='profile__details__tasks'>
                            <h3 className='profile__task__title'>Tasks</h3>
                            <p className='profile__details__language'>english</p>
                            <p className='profile__english__update'>{user.language}</p>
                            <p className='profile__position__title'>position</p>
                            <p className='profile__details__position'>{user.position}</p>
                            <p className='profile__details__salary'>${user.salary}</p>
                            <button className='profile__task__spend'>Spend</button>
                        </div>
                        <div className='profile__details__xobbies'>
                            <div className='profile__details__xobii'>
                                <img className='profile__star__xobbi' src={Star} alt="Icon" />
                                <p className='profile__xobbi__text'>{user.xobbi1}</p>
                            </div>
                            <div className='profile__details__xobii'>
                                <img className='profile__star__xobbi' src={Star} alt="Icon" />
                                <p className='profile__xobbi__text'>{user.xobii2}</p>
                            </div>
                            <div className='profile__details__xobii'>
                                <img className='profile__star__xobbi' src={Star} alt="Icon" />
                                <p className='profile__xobbi__text'>{user.xobii3}</p>
                            </div>
                            <div className='profile__details__xobii'>
                                <img className='profile__star__xobbi' src={Star} alt="Icon" />
                                <p className='profile__xobbi__text'>{user.xobbi4}</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile__infomation__skills'>
                        <div className='profile__details__infomation'>
                            <h3 className='profile__information__title'>Information</h3>
                            <div className='profile__information__points'>
                                <div className='profile__information__point'>
                                    <p className='profile__english__title'>English level</p>
                                    <p className='profile__english__level'>{user.level}</p>
                                </div>
                                <div className='profile__information__point'>
                                    <p className='profile__birthday__title'>Birthday</p>
                                    <p className='profile__birthday__date'>{user.birthday}</p>
                                </div>
                                <div className='profile__information__point'>
                                    <p className='profile__group__title'>Work Group</p>
                                    <p className='profile__work__group'>{user.group}</p>
                                </div>
                                <div className='profile__information__point'>
                                    <p className='profile__room__title'>Room</p>
                                    <p className='profile__room__number'>{user.room}</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile__details__skills">
                            <h3 className='profile__skill__title'>Skills</h3>
                            <div className='profile__details__skill'>
                                <img className='profile__javascript__icon' src={JavaScript} alt="Icon" />
                                <p className='profile__javascript__text'>JavaScript</p>
                            </div>
                            <div className='profile__details__skill'>
                                <img className='profile__react__icon' src={ReactIcon} alt="Icon" />
                                <p className='profile__react__text'>React</p>
                            </div>
                        </div>
                        <button className='profile__edit__profile'>Edit Profile</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage 