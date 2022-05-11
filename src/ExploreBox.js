import React from 'react';
import './ExploreBox.css';
import LeftBox from './LeftBox';

export default function ExploreBox(props) {
	return (
		<div>
			<img src={props.image} alt='' />
			<h3>Explore Lending Options</h3>
			<button>Visit Now</button>
			<LeftBox />
		</div>
	);
}
