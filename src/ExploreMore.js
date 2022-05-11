import React from 'react';
import ExploreBox from './ExploreBox';
import './ExploreMore.css';

export default function ExploreMore() {
	return (
		<div className='exploreDiv'>
			<h2>Explore More</h2>
			<div className='boxHolder'>
				<ExploreBox image='womanLaptop.jpeg' />
				<ExploreBox image="menCity.jpeg" />
                <ExploreBox image="womanLaptop2.jpeg"/>
			</div>
		</div>
	);
}
