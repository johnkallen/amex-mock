import './App.css';
import './amex.css'
import MiscBox from './MiscBox';



function MiscBoxContainer(props) {
    return (
         <div className='grid aem-GridColumn aem-GridColumn--default--12'>
            <div className='servicing-title-grid'>   
                <div className="card-img-bg" />
                <div className='container'>
                    <div className='row pad-3-t pad-3-b'>
                        <MiscBox 
                            image="./pointer.png"
                            title="Places to Use Your Card"
                            description="Check out businesses that accept Amex"
                            buttonText="Explore Now"/>
                        <MiscBox 
                            image="./creditScore.png"
                            title="Free Credit Score"
                            description="Get a detailed TransUnion credit report that helps you stay informed"
                            buttonText="View Now"/>
                        <MiscBox 
                            image="./creditHand.png"
                            title="Start Accepting Amex"
                            description="Get access to 112MM+ Cards WorldWide and competitive pricing opportunities"
                            buttonText="Learn More"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MiscBoxContainer;
