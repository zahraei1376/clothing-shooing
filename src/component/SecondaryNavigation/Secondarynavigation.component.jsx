import React from 'react'
import {Link} from 'react-router-dom';
import '../../sassStyle/components/Secondarynavigation.styles.scss';

const Secondarynavigation=({linkk,text})=>(
    <div>
        <Link to={linkk}>{text}</Link>
        {/* <div className='header'>
            <div className='header__options'>
                <Link to='/shop' className='option'>shop</Link>
                <Link to='/shop' className='option'>contact</Link>
                <Link to='/shop' className='option'>shop</Link>
            </div>
        </div> */}
    </div>
    
   
);


export default Secondarynavigation;