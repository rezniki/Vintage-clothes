import './style.css';
import Modal from '../Modal/Modal.jsx';
import User from '../../../img/user-1.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../LanguageSelector/i18n';
import { useState } from 'react';

const SignIn = () => {

    const { t } = useTranslation('translation', { i18n });
    const [showChangeLanguage, setShowChangeLanguage] = useState();
    const [isModalShow, setModalShow] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const showLanguage = () => {
        if (showChangeLanguage === false) {
            setShowChangeLanguage(changeLanguage('en'));
        };

        if (showChangeLanguage === true) {
            setShowChangeLanguage(changeLanguage('ru'));
        };
    };
    
    const modalCloseClick = () => {
        if (isModalShow === true) {
            setModalShow(false);
        }
    };

    const modalCloseOpen = () => {
        if (isModalShow === false) {
            setModalShow(true);
        }
    };

    return (
        <>
            <p className='header__sign__button' onClick={modalCloseOpen} onChange={showLanguage}>{t('Sign')}</p>
            {isModalShow && <Modal title='Sign in' modalCloseClick={modalCloseClick}>
                <div className='sign__photo'>
                    <img className='sign__photo__user' src={User} alt='User'/>
                </div>
                <div className='sign__input'>
                    <input className='sign__input__username' type='text' placeholder='Username'/>
                    <input className='sign__input__password' type='text' placeholder='Password'/>
                </div>
                <button className='sign__in__button'>Sign in</button>
            </Modal>}
        </>
    );
}

export default SignIn