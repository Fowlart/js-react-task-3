import React, { useState } from "react";
import logo from "./1.png";
import FlexMain from "./FlexMain.styled";
import InputStyle from "./InputStyle.styled";
import HeaderFlex from "./HeaderFlex.styled";
import HeaderLink from "./HeaderLink.styled";
import InputWraper from "./InputWraper.styled";
import Input from "./Input.styled";
import Button from "./Button.styled";

const Header = (props) => {
  let inputPlaceHolder;
  let setplaceHolder;

  [inputPlaceHolder, setplaceHolder] = useState("What do You want to watch");

  // passing standard and custom props into simple element
  let input = (
    <Input
      type="text"
      placeholder={inputPlaceHolder}
      inputColor="black"
    ></Input>
  );

  return (
    <FlexMain>
      <HeaderFlex>
        <img src={logo}></img>
        <HeaderLink>ADD MOVIE</HeaderLink>
      </HeaderFlex>
      <InputWraper>
        <InputStyle>
          <span>FIND YOUR FILM</span>
          {input}
        </InputStyle>
        <Button type="submit" value="SEARCH" />
      </InputWraper>
    </FlexMain>
  );
};

export default Header;
