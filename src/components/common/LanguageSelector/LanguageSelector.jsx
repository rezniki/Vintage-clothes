import './style.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js';
import { useState } from 'react';

const LanguageSelector = () => {
    const { t } = useTranslation('translation', { i18n });
    const [showOptions, setshowOptions] = useState(false);
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleOptions = () => {
        if (showOptions === false) {
            setshowOptions(true);
        };

        if (showOptions === true) {
            setshowOptions(false);
        };
    };

    return (
        <>
            <p className='language__text' onClick={toggleOptions}>
                {showOptions ?  <>Language ˄</> : <>Language ˅</>}
                {showOptions && (
                <div className='language__selector__content'>
                    <p className='language__selector__button' onClick={() => changeLanguage('en')}>{t('English')}</p>
                    <p className='language__selector__button' onClick={() => changeLanguage('ru')}>{t('Russian')}</p>
                </div>
            )}
            </p>
        </>
    );
}

export default LanguageSelector