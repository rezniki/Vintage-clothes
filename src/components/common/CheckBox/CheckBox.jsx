import './style.css';

const CheckBox = (props) => {
    return (
        <>
            <h3 className='filter__clothes__type'>Clothes type</h3>
            <div className='filter__content__type'>
                {
                    props.filterdata.map((item) => (
                        <div className='filter__cloth__type'>
                            <input type='checkbox' id={item.id} name={item.name} />
                            <label className='filter__cloth__title' for={item.for}>{item.title}</label>
                        </div>
                    )) 
                }
            </div>
        </>
    );
};

export default CheckBox