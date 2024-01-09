import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newslettter and stay updated</p>
        <div>
            <input type="email" placeholder='Your E-mail Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter