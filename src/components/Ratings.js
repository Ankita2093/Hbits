import React from 'react'
import { render } from 'react-dom'
import Google1 from '../Images/Google1.png'
import ReactStars from 'react-rating-stars-component'

import Group16 from '../Images/Group16.png'

export default function Ratings(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <div
        style={{
          backgroundColor: '#f3f3f3',
          height: '250px',
          margin: '10px',
          borderRadius: '10px',
          width: '350px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '10px',
          }}
        >
          <img
            src={Group16}
            alt='Not Found'
            style={{ height: '50px', width: '80px', marginTop: '10px' }}
          />
          <div style={{ marginRight: '780px', marginTop: '10px' }}>
            <p>{props.name}</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ marginLeft: '20px' }}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={25}
              activeColor='#ffd700'
            />
          </div>
          <div style={{ marginLeft: '20px', marginTop: '10px' }}>
            {props.days}
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <p>{props.comment}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginLeft: '10px' }}>
            <img
              src={Google1}
              alt='Not Found'
              style={{ height: '20px', width: '20px' }}
            />
          </div>
          <div style={{ marginLeft: '10px' }}>Posted on</div>
          <div style={{ color: '#0798ed', marginLeft: '10px' }}>Google</div>
        </div>
      </div>
    </>
  )
}
