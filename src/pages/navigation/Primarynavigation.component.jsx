import React from 'react';
import {Link} from 'react-router-dom';
import '../../sassStyle/layout/navigation.styles.scss';


const Navigation=()=>(
    <div className='navigation'>
        <input type='checkbox' className='navigation__checkbox' id='navi-toggle'/>
        <label className='navigation__btn' htmlFor='navi-toggle'>
            <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
            <ul className='navigation__list'>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>Shop</Link></li>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>contact</Link></li>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>sign in</Link></li>
            </ul>
        </nav>
    </div>
);

export default Navigation;