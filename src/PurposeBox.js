import UtilBox from './UtilBox';
import PersonalCards from './Images/PersonalCards.jpg';
import SavingAccounts from './Images/SavingAccounts.png';
import PersonalLoans from './Images/PersonalLoans.png';
import PersonalChecking from './Images/PersonalChecking.png';
import GiftCards from './Images/GiftCards.png';
import BusinessCards from './Images/BusinessCards.jpg';
import CorporatePrograms from './Images/CorporatePrograms.jpg';
import PaymentSolutions from './Images/PaymentSolutions.png';
import BusinessChecking from './Images/BusinessChecking.png';
import BusinessLineOfCredit from './Images/BusinessLineOfCredit.png';
import AcceptAmericanExpress from './Images/AcceptAmericanExpress.png';

function PurposeBox(props) {
	const personalObject = [
		{
			title: 'Personal Cards',
			image: PersonalCards,
		},
		{
			title: 'Saving Accounts',
			image: SavingAccounts,
		},
		{
			title: 'Personal Loans',
			image: PersonalLoans,
		},
		{
			title: 'Personal Checking',
			image: PersonalChecking,
		},
		{
			title: 'Gift Cards',
			image: GiftCards,
		},
	];

	const businessObject = [
		{
			title: 'Business Cards',
			image: BusinessCards,
		},
		{
			title: 'Corporate Programs',
			image: CorporatePrograms,
		},
		{
			title: 'Payment Solutions',
			image: PaymentSolutions,
		},
		{
			title: 'Business Checking',
			image: BusinessChecking,
		},
		{
			title: 'Business Line of Credit',
			image: BusinessLineOfCredit,
		}
	];

	const listOfPersonalObject = personalObject.map((item) => (
		<UtilBox title={item.title} image={item.image} />
	));

	const listOfBusinessObject = businessObject.map((item) => (
		<UtilBox title={item.title} image={item.image} />
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
