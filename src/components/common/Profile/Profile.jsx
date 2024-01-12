import './style.css';
import { Link } from 'react-router-dom';

const Profile = (props) => {

    return (
        <>
            {
                props.cardsUser.map((cardUser) => {
                    return (
                        <div key={cardUser.id} className='card__profile'>
                            <Link className='card__profile__url' to={`/profile/${cardUser.id}`} state={{avatar: cardUser.avatar, fullname: cardUser.name, job: cardUser.job, salary: cardUser.salary}}>
                                <img className='card__profile__image' src={cardUser.avatar} alt="Avatar" />
                                <p className='card__profile__fullname'>{cardUser.name}</p>
                            </Link>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Profile