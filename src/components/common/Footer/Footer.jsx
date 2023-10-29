import './style.css';
import { useTranslation } from 'react-i18next';
import i18n from '../LanguageSelector/i18n.js';
import { useState } from 'react';

const Footer = () => {

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
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__company'>
                    <p className='footer__company__text' onChange={showLanguage}>{t('Company')}</p>
                    <p className='footer__company__subtext' onChange={showLanguage}>{t('Our company')}</p>
                </div>
                <div className='footer__links'>
                    <p className='footer__links__text' onChange={showLanguage}>{t('Useful links')}</p>
                    <p className='footer__links__subtext' onChange={showLanguage}>{t('relevance of vintage safe shopping consumer rights')}</p>
                </div>
                <div className='footer__contacts'>
                    <p className='footer__contacts__text' onChange={showLanguage}>{t('Other contacts')}</p>
                    <a className='footer__address' 
                        href='https://www.google.com/maps/search/%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C,+%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2%D0%B0+4,+18%2F5++/@53.7040964,23.8118643,17z/data=!3m1!4b1?authuser=0&entry=ttu' onChange={showLanguage}>
                        {t('Belarus, Hrodno, str.Kurchatova 4, 18/5,')}
                    </a>
                    <a className='footer__address' 
                        href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B0%D1%88%D0%B5%D1%80%D0%BE%D0%B2%D0%B0+11%2F1,+%D0%9B%D0%B8%D0%B4%D0%B0+231300/@53.8762812,25.2805329,17z/data=!3m1!4b1!4m6!3m5!1s0x46de8ab8b12dcae3:0x8fd01044703d13fa!8m2!3d53.8762781!4d25.2831078!16s%2Fg%2F12hk_z1ys?authuser=0&entry=ttu' onChange={showLanguage}>
                        {t('Belarus, Lida, str.Masherova 11-1, 9')}
                    </a>
                    <a className='footer__phonenumber' href='+375 33 623-10-62'>+375 33 623-10-62</a>
                    <a className='footer__gmail' href='https://www.google.com/intl/ru/gmail/about/'>
                        daravelb@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer