import { useState } from 'react';
import PurposeBox from './PurposeBox';

function LeftBox() {
	const [state, setState] = useState('personal');

	return (
		// <div className='col-md-3 col-md-offset-0 margin-0-tb '>
		// 	<div className='tabscomp'>
		// 		<div className='tabs border'>
		<div className='tab-menu'>
			<button
				id='personal'
				className='tab-link pad-responsive-lr'
				onClick={() => setState('personal')}
			>
				<span>Personal</span>
			</button>
			<button
				id='business'
				className='tab-link pad-responsive-lr'
				onClick={() => setState('business')}
			>
				<span>Business</span>
			</button>
			{state === 'personal' ? (
				<PurposeBox name='personal' />
			) : (
				<PurposeBox name='business' />
			)}
		</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default LeftBox;
