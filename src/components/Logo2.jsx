import React from 'react'
import logoImage from '../assets/logo2.png'; // Import the image

// import Logo.png from '../assets/logo.png'
function Logo2({width = '100px'}) {
  return (
    <div><img  src={logoImage} alt="" style={{ width }} /></div>
  )
}

export default Logo2