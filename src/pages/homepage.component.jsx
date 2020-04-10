import React from 'react';
import Directory from '../component/directory/directiry.component';
import '../sassStyle/pages/homepage.style.scss';
import PrimaryHeader from '../component/Primaryheader/Primaryheader.component';

const HomePage=()=>(
    <div className='homepage'>
        <PrimaryHeader/>
        <Directory/>
    </div>
)

export default HomePage;