import './style.css';
import Basket from '../../../img/basket-1.svg';
import Modal from '../Modal/Modal.jsx';
import Busketfull from '../../../img/black-basket.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../common/LanguageSelector/i18n.js';
import ReactCreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import 'react-credit-cards-2/dist/lib/styles.scss';

const Clothes = (props) => {
    const [isModalShow, setModalShow] = useState(false);
    const [currentCard, setCurrentCard] = useState();
    const [isCartModalShow, setCartModalShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isCheckOut, setCheckOut] = useState(false);
    const { t } = useTranslation('translation', { i18n });
    const [showChangeLanguage, setShowChangeLanguage] = useState();
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

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
    
    const handleAddToCard = (item) => {
        setSelectedCard(item);
        setModalShow(false);
        setCartModalShow(true);
    } 

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <>
            {
                props.filter.map((card) => (
                    <div key={card.id} className='clothes__product' onClick={() => {
                        setCurrentCard(card);
                        setModalShow(true);
                        console.log(card);
                    }}>
                        <img className='clothes__product__image' src={card.image} alt='Cloth'/>
                        <div className='clothes__product__description'>
                            <p className='clothes__product__cost' onChange={showLanguage}>{t('Cost')}: {card.cost}$</p>
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
                    <img className='cart__payment' src={Busketfull} alt='Busketfull' onClick={() => {
                        setCartModalShow(false);
                        setCheckOut(true);
                    }}/>
                </div>
            </Modal>}
            {isCheckOut && <Modal title='Checkout' modalCloseClick={() => setCheckOut(false)}>
                <div className='checkout__content'>
                    <div className='checkout__credit__card'>
                        <ReactCreditCards 
                            number={state.number} 
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                        />
                    </div>
                    <div className='checkout__form__groups'>
                        <form className='checkout__form__group'>
                            <input
                                className='checkout__form__control'
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                pattern="[\d|]{16,22}"
                                required
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </form>

                        <form className='checkout__form__group'>
                            <input
                                className='checkout__form__control'
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </form>

                        <div className='checkout__form__row'>
                            <form className='checkout__form__values'>
                                <input 
                                    className='checkout__form__data'
                                    type="tel"
                                    name="expiry"
                                    placeholder="Valid Thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </form>

                            <form className='checkout__form__values'>
                                <input 
                                    className='checkout__form__cvc'
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    pattern="\d{3,4}"
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <p className='checkout__address'>Delivery throughout Belarus</p>
                <input className='checkout__address__text' type='text' placeholder='Enter your address'/>
                <button className='checkout__confirm'>Confirm</button>
            </Modal>}
        </>
    );
}

export default Clothes
