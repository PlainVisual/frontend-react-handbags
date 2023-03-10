import React from "react";
import './button.css'

function Button({ btnType, isDisabled, children, clicked }) {

  return (

    <>
      <button 
        type= { btnType }
        disabled= { isDisabled }
        onClick= { clicked }
      >                  
       { children} 
      </button>
    </>

  );

}

export default Button;