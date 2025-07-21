import React from 'react';
import slamdunk1 from './Assets/Akagi.jpg';
import slamdunk2 from './Assets/Fujima.jpg';
import slamdunk3 from './Assets/Mitsui.jpg';
import slamdunk4 from './Assets/Sakuragi.jpg';
import slamdunk5 from './Assets/Rukawa.png';
import slamdunk6 from './Assets/Zendo.jpg';
import slamdunk7 from './Assets/anzai.jpg';
import slamdunk8 from './Assets/jin.jpg';
import slamdunk9 from './Assets/maki.jpg';
import slamdunk10 from './Assets/nobonaga.jpg';
import slamdunk11 from './Assets/ozmi.jpg';
import slamdunk12 from './Assets/Miyagi.jpg';

const imageList = [
  slamdunk1,
  slamdunk2,
  slamdunk3,
  slamdunk4,
  slamdunk5,
  slamdunk6,
  slamdunk7,
  slamdunk8,
  slamdunk9,
  slamdunk10,
  slamdunk11,
  slamdunk12,
];

const Card = () => {
  return (
    <div className="bg-white ">
      <div className="flex flex-wrap justify-center ">
        {imageList.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`slamdunk-${index}`}
            className="bg-light-green dib br3 pa3 ma2 grow"
            style={{ width: '200px', height: '200px' }}
          />
        ))}
      </div>
      <div className="tc mt3">
      </div>
    </div>
  );
};

export default Card;
