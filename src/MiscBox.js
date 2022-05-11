import './App.css';
import './amex.css'

function MiscBox(props) {
    return (
        <div className='col-md-4 margin-0-tb'>
            <div className='border: ;'>
                <div className='contentlibrary-container'>
                    <div className='cmp-contentlibrary-container--showcase-card showcase-card' >
                        <div className='card card-rounded card-relative pad-responsive dls-white-01-bg'>
                            <div className='text-align-center'>
                                <span className='icon icon-lg margin-1-t margin-b'>
                                    <img src={props.image} alt="logo" />
                                    <p className="heading-3 margin-1-b">{props.title}</p>
                                    <p className="body-1 margin-2-b">{props.description}</p>
                                </span>
                            </div>
                            <div className='stack-1'>
                                <a className='btn fluid' href='/'>{props.buttonText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiscBox;
