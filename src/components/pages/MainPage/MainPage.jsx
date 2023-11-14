import Header from '../../common/Header/Header.jsx';
import './style.css';
import Banner from '../../../img/banner.png';
import Footer from '../../common/Footer/Footer.jsx';

const MainPage = () => {

    return (
        <>
            <Header/>
                <main className="main">
                    <img className="main__banner" src={Banner} alt='Banner'/>
                </main>
            <Footer/>
        </>
    );
}

export default MainPage