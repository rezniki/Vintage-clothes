import './style.css';
import Basket from '../../../img/basket-1.svg';
import Modal from '../Modal/Modal.jsx';
import Busketfull from '../../../img/black-basket.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../common/LanguageSelector/i18n.js';

const Clothes = (props) => {
    const [isModalShow, setModalShow] = useState(false);
    const [currentCard, setCurrentCard] = useState();
    const [isCartModalShow, setCartModalShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
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

    const modalCloseClick = () => {
        if (isModalShow === true) {
            setModalShow(false);
        }
    }
    
    const handleAddToCard = (card) => {
        setSelectedCard(card);
        setModalShow(false);
        setCartModalShow(true);
    } 

    return (
        <>
            {
                props.filter.map((item) => (
                    <div className='clothes__product' onClick={() => {
                        setCurrentCard(item);
                        setModalShow(true);
                    }}>
                        <img className='clothes__product__image' src={item.image} alt='Cloth'/>
                        <div className='clothes__product__description'>
                            <p className='clothes__product__cost' onChange={showLanguage}>{t('Cost')}: {item.cost}$</p>
                            <img className='clothes__product__basket' src={Basket} alt='Basket' />
                        </div>
                    </div>
                ))
            }
            {isModalShow && <Modal title={currentCard.stamp} modalCloseClick={modalCloseClick}>
                <div className='modal__description'>
                    <img className='modal__image' src={currentCard.image} alt='Cloth'/>
                    <p className='modal__text'>{currentCard.text} {currentCard.size} cm.</p>
                </div>
                <div className='modal__cost'>
                    <p className='modal__product__cost'>Cost: {currentCard.cost}$</p>
                    <img className='modal__product__basket' src={Busketfull} alt='Bucketfull' onClick={() => handleAddToCard(currentCard)}/>
                </div>
            </Modal>}
            {isCartModalShow && <Modal title='Cart' modalCloseClick={() => setCartModalShow(false)}>
                <div className='cart__product'>
                    <img className='cart__product__image' src={selectedCard.image} alt='Cloth'/>
                    <div className='cart__product__description'>
                        <p className='cart__product__cost'>Cost: {selectedCard.cost}$</p>
                        <p className='cart__button__delete'>-</p>
                    </div>
                </div>
                <div className='cart__summary'>
                    <p className='cart__summary__cost'>Summary: {selectedCard.cost}$</p>
                    <img className='cart__payment' src={Busketfull} alt='Busketfull'/>
                </div>
            </Modal>}
        </>
    );
}

export default Clothes
