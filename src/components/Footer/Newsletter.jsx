import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Souscrivez à notre Newsletter</h1>
      <p className='p__opensans'>Et ne manquez pas nos nouvelles!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Entrez votre adresse e-mail'/>
      <button className='custom__button'>Souscrivez</button>
    </div>
  </div>
);

export default Newsletter;
