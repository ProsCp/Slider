import React from "react";
import SliderMain from "../SliderMain/Index";
import { MainDiv, SliderWrapper1 } from "./Slider.styles";

const Slider = () => {
  return (
    <MainDiv className=" main div">
      <SliderWrapper1
        className="SliderWrapper
      "
      > 
     <SliderMain/>
      </SliderWrapper1>
    </MainDiv>
  );
};

export default Slider;
