import React from "react";
import SliderIthem from "../../Commom-component/SliderItem/SliderIthem";
import { Button, SliderMain1 } from "./SliderMainStyles";
import { useState, useRef } from "react";
import Styled, { keyframes } from "styled-components";

const SliderMain = () => {
  const [Animation, setAnimation] = useState({ a: null });
  const [ArrForAdvisor, setArrForAdvisor] = useState({
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12],
  });

  const Next = () => {
    var ITEM = ArrForAdvisor.arr.shift();
    ArrForAdvisor.arr[ArrForAdvisor.arr.length] = ITEM;
    var new1 = ArrForAdvisor.arr;
    setArrForAdvisor({ arr: new1 });

    const rotate = keyframes`
    from {left: 268px}
    to {left: 0}`;
    setAnimation({ a: rotate });
    setTimeout(() => {
      setAnimation({ a: null });
    }, 500);
  };

  const Prev = () => {
    var ITEM = ArrForAdvisor.arr.pop();
    console.log(ITEM);
    ArrForAdvisor.arr.unshift(ITEM);
    console.log(ArrForAdvisor.arr);
    var new1 = ArrForAdvisor.arr;
    setArrForAdvisor({ arr: new1 });
    const rotate = keyframes`
    from {left: -268px} 
    to {left:0}`;
    setAnimation({ a: rotate });
    setTimeout(() => {
      setAnimation({ a: null });
    }, 500);
  };

  return (
    <div className="">
      <SliderMain1 className="SliderMain">
        {ArrForAdvisor.arr.map((d, i) => (
          <SliderIthem Animation={Animation.a} key={i} value={d} />
        ))}
      </SliderMain1>
      <Button
        onClick={() => {
          Prev();
        }}
      >
        prev
      </Button>
      <Button
        onClick={() => {
          Next();
        }}
      >
        next
      </Button>
    </div>
  );
};

export default SliderMain;
