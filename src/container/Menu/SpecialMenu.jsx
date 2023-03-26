import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu que vous apprécierez"/>
      <h1 className='headtext__cormorant'>Menu de la semaine</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu__wine flex__center'>
        <p className='app__specialMenu-menu__heading'>Vin et bière</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wines,index) => (
            <MenuItem key={wines.title + index} title={wines.title} price={wines.price} tags={wines.tags}/>
          ))}
        </div>
      </div>
      
      <div className='app__specialMenu-menu__img'>
        <img src={images.menu} alt="menu img"/>
      </div>

      <div className='app__specialMenu-menu__cocktails flex__center'>
        <p className='app__specialMenu-menu__heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktails,index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>En voir plus</button>
    </div>

  </div>
);

export default SpecialMenu;
