import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactez nous</h1>
        <p className='p__opensans'>12 rua Luz Soriano, 2845-120 Amora</p>
        <p className='p__opensans'>+33 7 68 98 02 37</p>
        <p className='p__opensans'>+33 6 16 02 23 45</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo"/>
        <p className='p__opensans'>"Le meilleur moyen de se servir est de servir vos clients.</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <p className='p__opensans'>Lundi à Vendredi</p>
        <p className='p__opensans'>11h00 - 15h00 / 18h00 - 1h00</p>
        <p className='p__opensans'>Samedi et Dimanche</p>
        <p className='p__opensans'>10h00 - 2h00</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023. Mijoro, tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;
