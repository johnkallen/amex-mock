import './amex.css';
import classes from './UtilBox.module.css';

const UtilBox = (props) => {
	return (
		<div className='product-nav-item-content product-nav-item-content-56'>
			<button className={classes.button}>
				<div className='pad-1-r'>
					<img
						className='icon icon-md dls-bright-blue dls-icon-cards-contactless'
						src={props.image}
						alt='logo'
					/>
				</div>
				<div className='icon-text-container-56'>
					<h4 className='heading-3 display-block dls-gray-06 dls-gray-06-sm'>
						{props.title}
					</h4>
				</div>
			</button>
		</div>
	);
};

export default UtilBox;
