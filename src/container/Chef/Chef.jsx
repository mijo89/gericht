import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      
      <SubHeading title="Le mot du Chef"/>
      
      <h1 className='headtext__cormorant'>
        Notre credo
      </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis, omnis rerum magnam sed praesentium asperiores, repellendus qui minus labore debitis. Consequatur laboriosam tenetur dicta harum explicabo provident deserunt maxime?</p>
        </div>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur corporis nostrum dolorem cum, eaque voluptatem facere iure aut! Qui odit doloremque ipsa beatae nobis reiciendis, sit rerum? Consequuntur, rerum.</p>
      </div>

      <div className='app__chef-sign'>
        <p className='p__opensans'> Chef de partie </p>
        <img src={images.sign} alt='sign'/>
      </div>

    </div>

  </div>
);

export default Chef;
