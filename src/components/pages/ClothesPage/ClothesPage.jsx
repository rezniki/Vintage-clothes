import Header from '../../common/Header/Header.jsx';
import './style.css';
import Clothes from '../../common/Clothes/Clothes.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import Modal from '../../common/Modal/Modal.jsx';
import MultiRangeSlider from 'multi-range-slider-react';
import { filterdata } from './data.js';
import { genderdata } from './data.js';
import { useTranslation } from 'react-i18next';
import i18n from '../../common/LanguageSelector/i18n.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ClothesPage = () => {

    const [isModalShow, setModalShow] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(9999);
    const [cards, setCards] = useState([]);
    const [filter, setFilter] = useState(cards);
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
    
    const SliderStyle = {
        border: 'none',
        boxShadow: 'none',
        padding: '11px 10px',  
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

    useEffect(() => {
        const fetchCards = async() => {
            try {
                const response = await axios.get('https://657b3715394ca9e4af13fd34.mockapi.io/cards');
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };
        
        fetchCards();
    }, []);

    return (
        <>
            <Header/>
            <div className='clothes'>
                <div className='clothes__filters'>
                    <h3 className='clothes__filter' onClick={modalOpenClick}>{t('Filters')}</h3>
                    {isModalShow && <Modal title='Filters' modalCloseClick={modalCloseClick}>
                        <h3 className='filter__price'>Price filter</h3>
                        <MultiRangeSlider min={0} max={9999} step={500} minValue={minValue} maxValue={maxValue} style={SliderStyle} label={Label} ruler={Ruler} barInnerColor='#000000' thumbLeftColor='#000000' thumbRightColor='#000000' onInput={(e) => {handleInput(e)}}/>
                        <h3 className='filter__clothes__type'>Clothes type</h3>
                        <div className='filter__content__type'>
                            {
                                filterdata.map((check) => (
                                    <div className='filter__cloth__type'>
                                        <input type='checkbox' id={check.title} name={check.title} onChange={() => {
                                            let filterClothArray = cards.filter((card) => card.type === check.title); 
                                            setFilter(filterClothArray);
                                            console.log(filterClothArray);
                                        }} />
                                        <label className='filter__cloth__title' for={check.title}>{check.title}</label>
                                    </div>
                                )) 
                            }
                        </div>
                        <h3 className='filter__genders'>Sex</h3>
                        <div className='filter__content__gender'>
                            {
                                genderdata.map((check) => (
                                    <div className='filter__gender__type'>
                                        <input type='checkbox' id={check.gender} name={check.gender} onChange={() => {
                                            let filterGenderArray = cards.filter((card) => card.sex === check.gender);
                                            setFilter(filterGenderArray);
                                            console.log(filterGenderArray);
                                        }}/>
                                        <label className='filter__sex' for={check.gender}>{check.gender}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </Modal>}
                    <h1 className='clothes__title' onChange={showLanguage}>{t('ClothesFilter')}</h1>
                </div>
                <div className='clothes__products'>
                    <Clothes filter={filter} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ClothesPage
