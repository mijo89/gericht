import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Nous trouver</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Addresse du restaurant</p>
        <p className='p__cormorant' style={{color: "#DCCA87", margin: "2rem 0"}}>Horaires d'ouverture</p>
        <p className='p__opensans'>Lundi à Vendredi : 11h00 - 15h00 / 17h00 - 01h00</p>
        <p className='p__opensans'>Samedi et Dimanche : 10h00 - 02h00 </p>
      </div>
      <button type='button' className='custom__button'>En voir plus</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
