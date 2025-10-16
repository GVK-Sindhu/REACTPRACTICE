import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Store from "./Store";
import Tilty from "react-tilty";
import {SyncLoader  } from "react-spinners";

function Detailinfo() {
  const { index } = useParams(); 
  const { productdata } = useContext(Store);
  const [mycard, setmycard] = useState(null);

  useEffect(() => {
    const idx = parseInt(index);
    if (productdata && productdata.length > idx) {
      setmycard(productdata[idx]);
    }
  }, [index, productdata]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Details</h2>
      
      {mycard ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            maxWidth: "400px",
          }}
        >
          
          <img
            src={mycard.image}
            alt="product"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p><b>Product name:{mycard.productname}</b></p>
          <p><b>Brand:</b> {mycard.brandname}</p>
          <p><b>Quantity</b> {mycard.quantity}</p>
          <p><b>Price:</b> ₹{mycard.price}</p>
          <p><b>Description:</b> {mycard.desc}</p>
        </div>
      ) : (
        <SyncLoader color="#36d7b7" />
      )}
    </div>
  );
}

export default Detailinfo;
