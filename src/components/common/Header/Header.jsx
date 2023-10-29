import './style.css';
import Gramopghone from '../../../img/gramopghone-1.svg';
import Instagram from '../../../img/instagram-1.svg';
import Telegram from '../../../img/telegram-1.svg';
import Viber from '../../../img/viber-1.svg';
import Profile from '../../../img/profile-1.svg';
import LanguageSelector from '../LanguageSelector/LanguageSelector.jsx';
import { useTranslation } from 'react-i18next';
import i18n from '../LanguageSelector/i18n.js';
import { useState } from 'react';

const Header = () => {

    const { t } = useTranslation('translation', { i18n });
    const [showChangeLanguage, setShowChangeLanguage] = useState();

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
    }

    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__logo'>
                    <img className='header__gramopghone' src={Gramopghone} alt='Gramopghone'/>
                    <div className='header__logo__text'>
                        <h1 className='header__title' onChange={showLanguage}>{t('Millésime')}</h1>
                        <p className='header__text' onChange={showLanguage}>{t('magasin de vêtements et bijoux vintage')}</p>
                    </div>
                </div>
                <nav className='header__menu'>
                    <a className='header__link' href="/" onChange={showLanguage}>{t('Home')}</a>
                    <a className='header__link' href="/clothes" onChange={showLanguage}>{t('ClothesHeader')}</a>
                    <a className='header__link' href="/accessories" onChange={showLanguage}>{t('Accessories')}</a>
                    <a className='header__link' href="/bijouterie" onChange={showLanguage}>{t('Bijouterie')}</a>
                    <a className='header__link' href="/shoes" onChange={showLanguage}>{t('Shoes')}</a>
                    <a className='header__link' href="/other" onChange={showLanguage}>{t('Other')}</a>
                    <LanguageSelector />
                </nav>
                <div className='header__icons'>
                    <img className='header__icon' src={Instagram} alt='Instagram'/>
                    <img className='header__icon' src={Telegram} alt='Telegram'/>
                    <img className='header__icon' src={Viber} alt='Viber'/>
                    <img className='header__icon' src={Profile} alt='Profile'/>
                </div>
            </div>
        </header>
    );
}

export default Header
