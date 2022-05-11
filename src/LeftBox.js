import { useState } from 'react';
import PurposeBox from './PurposeBox';
import classes from './LeftBox.module.css';

function LeftBox() {
	const [state, setState] = useState('personal');

	return (
		<div className={classes.bigBox}>
			<button
				id='personal'
				className={classes.box}
				onClick={() => setState('personal')}
			>
				<span>Personal</span>
			</button>
			<button
				id='business'
				className={classes.box}
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
	);
}

export default LeftBox;
