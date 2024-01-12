import './style.css';
import { useParams, useLocation } from 'react-router-dom';

const ProfilePage = () => {

    const { id } = useParams();
    const location = useLocation();

    const avatar = location.state.avatar;
    const fullname = location.state.fullname;
    const job = location.state.job;
    const salary = location.state.salary;

    console.log(id);

    return (
        <>
            <div className='profile__page'>
                <div className='profile__page__people'>
                    <img className='profile__page__image' src={avatar} alt="Avatar" />
                    <div className='profile__fullname__job'>
                        <h1 className='profile__page__fullname'>{fullname}</h1>
                        <p className='profile__page__job'>{job}</p>
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
                        <p className='profile__details__salary'>${salary}</p>
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