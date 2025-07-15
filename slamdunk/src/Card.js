import React from 'react';
import slamdunk from './Assets/Akagi.jpg';

const Card =()=>{
    return(
    <div>
        <img src={slamdunk} alt="slamdunk" />;
        <img alt ='slamdunk'src ='/Assets/Akagi.jpg'/>
        <div>
            <h2> christian </h2>
            <p>sample@aol.com</p>
        </div>
    </div>
       
    );
}
export default Card;