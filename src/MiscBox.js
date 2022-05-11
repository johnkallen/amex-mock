import './App.css';
import './amex.css'

function MiscBox(props) {
    return (
        <div className='contentlibrary-container'>
            <div className='cmp-contentlibrary-container--showcase-card showcase-card'>
                <div className='card card-rounded card-relative pad-responsive dls-gray-01-bg'>
                    <div className='text-align-center'>
                        This is a test name
                    </div>
                    <img src={props.image} alt="logo" />
                    <a className='btn fluid' href='/'>Explore Now</a>

                </div>
            </div>
        </div>
    );
}

export default MiscBox;
