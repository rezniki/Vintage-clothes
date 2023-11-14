import './style.css';
import Modal from '../Modal/Modal.jsx';
import User from '../../../img/user-1.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../LanguageSelector/i18n';
import { useState } from 'react';

const Register = () => {

    const { t } = useTranslation('translation', { i18n });
    const [showChangeLanguage, setShowChangeLanguage] = useState();
    const [isModalShow, setModalShow] = useState(false);
    let [userData, setUserData] = useState([
        {
            userName: '',
            password: null
        }
    ]);
    let [newUserName, setNewUserName] = useState();
    let [newPassword, setNewPssword] = useState();

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
            <p className='header__register__button' onClick={modalCloseOpen} onChange={showLanguage}>{t('Registration')}</p>
            {isModalShow && <Modal title='Registration' modalCloseClick={modalCloseClick}>
                <div className='register__photo'>
                    <img className='register__photo__user' src={User} alt='User'/>
                </div>
                <div className='register__input'>
                    <div className='register__username'>
                        <p className='register__username__symbol'>@</p>
                        <input className='register__input__username' type='text' placeholder='Username' value={newUserName} 
                            onChange={(event) => {
                                setNewUserName(event.target.value);
                            }}/>
                    </div>
                    <div className='register__password'>
                        <p className='register__password__symbol'>*</p>
                        <input className='register__input__password' type='text' placeholder='Password' value={newPassword} 
                            onChange={(event) => {
                                setNewPssword(event.target.value);
                            }}/>
                    </div>
                </div>
                <div className='register__remember'>
                    <input type='checkbox' id='remember' name='remember'/>
                    <label className='register__remember__text' for='remember'>Remember me</label>
                </div>
                <button className='register__complete' onClick={() => {
                    setUserData([
                        ...userData,
                        {
                            userName: newUserName,
                            password: newPassword
                        }
                    ])
                }}>Complete</button>
            </Modal>}
        </>
    );
}

export default Register