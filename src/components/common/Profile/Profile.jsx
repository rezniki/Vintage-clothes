import './style.css';

const Profile = (props) => {

    return (
        <>
            {
                props.cardsUser.map((cardUser) => {
                    return (
                        <div key={cardUser.id} className='card__profile'>
                            <img className='card__profile__image' src={cardUser.avatar} alt="Avatar" />
                            <p className='card__profile__fullname'>{cardUser.name}</p>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Profile