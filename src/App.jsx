import React from 'react';
import './App.css';
// Components
import Button from './assets/components/Buttons/Button';
import Product from './assets/components/Products/Product';
//  Images Products
import bagNum01 from './assets/bag_1.png';
import bagNum02 from './assets/bag_2.png';
import bagNum03 from './assets/bag_3.png';
import bagNum04 from './assets/bag_4.png';
import AboutTile from './assets/components/About/About';
// About us images
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';


function App() {
  return (

    <>

        <h1>Handbags & Purses</h1>
          
          <nav>
             <Button 
              btnType="button"
              isDisabled= { false }
              clicked={ () => { console.log("To the collection")}}
             >   
             To the collection
             </Button>

             <Button 
              btnType="button"
              isDisabled= { false }
              clicked={ () => { console.log("Shop all bags")}}
             >   
             Shop all bags
             </Button> 

             <Button 
              btnType="button"
              isDisabled= { true }
              clicked={ () => { console.log("pre-orders")}}
             >   
             pre-orders
             </Button> 

          </nav>
      
      <main>
        <Product 
        label="Best seller"
        image={ bagNum01 } 
        altText="Nice bag with soft colortone"
        nameBag="The handy bag"
        priceBag="€400,-" 
        />

        <Product 
        label="Best seller"
        image={ bagNum02 } 
        altText="Nice bag with a brown color"
        nameBag="The stylisch bag"
        priceBag="€250,-" 
        />

        <Product 
        label="Best seller"
        image={ bagNum03 } 
        altText="Nice bag with an mos green color"
        nameBag="The simple bag"
        priceBag="€300,-" 
        />

        <Product 
        label="Best seller"
        image={ bagNum04 } 
        altText="Nice bag with an yellow color"
        nameBag="The trendy bag"
        priceBag="€150,-" 
        />

      </main>

      <footer>
        {/* Story of our brand */}
        <AboutTile 
        title="the brand"                
        >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel impedit, eligendi officia facilis labore consectetur dolor animi enim neque fuga eum, in quas veniam.</p>
            
          <p>Rerum expedita ratione cum inventore nam repellendus odio accusantium, labore adipisci repudiandae minus maiores, sit consequatur a earum. Harum adipisci itaque non laudantium excepturi saepe alias.</p>
        </AboutTile>

        <AboutTile 
          image= { brand }
          altText="Story about the branding of our company"
        >
        </AboutTile>

        <AboutTile 
          image= { ourStory }
          altText="two employees are smiling"
        >
        </AboutTile>

      {/* Our story */}
        <AboutTile 
          title="Our story"                
        >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel impedit, eligendi officia facilis labore consectetur dolor animi enim neque fuga eum, in quas veniam. Rerum expedita ratione cum inventore nam repellendus odio accusantium, labore adipisci repudiandae minus maiores.</p>
        </AboutTile>

      </footer>
      
    </>  

  );
}

export default App;



