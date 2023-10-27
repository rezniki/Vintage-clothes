import './style.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSelector = () => {
    const { t, i18next } = useTranslation();
    const [showOptions, setshowOptions] = useState(false);
    
    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
        setshowOptions(false);
    };

    const toggleOptions = () => {
        if (showOptions === false) {
            setshowOptions(true);
        };
    };
    
    return (
        <>
            <p className='language__text' onClick={toggleOptions}>Language ˅</p>
            {showOptions && (
                <div className='language__selector__content'>
                    <button className='language__selector__button' onClick={() => changeLanguage('en')}>{t('English')}</button>
                    <button className='language__selector__button' onClick={() => changeLanguage('ru')}>{t('Russian')}</button>
                </div>
            )}
        </>
    );
}

export default LanguageSelector