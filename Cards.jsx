import React from 'react';
import './Cards.css';
import logo from './assets/react.svg';
const Cards = () => {
  const cardsarr = [
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/y/7/free-rngvti03d-hs-sareemall-unstitched-original-imahfq8cwy8x6bm3.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/y/r/n/free-regular-tankori-unstitched-original-imahdnhxbqubzdgz.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Red" },
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/k/x/free-kanjivaram-sarees-kanjivaram-saree-banarasi-silk-high-original-imah2jfecfdu3uev.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/w/g/l/free-vanya07e-hs-sareemall-unstitched-original-imahfq86fpdgctfm.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sari/f/t/e/free-hocl-tdfrsew-house-of-common-no-blouse-original-imah8whhjpffagyv.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Red" },
    { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/1/b/free-2-star-sheldrom-mart-unstitched-original-imahc6ad5vwfja6j.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" }
  ];
  return (
    <div className="cardbody">
      {cardsarr.map((card, idx) => (
        <div key={idx} className={card.variant === "Green" ? "card bg-green" : "card bg-red"}>
          <div className="logo">
            <img src={card.logo} alt={card.name} />
          </div>
          <div className="info">
            <div className="brand">{card.brand}</div>
            <div className="name">Name: {card.name}</div>
            <div className="colour">{card.colour}</div>
            <div className="price">Price : {card.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Cards;
// using props accessing data in unidirectional from parent to child components
// in parent component 
  // const cardsarr = [
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/y/7/free-rngvti03d-hs-sareemall-unstitched-original-imahfq8cwy8x6bm3.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/y/r/n/free-regular-tankori-unstitched-original-imahdnhxbqubzdgz.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Red" },
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/k/x/free-kanjivaram-sarees-kanjivaram-saree-banarasi-silk-high-original-imah2jfecfdu3uev.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/w/g/l/free-vanya07e-hs-sareemall-unstitched-original-imahfq86fpdgctfm.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" },
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sari/f/t/e/free-hocl-tdfrsew-house-of-common-no-blouse-original-imah8whhjpffagyv.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Red" },
  //   { logo: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/1/b/free-2-star-sheldrom-mart-unstitched-original-imahc6ad5vwfja6j.jpeg?q=70", brand: "Omsaiarts", name: "Tankori", colour: "Purple", price: "$100", variant: "Green" }
  // ];

  // return (
  //   <div className="cardbody">
  //      {cardsarr.map((item, index) => (
  //       <Cards key={index} Data={item} />
  //     ))}
  //   </div>
  // )
// in child component
  // const Cards = (props) => {
  //   return (
  //     <>
  //       <div className={props.Data.variant === "Green" ? "card bg-green" : "card bg-red"}>
  //         <div className="logo">
  //           <img src={props.Data.logo} />
  //         </div>
  //         <div className="info">
  //           <div className="brand">{props.Data.brand}</div>
  //           <div className="name">Name: {props.Data.name}</div>
  //           <div className="colour">{props.Data.colour}</div>
  //           <div className="price">Price : {props.Data.price}</div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
