import './style.css';
import Gramopghone from '../../../img/gramopghone-1.svg';
import Instagram from '../../../img/instagram-1.svg';
import Telegram from '../../../img/telegram-1.svg';
import Viber from '../../../img/viber-1.svg';
import Profile from '../../../img/profile-1.svg';
import LanguageSelector from '../LanguageSelector/LanguageSelector.jsx';

const Header = () => {

    

    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__logo'>
                    <img className='header__gramopghone' src={Gramopghone} alt='Gramopghone'/>
                    <div className='header__logo__text'>
                        <h1 className='header__title'>Millésime</h1>
                        <p className='header__text'>magasin de vêtements et bijoux vintage</p>
                    </div>
                </div>
                <nav className='header__menu'>
                    <a className='header__link' href="/">Home</a>
                    <a className='header__link' href="/clothes">Clothes</a>
                    <a className='header__link' href="/accessories">Accessories</a>
                    <a className='header__link' href="/bijouterie">Bijouterie</a>
                    <a className='header__link' href="/shoes">Shoes</a>
                    <a className='header__link' href="/other">Other</a>
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
