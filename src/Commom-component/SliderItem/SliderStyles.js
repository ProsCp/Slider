import Styled from 'styled-components';

// const rotate = keyframes`
//   from {
//     /* transform: rotate(0deg); */
//    opacity: 0;
//   transition-delay: 0.3s;
//   transition-duration: 0.2s;
//   transition-property: opacity;
//   transition-timing-function: ease-in;
//   left: -268px;
//   }

//   to {
//     /* transform: rotate(360deg); */
//     opacity: 1;
//   transition-delay: 0s;
//   transition-duration: 0.2s;
//   transition-property: opacity;
//   transition-timing-function: ease-out;
// left: 0;
//   }
// `;

export const SliderItem1= Styled.div`
border: 2px solid red;
/* width: 268px; */
min-width:268px;
max-height: 320px;
/* opacity: ${(props)=>props.Opacity}; */
margin: 0px 10px;
display: inline-block;
/* overflow: hidden; */
box-sizing: border-box;
position: relative;
opacity: 1;
  animation: ${(props)=>props.Animation?props.Animation:null} 0.5s ease-in ;
`
