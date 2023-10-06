import React from 'react';
import { phone } from './ProdectDetaills'
// import { useState } from "react";
import axios from "axios";



        const initPayment = (data) => {
          
		
          const options = {
            key: "rzp_test_uCcnRXcs4UqNnk",
            amount: data.amount,
            currency: data.currency,
            name: phone[0].name,
            description: "Test Transaction",
            image: phone[0].img,
            order_id: data.id,
            handler: async (response) => {console.log(response,"res");
              try {
                const verifyUrl = "http://localhost:3002/api/payment/verify";
                const { data } = await axios.post(verifyUrl, response);
                console.log(data,"verify resp");
                
                
              } catch (error) {
                console.log(error);
               
              }
            },
            theme: {
              color: "red",
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
	};

  const handlePayment = async () => {
    
		try {
			const {data} = await axios.post("http://localhost:3002/api/payment/orders", { amount: phone[0].price });
			console.log(data);
			initPayment(data.data);
      
      
			
		} catch (error) {
			console.log(error);
    
		}
	};

const Product = ({product}) => (
     
       
         <div className="book_container" key={product.id}>
         <img src={product.img} alt="book_img" className="book_img" />
         <p className="book_name">{product.name}</p>
         <p className="book_author">{product.author}</p>
         <p className="book_price">
           Price : <span>&#x20B9; {product.price}</span>
         </p>
          <button onClick={handlePayment} className="buy_btn"> 
           buy now
         </button>
       </div>
 
      

);


export default Product;