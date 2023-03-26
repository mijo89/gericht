import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center sector__padding" id="about">

    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter"></img>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          A propos
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Restaurant branché situé au coeur de la capitale, nous proposons des produits récents qui vous surprendront.</p>
        <button type="button" className="custom__button">En savoir plus</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about__knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          Notre histoire
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. </p>
        <button type="button" className="custom__button">En savoir plus</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
