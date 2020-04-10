import React from 'react';
import {Link} from 'react-router-dom';
import '../../sassStyle/components/Primaryheader.styles.scss';
import Navigation from '../../pages/navigation/Primarynavigation.component';
import '../../asset/sprite.svg';

const PrimaryHeader=()=>(
    <div className='header'>
        <Link to='/'> 
            <svg  className='header_logo'>
                <use xlinkHref={'#icons-sun'}/>
                {/* <use xlinkHref={'../../asset/sprite.svg#icon-sun'}></use> */}
            </svg>
        </Link>
        <Navigation/>
    </div>
);

export default PrimaryHeader;