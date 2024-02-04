/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./images/logo.svg"
import list from "./images/icon-hamburger.svg"
import close from "./images/icon-close.svg"
import { useState } from "react"
function Header(){
  let listy = document.getElementById("list-ham")
  let [value, setValue] = useState()
  let clickbtn = ()=>{
    value ? setValue(false):setValue(true)
  }
  if(listy){
    if(value){
          listy.style.display="block"
  }else{
    listy.style.display="none"
  }
    }

    return(
    
<div>
<header>
  <img className="logo" src={logo} alt="logo"/>
  <ul className="list-cont">
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
    <li>blog</li>
    <li>careers</li>
  </ul>
  <button type="button" class="prembtn">Request invite</button>
<button id="btn" ><img src={list} alt="list" className="hamburg" onClick={clickbtn}/></button>
<ul className="list-ham" id="list-ham">
  <img src= {close} alt="c"  onClick={clickbtn}></img>
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
    <li>blog</li>
    <li>careers</li>
  </ul>
</header>
</div>
    )
}
export default Header