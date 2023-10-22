import './style.css';

const GenderBox = (props) => {
    return (
        <>
            <h3 className='filter__genders'>Sex</h3>
            <div className='filter__content__gender'>
                {
                    props.genderdata.map((item) => (
                        <div className='filter__gender__type'>
                            <input type='checkbox' id={item.id} name={item.name}/>
                            <label className='filter__sex' for={item.for}>{item.title}</label>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default GenderBox