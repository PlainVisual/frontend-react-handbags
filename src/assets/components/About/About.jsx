import React from "react";
import './about.css'



function AboutTile({ title, children, image, altText}) {

  return (

    <section>
      {/* condioneel renderen - door operator && te gebruiken kunnen we elementen wel of niet toelaten tot te DOM op basis van toepassing in elenet */}
      { image && <img src={ image } alt= { altText } /> }
      { title && <h2> { title } </h2> }
      { children }
    </section>

  )



}



export default AboutTile;