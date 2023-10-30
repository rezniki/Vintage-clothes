import './style.css';
import Profile from '../../../img/profile-1.svg';
import { useTranslation } from 'react-i18next';
import i18n from '../LanguageSelector/i18n';
import { useState } from 'react';

const RegSelector = () => {

    const { t } = useTranslation('translation', { i18n });
    const [showChangeLanguage, setShowChangeLanguage] = useState();
    const [showOptions, setshowOptions] = useState(false);
    const [isModalShow, setModalShow] = useState(false);

    const toggleOptions = () => {
        if (showOptions === false) {
            setshowOptions(true);
        };

        if (showOptions === true) {
            setshowOptions(false);
        };
    };

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

    return (
        <>
            <img className='header__register' src={Profile} alt='Profile' onClick={toggleOptions}/>
            {showOptions && (
                <div className='header__register__content'>
                    <p className='header__register__button' onChange={showLanguage}>{t('Registration')}</p>
                    {}
                    <p className='header__sign__button' onChange={showLanguage}>{t('Sign')}</p>
                </div>
            )}
        </>
    );
}

export default RegSelector