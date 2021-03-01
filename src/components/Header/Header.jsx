import React, { useState } from "react";
import './Header.css';
import logo from './1.png';

const Header = (props) => {

  let inputPlaceHolder;
  let setplaceHolder;
 
 [inputPlaceHolder,setplaceHolder] = useState("What do You want to watch");


  function handleClick() {
    setplaceHolder("ZEN!");
  }

  return (
    <div className="FlexMain">
      <div className="HeaderFlex">
        <img src={logo}></img>
        <div className="HeaderLink">ADD MOVIE</div>
      </div>
      <div className="DivStyle">
        <div className="InputStyle">
          <span>FIND YOUR FILM</span>
        <input className="InputHimself"
          type="text"
          placeholder={inputPlaceHolder}
          required=""
        ></input>
        </div>
        <input className="ButtonStyle" type="submit" value="SEARCH"/>
      </div>
    </div>
  );
};

export default Header;
