import React from 'react';
import slamdunk from './Assets/Akagi.jpg';
import slamdunk2 from './Assets/Fujima.jpg';
import slamdunk3 from './Assets/Mitsui.jpg';
import slamdunk4 from './Assets/Miyagi.jpg';
import slamdunk5 from './Assets/Rukawa.png';
import slamdunk6 from './Assets/Sakuragi.jpg';
import slamdunk7 from './Assets/Zendo.jpg';
import slamdunk8 from './Assets/anzai.jpg';
import slamdunk9 from './Assets/jin.jpg';
import slamdunk10 from './Assets/maki.jpg';
import slamdunk11 from './Assets/nobonaga.jpg';
import slamdunk12 from './Assets/ozmi.jpg';



const Card =()=>{
    return(
   <div className='bg-light-green dib br3 pa3 ma2 grow'>
        <img src={slamdunk} alt="slamdunk" />;
        <img src={slamdunk2} alt="slamdunk" />;
        <img src={slamdunk3} alt="slamdunk" />;
        <img src={slamdunk4} alt="slamdunk" />;
        <img src={slamdunk5} alt="slamdunk" />;
        <img src={slamdunk6} alt="slamdunk" />;
        <img src={slamdunk7} alt="slamdunk" />;
        <img src={slamdunk8} alt="slamdunk" />;
        <img src={slamdunk9} alt="slamdunk" />;
        <img src={slamdunk10} alt="slamdunk" />;
        <img src={slamdunk11} alt="slamdunk" />;
        <img src={slamdunk12} alt="slamdunk" />;
        
        <img alt ='slamdunk'src ='/Assets/Akagi.jpg'/>
         <img alt ='slamdunk'src ='/Assets/Fujima.jpg'/>
          <img alt ='slamdunk'src ='/Assets/Mitsui.jpg'/>
           <img alt ='slamdunk'src ='/Assets/Sakuragi.jpg'/>
            <img alt ='slamdunk'src ='/Assets/Rukawa.png'/>
             <img alt ='slamdunk'src ='/Assets/Zendo.jpg'/>
              <img alt ='slamdunk'src ='/Assets/anzai.jpg'/>
               <img alt ='slamdunk'src ='/Assets/jin.jpg'/>
                <img alt ='slamdunk'src ='/Assets/maki.jpg'/>
                 <img alt ='slamdunk'src ='/Assets/nobonaga.jpg'/>
                  <img alt ='slamdunk'src ='/Assets/ozmi.jpg'/>

        <div>
            <h2> christian </h2>
            <p>sample@aol.com</p>
        </div>
    </div>
    );
}
export default Card;