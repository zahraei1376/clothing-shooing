import React from 'react';
import {Link} from 'react-router-dom';
import '../../sassStyle/components/Primaryheader.styles.scss';
import Navigation from '../../pages/navigation/Primarynavigation.component';
import ShowIcon from '../icons/icons.component';
// import '../../asset/sprite.svg';

const PrimaryHeader=()=>(
    <div className='header'>
        <Link to='/'> 
            {/* <ShowIcon name='icon-sun' className={{width:'30rem'}}/> */}
            <svg  className='header_logo'>
                <use xlinkHref={'../../asset/sprite.svg#icon-sun'}></use>
            </svg>
        </Link>
        <Navigation/>
    </div>
);

export default PrimaryHeader;