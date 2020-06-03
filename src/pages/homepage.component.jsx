import React from 'react';
import Directory from '../component/directory/directiry.component';
import '../sassStyle/pages/homepage.style.scss';
import PrimaryHeader from '../component/Primaryheader/Primaryheader.component';

import { HomePageContainer } from './homepage.styles';

// const HomePage=()=>(
//     <div className='homepage'>
//         <PrimaryHeader/>
//         <Directory/>
//     </div>
// )

const HomePage=()=>(
    <HomePageContainer>
        <PrimaryHeader/>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;