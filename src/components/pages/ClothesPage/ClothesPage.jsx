import Header from '../../common/Header/Header.jsx';
import './style.css';
import Clothes from '../../common/Clothes/Clothes.jsx';
import { data } from './data.js';
import Footer from '../../common/Footer/Footer.jsx';
import Modal from '../../common/Modal/Modal.jsx';
import MultiRangeSlider from 'multi-range-slider-react';
import CheckBox from '../../common/CheckBox/CheckBox.jsx';
import GenderBox from '../../common/GenderBox/GenderBox.jsx';
import { filterdata } from './filterdata.js';
import { genderdata } from './genderdata.js';
import { useState } from 'react';

const ClothesPage = () => {

    const [isModalShow, setModalShow] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(9999);

    const modalCloseClick = () => {
        if (isModalShow === true) {
            setModalShow(false);
        }
    };

    const modalOpenClick = () => {
        if (isModalShow === false) {
            setModalShow(true);
        }
    }

    const handleInput = (e) => {
	    setMinValue(e.minValue);
	    setMaxValue(e.maxValue);
    };

    const SliderStyle = {
        border: 'none',
        boxShadow: 'none',
        padding: '25px 10px',  
    };

    const Label = Boolean(true);
    const Ruler = Boolean(false);

    return (
        <>
            <Header/>
            <div className='clothes'>
                <div className='clothes__filters'>
                    <h3 className='clothes__filter' onClick={modalOpenClick}>Filters ˅</h3>
                    {isModalShow && <Modal title='Filters' modalCloseClick={modalCloseClick}>
                        <h3 className='filter__price'>Price filter</h3>
                        <MultiRangeSlider min={0} max={9999} step={500} minValue={minValue} maxValue={maxValue} style={SliderStyle} label={Label} ruler={Ruler} barInnerColor='#000000' thumbLeftColor='#000000' thumbRightColor='#000000' onInput={(e) => {handleInput(e)}}/>
                        <CheckBox filterdata={filterdata} />
                        <GenderBox genderdata={genderdata} />
                        <button className='filter__apply__button'>Apply</button>    
                    </Modal>}
                    <h1 className='clothes__title'>Clothes</h1>
                </div>
                <div className='clothes__products'>
                    <Clothes data={data}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ClothesPage
