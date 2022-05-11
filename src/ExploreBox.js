import React from 'react'
import './ExploreBox.css'
import './amex.css'

export default function ExploreBox(props) {
  return (
    <div>
        <img src={props.image} alt="" />
        <h3>Explore Lending Options</h3>
        <button className='btn'>Visit Now</button>
    </div>
  )
}
