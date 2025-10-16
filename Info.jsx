import React, { useContext } from "react";
import Store from "./Store";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tilty from "react-tilty";
import {SyncLoader} from "react-spinners";
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Info = () => {
  const navigate = useNavigate();
  const { productdata } = useContext(Store);

  const validProducts = productdata;
  const [userQuery,SetuserQuery]=useState("");
  const[QueryResult,SetQueryResult]=useState([]);
    
    const submithandler=(event)=>{
      SetuserQuery(event.target.value);
    }
  
    useEffect(() => {
      if(userQuery!=""){
        const filtered = validProducts.filter( (ele) =>
        ele.productname.includes(userQuery)
      );
        SetQueryResult(filtered);
      }
      else{
        SetQueryResult(validProducts);
      }
      console.log("user entered",userQuery);
    }, [userQuery,productdata]);

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <h2>Submitted Products</h2>
    <input onChange={(event)=>{submithandler(event)}} type="text" placeholder="Search........."/>
    <br/>
    <br/>
    <div className="info-container">
      
      {validProducts.length === 0 ? (
         <SyncLoader color="#36d7b7" />
      ) : (
        <div className="card-container">
          <Slider {...settings}>
          {QueryResult.map((item, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(`/detailinfo/${index}`)}
            >
              {item.image && <Tilty><img src={item.image} alt={item.productname} className="product-img" /></Tilty>}
              <p><b>Product Name:</b>{item.productname}</p>
              <p><b>Price:</b> ₹{item.price}</p>
            </div>
          ))}</Slider>
        </div>
      )}
    </div>
    </>
  );
};
export default Info;