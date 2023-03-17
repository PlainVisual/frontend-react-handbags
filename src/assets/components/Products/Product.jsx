import React from "react";
import './product.css';

function Product( { label, image, altText, nameBag, priceBag } ) {

  return (
    <>
   
    <article>
      <span> { label } </span>
      <img src= { image } alt= { altText } />
      <p>{ nameBag }</p>
      <h4>€{ priceBag },-</h4>
    </article>
    
    </>

  );

}

export default Product;