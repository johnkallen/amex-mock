import React from 'react'
import GameIFrame from './GameIFrame'
import './ImageSectionSmall.css'

export default function ImageSectionSmall() {
  return (
    <div className='rightSection'>
        <GameIFrame />
        <img className='cardOfferSmall' src="./cardOffer.png" alt="card offer" />
    </div>
  )
}
