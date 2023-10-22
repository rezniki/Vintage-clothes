import './style.css';
import Basket from '../../../img/basket-1.svg';
import Modal from '../Modal/Modal.jsx';
import { useState } from 'react';
import Busketfull from '../../../img/black-basket.svg';

function Clothes(props) {
    const [isModalShow, setModalShow] = useState(false);
    const [currentCard, setCurrentCard] = useState();

    const modalCloseClick = () => {
        if (isModalShow === true) {
            setModalShow(false);
        }
    }
    
    return (
        <>
            {
                props.data.map((item) => (
                    <div className='clothes__product' onClick={() => {
                        setCurrentCard(item);
                        setModalShow(true);
                    }}>
                        <img className='clothes__product__image' src={item.image} alt='Cargo'/>
                        <div className='clothes__product__description'>
                            <p className='clothes__product__cost'>Cost: {item.cost}$</p>
                            <img className='clothes__product__basket' src={Basket} alt='Basket'/>
                        </div>
                    </div>
                ))
            }
            {isModalShow && <Modal title={currentCard.stamp} modalCloseClick={modalCloseClick}>
                <div className='modal__description'>
                    <img className='modal__image' src={currentCard.image} alt='Cargo'/>
                    <p className='modal__text'>{currentCard.text} {currentCard.size} cm.</p>
                </div>
                <div className='modal__cost'>
                    <p className='modal__product__cost'>Cost: {currentCard.cost}$</p>
                    <img className='modal__product__basket' src={Busketfull} alt='Bucketfull'/>
                </div>
            </Modal>}
        </>
    );
}

export default Clothes
