import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
      <h1 className='title'>Movie Name</h1>
      
      <div className='banner_buttons'>
    <button className='button'>Play</button>
    <button className='button'>My List</button>
      </div>
        <h1 className='discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</h1>
        <div className="fade"></div>
    </div>
   
    </div>
  )
}

export default Banner
