import pizzaImg from "../images/1.jpg";
import burgerImg from "../images/2.jpg";
import cocaImg from "../images/3.jpg";
import saladImg from "../images/4.jpg";
import waterImg from "../images/5.jpg";
// import iceCreamImg from "../images/icecream.png";
// import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "VideoReg1", price: 17.99, Image: pizzaImg,id:1 },
    { title: "VideoReg2", price: 15, Image: burgerImg,id:2 },
    { title: "VideoReg3", price: 3.5, Image: cocaImg ,id:3},
    { title: "VideoReg4", price: 2.5, Image: saladImg,id:4 },
    { title: "VideoReg5", price: 0.99, Image: waterImg,id:6 }
  ];
}
