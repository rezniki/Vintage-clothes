import Header from '../../common/Header/Header.jsx';
import './style.css';
import Clothes from '../../common/Clothes/Clothes.jsx';
import { data } from './data.js';
import Footer from '../../common/Footer/Footer.jsx';
import Modal from '../../common/Modal/Modal.jsx';
import MultiRangeSlider from 'multi-range-slider-react';
import { filterdata } from './data.js';
import { genderdata } from './data.js';
import { useState } from 'react';

const ClothesPage = () => {

    const [isModalShow, setModalShow] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(9999);

    const [filt, setFilt] = useState(data);
    
    const SliderStyle = {
        border: 'none',
        boxShadow: 'none',
        padding: '25px 10px',  
    };

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
                        <h3 className='filter__clothes__type'>Clothes type</h3>
                        <div className='filter__content__type'>
                            {
                                filterdata.map((item) => (
                                    <div className='filter__cloth__type'>
                                        <input type='checkbox' id={item.title} name={item.title} onChange={(event) => {
                                            let filterClothArray = data.filter((item) => item.type != event.target.value);
                                            setFilt(filterClothArray);
                                            console.log(filterClothArray);
                                        }} />
                                        <label className='filter__cloth__title' for={item.title}>{item.title}</label>
                                    </div>
                                )) 
                            }
                        </div>
                        <h3 className='filter__genders'>Sex</h3>
                        <div className='filter__content__gender'>
                            {
                                genderdata.map((item) => (
                                    <div className='filter__gender__type'>
                                        <input type='checkbox' id={item.gender} name={item.gender} onChange={(event) => {
                                            let filterGenderArray = data.filter((item) => item.type != event.target.value);
                                            setFilt(filterGenderArray);
                                            console.log(filterGenderArray);
                                        }}/>
                                        <label className='filter__sex' for={item.gender}>{item.gender}</label>
                                    </div>
                                ))
                            }
                        </div>
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
