import '../../sassStyle/components/menu-item.styles.scss';
import React from 'react';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,history,linkUrl,match})=>(
    <div 
    className={`${size} menu_item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'></div>
        <div className='menu_item-content'>
            <h1 className='menu_item-title'>{title.toUpperCase()}</h1>
            <span className='menu_item-subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);