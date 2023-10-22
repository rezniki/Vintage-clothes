import './style.css';

const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <button className='modal__delete__button' onClick={props.modalCloseClick}>&times;</button>
                <h2 className='modal__title'>{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}

export default Modal