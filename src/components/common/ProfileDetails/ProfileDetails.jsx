import './style.css';
import { useParams } from 'react-router-dom';

const ProfileDetails = (props) => {

    const { id } = useParams();
    
    const profile = props.cardsUser.find((cardUser) => cardUser.id === id);

    if (!profile) {
        return <p>Profile not found</p>
    }

    return (
        <>
            <div className='profile__details'>
                <div className='profile__details__people'>
                    <img className='profile__details__image' src={profile.avatar} alt="Avatar" />
                    <h1 className='profile__details__fullname'>{profile.name}</h1>
                    <p className='profile__details__job'>{profile.job}</p>
                    <button className='profile__details__team'>Edit team</button>
                </div>
                <div className='profile__details__info'>
                    <div className='profile__details__tasks'>
                        <h3 className='profile__task__title'>Tasks</h3>
                        <p className='profile__details__language'>english</p>
                        <p className='profile__english__update'>{profile.language}</p>
                        <p className='profile__position__title'>position</p>
                        <p className='profile__details__position'>{profile.position}</p>
                        <p className='profile__details__salary'>${profile.salary}</p>
                    </div>
                    <div className='profile__details__infomation'>
                        <p className='profile__information__title'>Information</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetails