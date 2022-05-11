import React from 'react'
import ImageSectionLarge from './ImageSectionLarge'
import ImageSectionSmall from './ImageSectionSmall'
import './MainSection.css'

export default function
  MainSection() {
  return (
    <div className='main'>
      <div className="leftHolder">Selector Holder</div>
      <div className="centerHolder">
        <ImageSectionLarge />
      </div>
      <div className="rightHolder">
        <ImageSectionSmall />
      </div>
    </div>
  )
}
