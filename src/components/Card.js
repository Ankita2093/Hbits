import React from 'react'

function Card(props) {
  return (
    <>
      <div className='card'>
        <div className='info-card'>
          <img className='card-image' src={props.image} alt='not found' />
          <div className='card-title'>{props.price}</div>
          <span className=' card-text'>{props.name}</span>
        </div>
      </div>
    </>
  )
}

export default Card
