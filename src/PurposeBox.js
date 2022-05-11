import UtilBox from './UtilBox';

function PurposeBox(props) {
	const personalObject = [
		'Personal Cards',
		'Saving Accounts',
		'Personal Loans',
		'Personal Checking',
		'Gife Cards',
	];

	const businessObject = [
		'Business Cards',
		'Corporate Programs',
		'Payment Solutions',
		'Business Checking',
		'Business Line of Credit',
		'Accept American Express',
	];

	const listOfPersonalObject = personalObject.map((item) => (
		<UtilBox title={item} />
	));

	const listOfBusinessObject = businessObject.map((item) => (
		<UtilBox title={item} />
	));

	return (
		<div className='tab-content pad-tb pad-responsive-lr'>
			<div className='contentlibrary-container section'>
				{props.name === 'personal'
					? listOfPersonalObject
					: listOfBusinessObject}
			</div>
		</div>
	);
}

export default PurposeBox;
