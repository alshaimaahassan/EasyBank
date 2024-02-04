/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "./images/logo.svg"
import facebook from "./images/icon-facebook.svg"
import youtube from "./images/icon-youtube.svg"
import twitter from "./images/icon-twitter.svg"
import pinterest from "./images/icon-pinterest.svg"
import instagram from "./images/icon-instagram.svg"

function Footer() {
  return (
<footer >
  <div className='container'>
<div className='column2'>
<img className="logo" src={logo} alt="logo"/>
<div className='social'>
<img className="icon" src={facebook} alt="icon"/>
<img className="icon" src={youtube} alt="icon"/>
<img className="icon" src={twitter} alt="icon"/>
<img className="icon" src={pinterest} alt="icon"/>
<img className="icon" src={instagram} alt="icon"/>
</div>
</div>

<div className='column2'>
<a className="links" href='#'>About us</a>
<a className="links" href='#'>Contact</a>
<a className="links" href='#'>Blog</a>
</div>
<div className='column2'>
<a className="links" href='#'>careers</a>
<a className="links" href='#'>support</a>
<a className="links" href='#'>Privacy policy</a>
</div>
<div className='column-last'>
<button type="button" class="prembtn">Request invite</button>
<p>c Easybank. All Rights Reserved</p>
</div>
</div>
</footer> 
)
}

export default Footer