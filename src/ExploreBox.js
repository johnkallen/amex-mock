import React from 'react';
import './ExploreBox.css';
import LeftBox from './LeftBox';

export default function ExploreBox(props) {
  return (
    <div className='ExploreBox'>
        <img className='exploreImage' src={props.image} alt="" />
        <h3>Explore Lending Options</h3>
        <button className='btn'>Visit Now</button>
    </div>
  )
}
