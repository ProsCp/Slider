import React from 'react';
import {  SliderItem1 } from './SliderStyles';


const SliderIthem = (props) => {
  console.log(props.Animation);
  return (
<SliderItem1 Animation={props.Animation} className="SliderItem">{props.value}</SliderItem1>
  )
}

export default SliderIthem