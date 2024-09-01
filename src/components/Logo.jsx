import React from 'react'
import logoImage from '../assets/logo.png'; // Import the image

// import Logo.png from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <div><img  src={logoImage} alt="" style={{ width }} /></div>
  )
}

export default Logo